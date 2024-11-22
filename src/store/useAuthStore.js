// src/store/useAuthStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axiosInstance from '../utils/axios.config';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,

      // Auth states
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Login action
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axiosInstance.post('/auth/login', {
            email,
            password,
          });

          const { user, token } = response.data;

          localStorage.setItem('token', token);

          set({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          return true;
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'Login failed';
          set({
            ...initialState,
            error: errorMessage,
          });
          return false;
        }
      },

      // Logout action
      logout: async () => {
        try {
          await axiosInstance.post('/auth/logout');
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          localStorage.removeItem('token');
          set(initialState);
        }
      },

      // Update profile
      updateProfile: async (profileData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axiosInstance.put('/users/profile', profileData);
          set({
            user: response.data,
            isLoading: false,
          });
          return true;
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Profile update failed',
          });
          return false;
        }
      },

      // Check authentication status
      checkAuth: async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
          set(initialState);
          return false;
        }

        set({ isLoading: true });
        try {
          const response = await axiosInstance.get('/auth/verify');
          set({
            user: response.data,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return true;
        } catch (error) {
          localStorage.removeItem('token');
          set(initialState);
          return false;
        }
      },

      // Reset error state
      resetError: () => {
        set({ error: null });
      },

      // Update user state directly
      setUser: (user) => {
        set({ user });
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;