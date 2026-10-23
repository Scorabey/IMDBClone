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
  useMutateMovie,
} from "@/shared";
import { FormTitle, FormButtons, FormContent } from '@/widgets'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

export const AdminMain = () => {
  const { mutate } = useMutateMovie();

  const { data, isPending, error } = useCategory()

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<CreateMovie>({
    defaultValues: { categoryIds: [] },
    resolver: zodResolver(CreateMovieSchema)
  })

  const onSubmit: SubmitHandler<CreateMovie> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset()
      },
      onError: (error) => {
        console.log(error)
      }
    })
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}>
        <FieldGroup>
          <FieldSet className={"gap-4"}>
            <FormTitle className={"gap-1"} isPending={isPending} />
            <FormContent
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