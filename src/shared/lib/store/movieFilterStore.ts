import { create } from 'zustand'
import {FilterStore} from "@/shared/lib/types/store.interface";

export const useFilterStore = create<FilterStore>((set) => ({
    categories: [],
    isPendignFilter: false,
    setIsPendignFilter: (isPendignFilter: boolean) => set({ isPendignFilter }),
    setCategories: (categories: string[]) => set({ categories }),
}))