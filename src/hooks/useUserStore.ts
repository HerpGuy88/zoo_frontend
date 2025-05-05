import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [],
  currentUser: 0,
  getAllUsers: async (baseURL) => {
    const data = await fetch(`${baseURL}users/`);
    const parsedData = await data.json();
    set({ users: parsedData });
  },
  setCurrentUser: (userId) => set((state) => ({ currentUser: userId })),
}));

export default useUserStore;
