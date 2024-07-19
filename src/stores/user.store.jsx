import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  user: {},
  setUser: (value) => set({ user: value }),
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
  isSidebarOpen: false,
  setSidebarOpen: () => set({ isSidebarOpen: true }),
  setSidebarClose: () => set({ isSidebarOpen: false }),
}));
