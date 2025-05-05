import { create } from "zustand";
import { useAuthState } from ".";

const useObservationStore = create((set) => ({
  observations: [],
  selectedObservation: "",
  getAllObservations: async (baseURL) => {
    const data = await fetch(`${baseURL}observations/`);
    const parsedData = await data.json();
    console.log(parsedData);
    set({ observations: parsedData });
  },
  submitObservation: async (baseURL, { behavior_id, animal_name }) => {
    const token = await useAuthState.getState().token;
    console.log(token);
    try {
      const data = await fetch(`${baseURL}observations/`, {
        method: "post",
        body: JSON.stringify({ behavior_id, animal_name }),
        headers: new Headers({
          Authorization: token,
          "Content-Type": "application/json",
        }),
      });
      const parsedData = await data.json();
      console.log(parsedData);
      set((state) => ({ observations: [parsedData, ...state.observations] }));
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useObservationStore;
