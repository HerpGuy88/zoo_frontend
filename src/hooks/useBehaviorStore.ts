import { create } from "zustand";

const useBehaviorStore = create((set) => ({
  behaviors: [],
  getAllBehaviors: async (baseURL) => {
    const data = await fetch(`${baseURL}behaviors/`);
    const parsedData = await data.json();
    console.log(parsedData);
    set({ behaviors: parsedData });
  },
}));

export default useBehaviorStore;
