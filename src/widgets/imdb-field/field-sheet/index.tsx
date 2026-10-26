"use client";

import { IFormSheet } from "@/entity";
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  useFilterStore,
  Spinner,
  usePendingStore,
} from "@/shared";
import { SheetCategories } from "@/widgets";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FilterStore } from "@/shared";
import { useQueryStore } from "@/shared/lib/store/queryStore";

export const FieldSheet = () => {
  const isPending = usePendingStore((s) => s.isPendingStore);

  const [open, setOpen] = useState<boolean>(false);

  const setQuery = useQueryStore((s) => s.setQueries);

  const { handleSubmit, control } = useForm<IFormSheet>({
    defaultValues: { categories: [] },
  });

  const onSubmit = (data: IFormSheet) => {
    setQuery({ categories: data.categories });
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant={"outline"}>Categories</Button>} />
      <SheetContent>
        <form
          className="flex flex-col h-full items-center justify-between pb-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <SheetHeader>
            <SheetTitle className="text-2xl">Browse by Category</SheetTitle>
            <SheetDescription className="text-base">
              Pick a genre and explore the best movies in it, from timeless
              classics to the latest releases.
            </SheetDescription>
          </SheetHeader>

          <SheetCategories control={control} />

          <SheetFooter className="flex flex-row">
            <Button type="submit" disabled={isPending}>
              {isPending && <Spinner />}Save changes
            </Button>
            <SheetClose render={<Button variant="outline">Close</Button>} />
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};
