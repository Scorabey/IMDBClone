'use client'

import { useMovie } from "@/entity";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ScrollArea } from "@/shared";
import { ListItem } from '@/widgets'

export const ListMain = () => {
  const { data, meta, isPending } = useMovie()

  return (
    <ScrollArea className="w-1/3 h-3/4 flex flex-col items-start justify-center">
      <div className="flex flex-col gap-2">
        {data?.data.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        ))}
      </div>
    </ScrollArea>
  );
}