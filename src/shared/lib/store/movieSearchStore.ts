import { create } from "zustand";
import { SearchStore } from "@/shared";

export const useSearchStore = create<SearchStore>((set) => ({
  searchValue: "",
  setSearchValue: (searchValue: string) => set({ searchValue }),
}));
