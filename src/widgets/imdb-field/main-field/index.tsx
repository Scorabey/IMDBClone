import {
  Field,
  FieldGroup,
  FieldSet,
  Separator
} from "@/shared";
import {FieldGroupTitle, FieldPagination} from "@/widgets";
import { FieldGroupHeader } from "@/widgets";
import { FieldListGroup } from "@/widgets";

export const MainField = () => {
  return (
    <div className="min-w-1/4 max-w-2/4 min-h-3/12 max-h-4/5 border border-transparent rounded-md">
      <FieldSet className="h-full">
        <FieldGroupTitle />
        <Separator />
        <FieldGroupHeader />
        <Separator />
        <Field className="flex justify-center items-center h-full">
          <FieldListGroup />
        </Field>
        <Separator />
        <FieldGroup
          className="w-full flex justify-center items-center py-2"
        >
          <FieldPagination/>
        </FieldGroup>
      </FieldSet>
    </div>
  );
};
