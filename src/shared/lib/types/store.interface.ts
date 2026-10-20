export interface FilterStore {
    categories: string[]
    isPendignFilter: boolean
    setIsPendingFilter: (isPendignFilter: boolean) => void
    setCategories: (categories: string[]) => void
}

export interface SearchStore {
    searchValue: string
    isPendignSearch: boolean
    setIsPendingSearch: (isPendignSearch: boolean) => void
    setSearchValue: (searchValue: string) => void
}

export interface PaginationStore {
    page: number
    isPendignPagination: boolean
    setIsPendingPagination: (isPendignPagination: boolean) => void
    setPage: (page: number) => void
}