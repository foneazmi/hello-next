// "use client";

// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// // import { api } from "../services/api";

// type Store = {
//   bio: any;
//   fetch: () => void;
// };

// export const useBio = create<Store>()(
//   persist(
//     (set: any) => ({
//       bio: {},
//       fetch: async () => {
//         // const bio = await api.getBio();
//         set({ bio: {} });
//       },
//     }),
//     {
//       name: "bio",
//     }
//   )
// );
