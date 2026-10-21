"use client";

import { Button, IFormSearch, Input, Spinner, usePendingStore } from "@/shared";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchStore } from "@/shared";

export const FieldGroupSearch = () => {
  const setSearchValue = useSearchStore((s) => s.setSearchValue);
  const isPending = usePendingStore((s) => s.isPendingStore);

  const { register, handleSubmit } = useForm<IFormSearch>();

  const onSubmit: SubmitHandler<IFormSearch> = (data) => {
    setSearchValue(data.inputSearch);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("inputSearch")}
        placeholder="Search..."
        type="text"
        className="w-64"
      />
      <Button
        variant={"default"}
        size={"default"}
        className="text-base font-bold"
        type="submit"
        disabled={isPending}
      >
        {isPending && <Spinner />}
        Search
      </Button>
    </form>
  );
};
