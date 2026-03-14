type ErrorStateProps = {
  message: string
  isFetching: boolean
  onRetry: () => void
}

export default function ErrorState({
  message,
  isFetching,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <p>{message}</p>
      <button
        type="button"
        className="mt-3 rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700"
        onClick={onRetry}
        disabled={isFetching}
      >
        {isFetching ? 'Retrying...' : 'Retry'}
      </button>
    </div>
  )
}
