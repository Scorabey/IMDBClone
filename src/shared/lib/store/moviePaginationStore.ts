import { create } from "zustand";
import { PaginationStore } from "@/shared";

export const usePaginationStore = create<PaginationStore>((set) => ({
  page: 1,
  setPage: (page: number) => set({ page }),
}));
