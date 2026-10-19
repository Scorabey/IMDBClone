import { FieldGroup } from "@/shared";
import {FieldGroupSearch} from "@/widgets/imdb-field/field-search";
import {FieldSheet} from "@/widgets/imdb-field/field-sheet";

export const FieldGroupHeader = () => {
  return (
    <FieldGroup className="h-fit flex flex-row justify-between items-start">
        <FieldGroupSearch/>
        <FieldSheet />
    </FieldGroup>
  );
};
