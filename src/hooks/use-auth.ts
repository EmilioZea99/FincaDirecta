import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { AuthState, LoginFormData, RegisterFormData, User } from '@/types/auth';

interface AuthStore extends AuthState {
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (data: LoginFormData) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    
    if (error) throw error;
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not found');
    
    const userData = {
      ...user,
      name: user.user_metadata.name,
      role: user.user_metadata.role,
    } as User;
    
    localStorage.setItem('user', JSON.stringify(userData));
    
    set({ 
      user: userData,
      isAuthenticated: true 
    });
  },

  register: async (data: RegisterFormData) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
            role: data.role,
          },
        },
      });
      
      if (error) {
        console.error('Supabase signup error:', error);
        throw error;
      }
    } catch (err) {
      console.error('Registration error:', err);
      throw err;
    }
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, isAuthenticated: false });
  },
}));