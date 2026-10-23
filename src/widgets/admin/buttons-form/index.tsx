import { Button, Field, Spinner } from "@/shared";
import { type Reset } from "react-hook-form"

interface FormButtonsProps {
  className?: string;
  isPending: boolean;
  reset: Reset;
}

export const FormButtons = ({ className, isPending, reset }: FormButtonsProps) => {
  const onClick = () => {
    reset()
  }

  return (
    <Field orientation="horizontal" className={className}>
      <Button disabled={isPending} type="submit">{isPending ? <Spinner /> : "Submit"}</Button>
      <Button disabled={isPending} variant="outline" type="button" onClick={onClick}>
        {isPending ? <Spinner /> : "Cancel"}
      </Button>
    </Field>
  );
};