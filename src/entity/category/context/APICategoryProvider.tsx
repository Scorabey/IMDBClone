"use client"

import { APICategoryContext, CategoryCreateSchema, CategorySchema } from  "@/entity"
import { useMemo } from "react";
import { API } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod"

interface APICategoryProviderInt {
  children: ReactNode;
}

const categoryAPI = new API("category", {
  item: CategorySchema,
  list: z.array(CategorySchema),
  create: CategoryCreateSchema,
});

const STALE = 10 * 1000;

export function APICategoryProvider({ children }: APICategoryProviderInt) {
  const { data, isPending, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryAPI.getAll({}),
    staleTime: STALE * 6,
    refetchInterval: STALE * 8,
    refetchOnWindowFocus: true,
  });

  const value = useMemo(
    () => ({
      data,
      isPending,
      error,
    }),
    [data, isPending, error],
  );

  return <APICategoryContext.Provider value={value}>{children}</APICategoryContext.Provider>;
}