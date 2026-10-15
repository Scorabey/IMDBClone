import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
  ScrollArea,
} from "@/shared";
import Image from "next/image";

export const FieldListGroup = () => {
  return (
    <ScrollArea className="w-full h-full flex items-center justify-center">
      <Item
        key={"movie.id"}
        className="w-full h-32 gap-4"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
          alt={"The Godfather"}
          width={64}
          height={64}
        />
        <ItemContent className="gap-1.5">
          <ItemTitle className="text-2xl font-heading">The Godfather</ItemTitle>
          <ItemDescription className="text-base font-normal">
            Description
          </ItemDescription>
        </ItemContent>
      </Item>
    </ScrollArea>
  );
};
