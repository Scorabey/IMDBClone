"use client"

import {API, CategoryCreateSchema, CategorySchema, Label, Spinner, Toggle} from "@/shared";
import { z } from 'zod'
import {useQuery} from "@tanstack/react-query";
import {Control, Controller} from "react-hook-form";
import {IFormSheet} from "@/widgets";

interface Props {
  control: Control<IFormSheet>
}

const categoryAPI = new API("category", {
  item: CategorySchema,
  list: z.array(CategorySchema),
  create: CategoryCreateSchema
})

const STALE = 10 * 1000;

export const SheetCategories = ({ control }: Props) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryAPI.getAll({}),
    staleTime: STALE * 6,
    refetchInterval: STALE * 8,
    refetchOnWindowFocus: true,
  })

  return (
    <div className="h-full w-full px-3 py-2 gap-1.5 grid auto-rows-max grid-cols-4">
      {isPending && <Spinner aria-label="Category-Spinner"/>}
      {error && <Label className="col-span-full text-red-500 text-lg font-bold" >{`${error.name}: ${error.message}`}</Label>}
      <Controller
          name="categories"
          control={control}
          render={({ field }) => (
              <>
                {data?.map((item) => {
                  const pressed = field.value.includes(item.name);

                  return (
                    <Toggle
                        key={item.id}
                        variant={"default"}
                        aria-label={`Toggle-Category-${item.name}`}
                        pressed={pressed}
                        onPressedChange={(next) => {
                          field.onChange(
                              next
                                ? [...field.value, item.name]
                                : field.value.filter((name) => name !== item.name)
                          )
                        }}
                    >
                      {item.name}
                    </Toggle>
                )})}
              </>
          )}
      />
    </div>
  );
};
