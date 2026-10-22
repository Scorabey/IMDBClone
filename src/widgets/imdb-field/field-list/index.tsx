"use client";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  Label,
  ScrollArea,
  Spinner,
} from "@/shared";
import Image from "next/image";
import { useMovie } from "@/shared";

export const FieldListGroup = () => {
  const { data, isPending, error } = useMovie();

  return (
    <ScrollArea className="w-full h-full flex items-center justify-center">
      {error && (
        <Label className="text-red-500 text-lg font-bold">
          {error.name}: {error.message}
        </Label>
      )}
      {isPending && (
        <div className="flex w-full items-center justify-center">
          <Spinner className="size-6" />
        </div>
      )}
      {data?.data.map((data) => (
        <Item key={data.id} className="w-full h-32 gap-4">
          <Image src={data.img} alt={data.title} width={64} height={64} />
          <ItemContent className="gap-1.5">
            <ItemTitle className="text-2xl font-heading">
              {data.title}
            </ItemTitle>
            <ItemDescription className="text-base font-normal">
              {data.description}
            </ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ScrollArea>
  );
};
