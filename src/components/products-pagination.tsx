import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function ProductsPagination({
  page,
  totalPages,
  onPageChange,
}: ProductsPaginationProps) {
  if (totalPages <= 1) return null;

  const maxWindow = 5;
  const windowOffset = Math.floor(maxWindow / 2);

  let startPage = Math.max(1, page - windowOffset);
  let endPage = Math.min(totalPages, page + windowOffset);

  const visibleCount = endPage - startPage + 1;
  if (visibleCount < maxWindow) {
    if (startPage === 1) {
      endPage = Math.min(totalPages, startPage + maxWindow - 1);
    } else if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxWindow + 1);
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (page > 1) onPageChange(page - 1);
            }}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          />
        </PaginationItem>

        {page !== 1 ? (
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(1)}
              disabled={page === 1}
              className="bg-neutral-600 text-neutral-50"
            >
              First
            </Button>
          </PaginationItem>
        ) : null}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
          const item = startPage + i;
          return (
            <PaginationItem key={item}>
              <PaginationLink
                isActive={item === page}
                onClick={() => onPageChange(item)}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {page !== totalPages && (
          <PaginationItem>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onPageChange(totalPages)}
              disabled={page === totalPages}
              className="bg-neutral-600 text-neutral-50"
            >
              {totalPages}
            </Button>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (page < totalPages) onPageChange(page + 1);
            }}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
