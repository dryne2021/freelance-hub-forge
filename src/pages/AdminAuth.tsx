
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdmin } from '@/contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Eye, EyeOff, ArrowLeft, Shield } from 'lucide-react';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { signIn, adminUser } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (adminUser) {
      navigate('/admin/dashboard');
    }
  }, [adminUser, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast.error(error.message || 'Invalid admin credentials');
      } else {
        toast.success('Welcome to admin panel!');
        navigate('/admin/dashboard');
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Site
          </Button>
        </div>
        
        <Card className="shadow-2xl border-slate-700 bg-slate-800/50">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Admin Access
            </CardTitle>
            <p className="text-slate-400">
              Sign in to access the admin panel
            </p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                  Admin Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@dryne.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-slate-300">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-slate-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700" 
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
              <p className="text-xs text-slate-400">
                <strong>Default Admin:</strong><br />
                Email: admin@dryne.com<br />
                Password: admin123
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAuth;
