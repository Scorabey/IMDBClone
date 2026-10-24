import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle, FilmIcon, ItemGroup, Button, SettigsIcon, TrashIcon } from "@/shared";

interface ListItemProps {
  title: string;
  description: string;
  id: string;
}

export const ListItem = ({ title, description, id }: ListItemProps) => {
  return (
    <Item variant={"outline"} className={"flex flex-row"}>
      <ItemMedia variant={"icon"} className={"flex-col"}>
        <FilmIcon className={"stroke-orange-600"} />
        <p className={"font-bold text-gray-950"}>{id}</p>
      </ItemMedia>
      <ItemContent className="min-w-0 flex-1">
        <ItemTitle className="line-clamp-1">{title}</ItemTitle>
        <ItemDescription className="line-clamp-1">
          {description}
        </ItemDescription>
      </ItemContent>
      <div className="flex flex-row gap-1.5">
        <Button
          variant={"ghost"}
          className={"w-fit h-fit p-2"}
          type={"button"}
          aria-roledescription={"button-change"}
        >
          <SettigsIcon className={"stroke-gray-600 fill-none"} />
        </Button>
        <Button
          variant={"ghost"}
          className={"w-fit h-fit p-2"}
          type={"button"}
          aria-roledescription={"button-delete"}
        >
          <TrashIcon className={"stroke-red-600 fill-none"} />
        </Button>
      </div>
    </Item>
  );
}