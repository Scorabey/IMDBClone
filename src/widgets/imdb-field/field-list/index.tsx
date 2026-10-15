"use client"

import {
  API, CreateMovieSchema,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle, Label, MovieCollectionSchema, MovieSchema,
  ScrollArea, Spinner, useFilterStore,
} from "@/shared";
import Image from "next/image";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {FilterStore} from "@/shared/lib/types/store.interface";

const movieAPI = new API("movie", {
  item: MovieSchema,
  list: MovieCollectionSchema,
  create: CreateMovieSchema,
})

const STALE = 10 * 1000;

export const FieldListGroup = () => {
  const categories = useFilterStore((s: FilterStore) => s.categories)

  const { data, isPending, error } = useQuery({
    queryKey: ["movies", categories],
    queryFn: () => {
      const query = categories.map((category) => `filterBy=${category}`).join("&");
      return movieAPI.getAll({ query })
    },
    staleTime: STALE * 6,
    placeholderData: keepPreviousData,
    refetchInterval: STALE * 8,
    refetchOnWindowFocus: true,
  })

  return (
    <ScrollArea className="w-full h-full flex items-center justify-center">
      {error && <Label className="text-red-500 text-lg font-bold">{error.name}: {error.message}</Label>}
      {isPending && <div className="flex w-full items-center justify-center"><Spinner className="size-6"/></div>}
      {data?.data.map((data) => (
          <Item
              key={data.id}
              className="w-full h-32 gap-4"
          >
            <Image
                src={data.img}
                alt={data.title}
                width={64}
                height={64}
            />
            <ItemContent className="gap-1.5">
              <ItemTitle className="text-2xl font-heading">{data.title}</ItemTitle>
              <ItemDescription className="text-base font-normal">
                {data.description}
              </ItemDescription>
            </ItemContent>
          </Item>
      ))}
    </ScrollArea>
  );
};
