"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  useApp,
  usePaginationStore,
  usePendingStore,
} from "@/shared";
import type { MouseEvent } from "react";

interface FieldPaginationInt {
  visible: number;
}

const getPages = (visible: number, page: number, totalPages: number) => {
  const count = Math.min(visible, totalPages);
  let start = Math.max(1, page - Math.floor(count / 2));
  const end = Math.min(totalPages, start + count - 1);
  start = Math.max(1, end - count + 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export const FieldPagination = ({ visible }: FieldPaginationInt) => {
  const setPage = usePaginationStore((s) => s.setPage);
  const page = usePaginationStore((s) => s.page);
  const isPendingStore = usePendingStore((s) => s.isPendingStore);

  const { data, isPending } = useApp();

  let totalPages: number | 1 = 1;
  let hasNext: boolean = false;
  let hasPrev: boolean = false;

  if (data?.meta) {
    totalPages = data.meta.totalPages;
    hasNext = data.meta.hasNext;
    hasPrev = data.meta.hasPrev;
  }

  const pages = getPages(visible, page, totalPages);

  const onClick = (e: MouseEvent<HTMLAnchorElement>, current: number) => {
    e.preventDefault();
    setPage(current);
  };

  const prevDisabled = isPending || !hasPrev || isPendingStore;
  const nextDisabled = isPending || !hasNext || isPendingStore;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            tabIndex={hasPrev ? -1 : undefined}
            aria-disabled={prevDisabled}
            className={
              prevDisabled ? "pointer-events-none opacity-50" : undefined
            }
            onClick={(e) => {
              onClick(e, page - 1);
            }}
          />
        </PaginationItem>
        {pages.map((current) => (
          <PaginationItem key={current}>
            <PaginationLink
              aria-disabled={isPending || isPendingStore}
              className={
                isPending || isPendingStore
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
              isActive={current === page}
              onClick={(e) => {
                onClick(e, current);
              }}
            >
              {current}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            tabIndex={hasNext ? -1 : undefined}
            aria-disabled={nextDisabled}
            className={
              nextDisabled ? "pointer-events-none opacity-50" : undefined
            }
            onClick={(e) => {
              onClick(e, page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
