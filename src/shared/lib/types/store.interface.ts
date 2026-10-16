export interface FilterStore {
    categories: string[]
    isPendignFilter: boolean
    setIsPendignFilter: (isPendignFilter: boolean) => void
    setCategories: (categories: string[]) => void
}

export interface SearchStore {
    searchValue: string
    isPendignSearch: boolean
    setIsPendignSearch: (isPendignSearch: boolean) => void
    setSearchValue: (searchValue: string) => void
}