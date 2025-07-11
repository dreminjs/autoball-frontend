import { IUser } from '@autoball-frontend/shared-types';
import { create } from 'zustand';

interface IStore {
    user: IUser | null
    login: (data: IUser) => void
    logout: () => void
}

export const useUserStore = create<IStore>((set) => ({
  user: null,
  login: (data ) => set({ user: data }),
  logout: () => set({ user: null }),
}));
