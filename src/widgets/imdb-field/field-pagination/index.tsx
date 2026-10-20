'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem, PaginationLink, PaginationNext,
  PaginationPrevious,
  useApp,
  usePaginationStore,
} from "@/shared";
import type { MouseEvent } from "react";

interface FieldPaginattionInt {
  visible: number
}

const getPages = (visible: number, page: number, totalPages: number) => {
  const count = Math.min(visible, totalPages)
  let start = Math.max(1, page - Math.floor(count / 2))
  const end = Math.min(totalPages, start + count - 1)
  start = Math.max(1, end - count + 1)

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export const FieldPagination = ({ visible }: FieldPaginattionInt) => {
  const setPage = usePaginationStore((s) => s.setPage)
  const page = usePaginationStore((s) => s.page)
  const isPendingPagination = usePaginationStore((s) => s.isPendignPagination)

  const { data, isPending } = useApp()

  const totalPages = data?.meta.totalPages === undefined ? 1 : data.meta.totalPages

  const pages = getPages(visible, page, totalPages)
  const isFirst = page <= 1
  const isLast = page >= totalPages

  const onClick = (e: MouseEvent<HTMLAnchorElement>, current: number) => {
    e.preventDefault()
    setPage(current)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#" 
            tabIndex={isFirst ? -1 : undefined}
            aria-disabled={isPending || isFirst || isPendingPagination}
            className={isPending || isFirst || isPendingPagination ? "pointer-events-none opacity-50" : undefined}
            onClick={(e) => {
              onClick(e, page - 1)
            }}
          />
        </PaginationItem>
            {pages.map((current) => (
              <PaginationItem
                key={current}
              >
                <PaginationLink
                  aria-disabled={isPending || isPendingPagination}
                  className={isPending || isPendingPagination ? "pointer-events-none opacity-50" : undefined}
                  isActive={current === page}
                  onClick={(e) => {
                    onClick(e, current)
                  }}
                >
                  {current}
                </PaginationLink>
              </PaginationItem>
            ))}
        <PaginationItem>
          <PaginationNext
            href="#" 
            tabIndex={isLast ? -1 : undefined}
            aria-disabled={isPending || isLast || isPendingPagination}
            className={isPending || isLast || isPendingPagination ? "pointer-events-none opacity-50" : undefined}
            onClick={(e) => {
              onClick(e, page + 1)
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
