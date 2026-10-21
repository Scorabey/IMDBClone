"use client";

import { ReactNode, useEffect, useMemo } from "react";
import {
  APIMovieContext,
  API,
  useFilterStore,
  useSearchStore,
  MovieCollectionSchema,
  CreateMovieSchema,
  MovieSchema,
  usePaginationStore,
  usePendingStore,
} from "@/shared";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

interface APIMovieProviderInt {
  children: ReactNode;
}

const movieAPI = new API("movie", {
  item: MovieSchema,
  list: MovieCollectionSchema,
  create: CreateMovieSchema,
});

const STALE = 10 * 1000;

export function APIMovieProvider({ children }: APIMovieProviderInt) {
  const categories = useFilterStore((s) => s.categories);
  const search = useSearchStore((s) => s.searchValue);
  const page = usePaginationStore((s) => s.page);
  const setPendingStore = usePendingStore((s) => s.setIsPendingStore);

  const { data, isFetching, isPending, error } = useQuery({
    queryKey: ["movies", search, categories, page],
    queryFn: () => movieAPI.getAll({ categories, search, limit: 4, page }),
    staleTime: STALE * 6,
    placeholderData: keepPreviousData,
    refetchInterval: STALE * 8,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    setPendingStore(isFetching);
  }, [isFetching, setPendingStore]);

  const value = useMemo(
    () => ({
      data,
      isPending,
      error,
    }),
    [data, isPending, error],
  );

  return <APIMovieContext.Provider value={value}>{children}</APIMovieContext.Provider>;
}
