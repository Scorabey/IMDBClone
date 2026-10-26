"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  APIMovieContext,
  CreateMovieSchema,
  MovieSchema,
  MovieCollectionSchema,
} from "@/entity";
import {
  API,
  useFilterStore,
  useSearchStore,
  usePaginationStore,
  usePendingStore,
} from "@/shared";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useSortingStore } from "@/shared/lib/store/movieSortingStore";
import { useQueryStore } from "@/shared/lib/store/queryStore";

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
  const setPendingStore = usePendingStore((s) => s.setIsPendingStore);
  const { categories, search, limit, sortBy, page, orderBy } = useQueryStore((s) => s.queries);

  const { data, isFetching, isPending, error } = useQuery({
    queryKey: ["movies", search, categories, page],
    queryFn: () =>
      movieAPI.getAll({
        categories,
        search,
        limit,
        page,
        orderBy,
        sortBy,
      }),
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
