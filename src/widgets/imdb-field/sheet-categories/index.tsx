import {API, CategoryCreateSchema, CategorySchema, Label, Spinner, Toggle} from "@/shared";
import { z } from 'zod'
import {useQuery} from "@tanstack/react-query";

const categoryAPI = new API("category", {
  item: CategorySchema,
  list: z.array(CategorySchema),
  create: CategoryCreateSchema
})

const STALE = 10 * 1000;

export const SheetCategories = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryAPI.getAll(),
    staleTime: STALE * 6,
    refetchInterval: STALE * 8,
    refetchOnWindowFocus: true,
  })

  return (
    <div className="h-full w-full px-3 py-2 gap-1.5 grid auto-rows-max grid-cols-4">
      {isPending && <Spinner aria-label="Category-Spinner"/>}
      {error && <Label className="col-span-full text-red-500 text-lg font-bold" >{`${error.name}: ${error.message}`}</Label>}
      {data?.map((item) => (
          <Toggle
            variant={"default"}
            key={item.id}
            aria-label={`Toggle-Category-${item.name}`}
          >
            {item.name}
          </Toggle>
      ))}
    </div>
  );
};
