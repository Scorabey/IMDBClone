export interface FilterStore {
  categories: string[];
  setCategories: (categories: string[]) => void;
}

export interface SearchStore {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export interface PaginationStore {
  page: number;
  setPage: (page: number) => void;
}

export interface PendingStore {
  isPendingStore: boolean;
  setIsPendingStore: (isPendingStore: boolean) => void;
}

export interface SortingStore<T> {
  sortingStore: T;
  setSortingStore: (sortingStore: T) => void;
}

interface QueriesStore {
  search: string;
  page: number;
  sortBy: "title" | "id";
  orderBy: "asc" | "desc";
  limit: number;
  categories: string[];
}

export interface QueryStoreInt {
  queries: QueriesStore;
  setQueries: (queries: QueriesStore) => void;
}