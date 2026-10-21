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
