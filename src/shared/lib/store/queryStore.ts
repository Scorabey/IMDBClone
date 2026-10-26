import { create } from 'zustand'
import { QueryStoreInt } from "@/shared";

export const useQueryStore = create<QueryStoreInt>((set) => ({
  queries: {
    search: "",
    page: 1,
    sortBy: "title",
    orderBy: "desc",
    limit: 10,
    categories: [],
  },
  setQueries: (queries) => set((state) => ({ queries: { ...state.queries, ...queries } })),
}));