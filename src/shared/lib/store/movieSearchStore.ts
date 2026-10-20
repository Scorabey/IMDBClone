import { create } from 'zustand'
import {SearchStore} from "@/shared/lib/types/store.interface";

export const useSearchStore = create<SearchStore>((set) => ({
    searchValue: "",
    setSearchValue: (searchValue: string) => set({ searchValue }),
}))