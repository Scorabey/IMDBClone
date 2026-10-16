import { create } from 'zustand'
import {SearchStore} from "@/shared/lib/types/store.interface";

export const useSearchStore = create<SearchStore>((set) => ({
    searchValue: "",
    isPendignSearch: false,
    setIsPendignSearch: (isPendignSearch: boolean) => set({ isPendignSearch }),
    setSearchValue: (searchValue: string) => set({ searchValue }),
}))