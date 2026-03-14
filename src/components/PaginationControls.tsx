type PaginationControlsProps = {
  page: number
  totalCount: number
  limit: number
  isLoading: boolean
  onPageChange: (page: number) => void
}

export default function PaginationControls({
  page,
  totalCount,
  limit,
  isLoading,
  onPageChange,
}: PaginationControlsProps) {
  const totalPages = Math.ceil(totalCount / limit)
  const lastPage = totalPages - 1
  const windowSize = Math.min(5, totalPages)
  const start = Math.min(Math.max(page - 2, 0), totalPages - windowSize)
  const visiblePages = Array.from({ length: windowSize }, (_, i) => start + i)
  const showDots = totalPages > 6 && visiblePages[visiblePages.length - 1] < lastPage - 1
  const showLast = totalPages > 5 && !visiblePages.includes(lastPage)

  return (
    <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-1 px-4 pb-10 sm:gap-2">
      <button
        type="button"
        className="rounded-md border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 sm:px-3"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 0 || isLoading}
      >
        <span className="sm:hidden">←</span>
        <span className="hidden sm:inline">← Previous</span>
      </button>

      {visiblePages.map((p) => (
        <button
          key={p}
          type="button"
          className={`rounded-md border px-2 py-2 text-sm font-semibold transition sm:px-3 ${
            p === page
              ? 'border-gray-900 bg-gray-900 text-white cursor-pointer'
              : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50 cursor-pointer'
          } disabled:cursor-not-allowed disabled:opacity-50`}
          onClick={() => onPageChange(p)}
          disabled={isLoading}
          aria-current={p === page ? 'page' : undefined}
        >
          {p + 1}
        </button>
      ))}

      {showDots && (
        <span className="px-1 text-sm text-gray-400">...</span>
      )}

      {showLast && (
        <button
          type="button"
          className={`rounded-md border px-2 py-2 text-sm font-semibold transition sm:px-3 ${
            lastPage === page
              ? 'border-gray-900 bg-gray-900 text-white cursor-pointer'
              : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50 cursor-pointer'
          } disabled:cursor-not-allowed disabled:opacity-50`}
          onClick={() => onPageChange(lastPage)}
          disabled={isLoading}
          aria-current={lastPage === page ? 'page' : undefined}
        >
          {totalPages}
        </button>
      )}

      <button
        type="button"
        className="rounded-md border border-gray-200 bg-white px-2 py-2 text-sm font-semibold text-gray-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 sm:px-3"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= lastPage || isLoading}
      >
        <span className="sm:hidden">→</span>
        <span className="hidden sm:inline">Next →</span>
      </button>
    </div>
  )
}
