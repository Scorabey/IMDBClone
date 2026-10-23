import { FieldDescription, FieldLegend, FieldGroup, Skeleton } from "@/shared";

interface FormTitleProps {
  title?: string;
  description?: string;
  className?: string;
}

export const FormTitle = ({
  title = "New Movie",
  description = "Enter the movie details to add it to your collection.",
  className,
}: FormTitleProps) => {

  return (
    <FieldGroup className={className}>
      <FieldLegend className={"w-fit"}>{title}</FieldLegend>
      <FieldDescription className={"w-fit"}>{description}</FieldDescription>
    </FieldGroup>
  );
};