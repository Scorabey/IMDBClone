'use client'

import {
  Field,
  FieldGroup,
  FieldLabel,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Textarea,
  FieldContent,
  type Category,
  Skeleton,
  CreateMovie,
} from "@/shared";
import {
  UseFormRegister,
  Controller,
  type Control,
  type FieldErrors,
} from "react-hook-form";

type DefaultValue = { label: string; value: string };

interface FormContentProps {
  data: Category[] | undefined;
  defaultValue: DefaultValue;
  error?: Error | null;
  isPending: boolean;
  register: UseFormRegister;
  control: Control;
  errors: FieldErrors<CreateMovie>;
}

export const FormContent = ({
  defaultValue,
  data,
  error,
  isPending,
  register,
  control,
  errors,
}: FormContentProps) => {
  if (isPending && !data) {
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
          <Input
            {...register("title", { required: "Title field is required" })}
            placeholder="The Godfather"
          />
          {errors.title && (
            <FieldLabel className={"text-sm text-red-400 font-bold"}>
              {errors.title.message}
            </FieldLabel>
          )}
        </Field>
        <Field>
          <FieldLabel>Image Link</FieldLabel>
          <Input
            {...register("img", { required: "Link field is required" })}
            placeholder="https://placeholder/image"
          />
          {errors.img && (
            <FieldLabel className={"text-sm text-red-400 font-bold"}>
              {errors.img.message}
            </FieldLabel>
          )}
        </Field>
      </FieldGroup>
      <FieldGroup className="flex flex-col w-full">
        <Field>
          <FieldLabel>Movie Description</FieldLabel>
          <Textarea
            {...register("description", {
              required: "Description field is required",
            })}
            placeholder="Enter descripttion..."
          />
          {errors.description && (
            <FieldLabel className={"text-sm text-red-400 font-bold"}>
              {errors.description.message}
            </FieldLabel>
          )}
        </Field>
        <Field>
          <Controller
            name="categoryIds"
            control={control}
            rules={{
              validate: (value: Category[]) =>
                value.length > 0 || "Select any category",
            }}
            render={({ field, fieldState }) => (
              <>
                <Select
                  items={data}
                  multiple
                  value={field.value ?? []}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger onBlur={field.onBlur}>
                    <SelectValue>
                      {(ids: number[]) =>
                        ids.length
                          ? data
                              .filter((c) => ids.includes(c.id))
                              .map((c) => c.name)
                              .join(", ")
                          : "Select a category."
                      }
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {data.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <FieldLabel className={"text-sm text-red-400 font-bold"}>
                    {fieldState.error.message}
                  </FieldLabel>
                )}
              </>
            )}
          />
        </Field>
      </FieldGroup>
    </FieldContent>
  );
};