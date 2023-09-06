import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const BASE = "https://api.khan.my.id";

type Store = {
  bio: any;
  fetch: () => void;
};

export const useBio = create<Store>()(
  persist(
    (set) => ({
      bio: {},
      fetch: async () => {
        const bio = await fetch(`${BASE}/me`, {
          method: "GET",
          next: {
            revalidate: 60 * 60 * 24 * 30,
          },
        }).then(async (response) => await response.json());
        set({ bio });
      },
    }),
    {
      name: "bio", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      skipHydration: true,
    }
  )
);
