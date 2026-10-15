"use client";

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
} from "@/shared";
import { SheetCategories } from "@/widgets";

export const FieldSheet = () => {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant={"outline"}>Categories</Button>} />
      <SheetContent>
        <form className="flex flex-col h-full items-center justify-between pb-2">
          <SheetHeader>
            <SheetTitle className="text-2xl">Browse by Category</SheetTitle>
            <SheetDescription className="text-base">
              Pick a genre and explore the best movies in it, from timeless
              classics to the latest releases.
            </SheetDescription>
          </SheetHeader>

          <SheetCategories />

          <SheetFooter className="flex flex-row">
            <Button type="submit">Save changes</Button>
            <SheetClose render={<Button variant="outline">Close</Button>} />
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};
