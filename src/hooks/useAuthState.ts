import { create } from "zustand";

const useAuthState = create((set) => ({
  token: "",
  currentUser: "",
  login: (id) => {
    set((state) => ({ token: `Impersonate ${id}`, currentUser: id }));
  },
  logout: () => set({ token: undefined, currentUser: "" }),
}));
export default useAuthState;
