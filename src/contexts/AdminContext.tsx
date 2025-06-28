
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AdminUser {
  id: string;
  email: string;
  admin_role: 'super_admin' | 'admin' | 'moderator';
  is_active: boolean;
}

interface AdminContextType {
  adminUser: AdminUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in from localStorage
    const storedAdmin = localStorage.getItem('admin_user');
    if (storedAdmin) {
      try {
        setAdminUser(JSON.parse(storedAdmin));
      } catch (error) {
        localStorage.removeItem('admin_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.rpc('authenticate_admin', {
        p_email: email,
        p_password: password
      });

      if (error) {
        return { error };
      }

      if (data && data.length > 0) {
        const admin = data[0];
        const adminUser: AdminUser = {
          id: admin.admin_id,
          email: admin.admin_email,
          admin_role: admin.admin_role,
          is_active: admin.is_active
        };
        
        setAdminUser(adminUser);
        localStorage.setItem('admin_user', JSON.stringify(adminUser));
        return { error: null };
      } else {
        return { error: { message: 'Invalid admin credentials' } };
      }
    } catch (error) {
      return { error };
    }
  };

  const signOut = async () => {
    setAdminUser(null);
    localStorage.removeItem('admin_user');
  };

  const value = {
    adminUser,
    loading,
    signIn,
    signOut,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
