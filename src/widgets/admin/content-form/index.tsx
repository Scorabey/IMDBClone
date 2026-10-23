import { Field, FieldGroup, FieldLabel, Input, Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectTrigger, SelectValue, Textarea, FieldContent, type Category, Skeleton } from "@/shared";

type DefaultValue = { label: string; value: string };

interface FormContentProps {
  data: Category[] | undefined;
  defaultValue: DefaultValue;
  error?: Error | null;
  isPending: boolean;
}

export const FormContent = ({
  defaultValue,
  data,
  error,
  isPending,
}: FormContentProps) => {

  if(isPending && !data) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className={"w-2/5 h-5"} />
            <Skeleton className={"w-11/12 h-8"} />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className={"w-2/5 h-5"} />
            <Skeleton className={"w-11/12 h-8"} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Skeleton className={"w-2/5 h-5"} />
            <Skeleton className={"w-full h-16"} />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className={"w-full h-8"} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <FieldContent className={"gap-4"}>
      <FieldGroup className="flex flex-row w-full">
        <Field>
          <FieldLabel>Movie Title</FieldLabel>
          <Input placeholder="The Godfather" />
        </Field>
        <Field>
          <FieldLabel>Image Link</FieldLabel>
          <Input placeholder="https://placeholder/image" />
        </Field>
      </FieldGroup>
      <FieldGroup className="flex flex-col w-full">
        <Field>
          <FieldLabel>Movie Description</FieldLabel>
          <Textarea placeholder="Enter descripttion..." />
        </Field>
        <Field>
          <Select items={data} multiple defaultValue={defaultValue}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {data.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    </FieldContent>
  );
};