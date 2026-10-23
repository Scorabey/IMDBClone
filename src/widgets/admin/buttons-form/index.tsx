import { Button, Field, Spinner } from "@/shared";

interface FormButtonsProps {
  className?: string;
  isPending: boolean;
}

export const FormButtons = ({ className, isPending }: FormButtonsProps) => {
  return (
    <Field orientation="horizontal" className={className}>
      <Button disabled={isPending} type="submit">{isPending ? <Spinner /> : "Submit"}</Button>
      <Button disabled={isPending} variant="outline" type="button">
        {isPending ? <Spinner /> : "Cancel"}
      </Button>
    </Field>
  );
};