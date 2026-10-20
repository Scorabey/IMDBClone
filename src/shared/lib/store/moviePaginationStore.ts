import { create } from 'zustand'
import {PaginationStore} from "@/shared/lib/types/store.interface";

export const usePaginationStore = create<PaginationStore>((set) => ({
    page: 1,
    isPendignPagination: false,
    setIsPendingPagination: (isPendignPagination: boolean) => set({ isPendignPagination }),
    setPage: (page: number) => set({ page }),
}))