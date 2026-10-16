import { FieldGroup } from "@/shared";
import {FieldGroupSearch, FieldSheet} from "@/widgets";

export const FieldGroupHeader = () => {
  return (
    <FieldGroup className="h-fit flex flex-row justify-between items-start">
        <FieldGroupSearch/>
        <FieldSheet />
    </FieldGroup>
  );
};
