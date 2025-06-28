
-- Create admin roles enum
CREATE TYPE public.admin_role AS ENUM ('super_admin', 'admin', 'moderator');

-- Create admin_users table for separate admin credentials
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  admin_role admin_role NOT NULL DEFAULT 'admin',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES public.admin_users(id),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Enable RLS on admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users table
CREATE POLICY "Super admins can manage all admin users"
  ON public.admin_users
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au
      WHERE au.id = auth.uid()::uuid
      AND au.admin_role = 'super_admin'
      AND au.is_active = true
    )
  );

CREATE POLICY "Admins can view all admin users"
  ON public.admin_users
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au
      WHERE au.id = auth.uid()::uuid
      AND au.is_active = true
    )
  );

-- Create function to authenticate admin users
CREATE OR REPLACE FUNCTION public.authenticate_admin(
  p_email TEXT,
  p_password TEXT
) RETURNS TABLE (
  admin_id UUID,
  admin_email TEXT,
  admin_role admin_role,
  is_active BOOLEAN
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    au.id,
    au.email,
    au.admin_role,
    au.is_active
  FROM public.admin_users au
  WHERE au.email = p_email
    AND au.password_hash = crypt(p_password, au.password_hash)
    AND au.is_active = true;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to create admin user
CREATE OR REPLACE FUNCTION public.create_admin_user(
  p_email TEXT,
  p_password TEXT,
  p_admin_role admin_role DEFAULT 'admin'
) RETURNS UUID AS $$
DECLARE
  new_admin_id UUID;
BEGIN
  INSERT INTO public.admin_users (email, password_hash, admin_role)
  VALUES (p_email, crypt(p_password, gen_salt('bf')), p_admin_role)
  RETURNING id INTO new_admin_id;
  
  RETURN new_admin_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create default super admin (change these credentials immediately)
SELECT public.create_admin_user('admin@dryne.com', 'admin123', 'super_admin');

-- Add admin management policies for profiles table
CREATE POLICY "Admins can view all profiles"
  ON public.profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au
      WHERE au.id = auth.uid()::uuid
      AND au.is_active = true
    )
  );

CREATE POLICY "Admins can update user profiles"
  ON public.profiles
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users au
      WHERE au.id = auth.uid()::uuid
      AND au.admin_role IN ('super_admin', 'admin')
      AND au.is_active = true
    )
  );

-- Create user management functions
CREATE OR REPLACE FUNCTION public.admin_update_user_status(
  p_user_id UUID,
  p_is_active BOOLEAN
) RETURNS BOOLEAN AS $$
BEGIN
  -- This would typically update a user status field
  -- For now, we'll update the profiles table
  UPDATE public.profiles
  SET updated_at = now()
  WHERE id = p_user_id;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
