import { FieldGroup, Input } from "@/shared";
import { FieldSheet } from "@/widgets";
import { Button } from "@/shared";

export const FieldGroupHeader = () => {
  return (
    <FieldGroup className="h-fit flex flex-row justify-between items-start">
      <form className="flex gap-2">
        <Input
          placeholder="Search..."
          type="text"
          className="w-64"
        />
        <Button
          variant={"default"}
          size={"default"}
          className="text-base font-bold"
          type="submit"
        >
          Search
        </Button>
      </form>
      <FieldSheet />
    </FieldGroup>
  );
};
