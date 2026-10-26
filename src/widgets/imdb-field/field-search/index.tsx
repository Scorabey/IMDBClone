"use client";

import { IFormSearch } from "@/entity";
import { Button, Input, Spinner, usePendingStore, Skeleton } from "@/shared";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchStore } from "@/shared";
import { useQueryStore } from "@/shared/lib/store/queryStore";

export const FieldGroupSearch = () => {
  const setQuery = useQueryStore((s) => s.setQueries);
  const isPending = usePendingStore((s) => s.isPendingStore);

  const { register, handleSubmit } = useForm<IFormSearch>();

  const onSubmit: SubmitHandler<IFormSearch> = (data) => {
    setQuery({ search: data.inputSearch });
  };

  if(isPending) {
    return (
      <div className="flex gap-2">
        <Skeleton className="w-64 h-8" />
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
      </div>
    );
  }
  
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
        Search
      </Button>
    </form>
  );
};
