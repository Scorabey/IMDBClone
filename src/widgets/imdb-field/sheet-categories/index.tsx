"use client";

import {
  API,
  CategoryCreateSchema,
  CategorySchema,
  IFormSheet,
  Label,
  Spinner,
  Toggle,
  useCategory
} from "@/shared";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { Control, Controller } from "react-hook-form";

interface Props {
  control: Control<IFormSheet>;
}

export const SheetCategories = ({ control }: Props) => {
  const { data, isPending, error } = useCategory()

  return (
    <div className="h-full w-full px-3 py-2 gap-1.5 grid auto-rows-max grid-cols-4">
      {isPending && <Spinner aria-label="Category-Spinner" />}
      {error && (
        <Label className="col-span-full text-red-500 text-lg font-bold">{`${error.name}: ${error.message}`}</Label>
      )}
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
                        : field.value.filter(
                            (name: string) => name !== item.name,
                          ),
                    );
                  }}
                >
                  {item.name}
                </Toggle>
              );
            })}
          </>
        )}
      />
    </div>
  );
};
