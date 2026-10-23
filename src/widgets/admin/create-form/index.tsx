'use client'

import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  Field,
  FieldLabel,
  Input,
  FieldSeparator,
  Textarea,
  Checkbox,
  Button,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  useCategory,
  CreateMovie,
  CreateMovieSchema,
} from "@/shared";
import { FormTitle, FormButtons, FormContent } from '@/widgets'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const defaultValue = { label: "Crime", value: null };

export const AdminMain = () => {
  const { data, isPending, error } = useCategory()

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<CreateMovie>({
    defaultValues: { categoryIds: [] },
    resolver: zodResolver(CreateMovieSchema)
  })

  const onSubmit: SubmitHandler<CreateMovie> = (data) => {
    reset();
    console.log(data)
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}>
        <FieldGroup>
          <FieldSet className={"gap-4"}>
            <FormTitle className={"gap-1"} isPending={isPending} />
            <FormContent
              defaultValue={defaultValue}
              data={data}
              error={error}
              isPending={isPending}
              register={register}
              control={control}
              errors={errors}
            />
          </FieldSet>
          <FormButtons isPending={isPending} reset={reset} />
        </FieldGroup>
      </form>
    </div>
  );
}