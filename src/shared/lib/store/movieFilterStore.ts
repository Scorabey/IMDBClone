import { create } from 'zustand'
import {FilterStore} from "@/shared/lib/types/store.interface";

export const useFilterStore = create<FilterStore>((set) => ({
    categories: [],
    setCategories: (categories: string[]) => set({ categories }),
}))