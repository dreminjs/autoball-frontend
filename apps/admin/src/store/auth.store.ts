import { create } from 'zustand';

interface IStore {
    auth: boolean
    login: () => void
    logout: () => void
}

export const useAuthStore = create<IStore>((set) => ({
  auth: false,
  login: () => set({ auth: true }),
  logout: () => set({ auth: false }),
}));
