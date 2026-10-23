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
} from "@/shared";
import { FormTitle, FormButtons, FormContent } from '@/widgets'

const defaultValue = { label: "Crime", value: null };

export const AdminMain = () => {
  const { data, isPending, error } = useCategory()

  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet className={"gap-4"}>
            <FormTitle className={"gap-1"} isPending={isPending} />
            <FormContent
              defaultValue={defaultValue}
              data={data}
              error={error}
              isPending={isPending}
            />
          </FieldSet>
          <FormButtons isPending={isPending} />
        </FieldGroup>
      </form>
    </div>
  );
}