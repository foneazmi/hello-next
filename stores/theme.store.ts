"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const useTheme = create<Store>()(
  persist(
    (set) => ({
      theme: "winter",
      setTheme: (theme: string) => set({ theme }),
    }),
    {
      name: "theme", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      skipHydration: true,
    }
  )
);
