type PaginationControlsProps = {
  page: number
  isLoading: boolean
  onPrev: () => void
  onNext: () => void
}

export default function PaginationControls({
  page,
  isLoading,
  onPrev,
  onNext,
}: PaginationControlsProps) {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pb-10">
      <button
        type="button"
        className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={onPrev}
        disabled={page === 0 || isLoading}
      >
        Previous
      </button>
      <span className="text-sm text-gray-600">Page {page + 1}</span>
      <button
        type="button"
        className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={onNext}
        disabled={isLoading}
      >
        Next
      </button>
    </div>
  )
}
