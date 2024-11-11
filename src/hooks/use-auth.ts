import { create } from 'zustand';
import { AuthState, LoginFormData, RegisterFormData, User } from '@/types/auth';

interface AuthStore extends AuthState {
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => void;
}

// This is a mock implementation. In a real app, you'd integrate with a backend
export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (data: LoginFormData) => {
    // Simulate API call
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      throw new Error('Invalid credentials');
    }

    const user = JSON.parse(storedUser);
    if (user.email !== data.email) {
      throw new Error('Invalid credentials');
    }

    set({ user, isAuthenticated: true });
    localStorage.setItem('auth', 'true');
  },

  register: async (data: RegisterFormData) => {
    // Simulate API call
    const user: User = {
      id: Math.random().toString(36).slice(2),
      email: data.email,
      name: data.name,
      role: data.role,
    };

    localStorage.setItem('user', JSON.stringify(user));
    set({ user, isAuthenticated: true });
    localStorage.setItem('auth', 'true');
  },

  logout: () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  },
}));