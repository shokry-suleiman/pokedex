type SkeletonProps = {
  className?: string
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={className ?? ''} aria-busy="true" aria-live="polite">
      <div className="w-full overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
        <div className="p-4">
          <div className="h-36 w-full rounded-sm bg-gray-200 animate-pulse" />
        </div>
        <div className="p-4 pt-0">
          <div className="mx-auto h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
