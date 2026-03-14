type SkeletonProps = {
  className?: string
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={className ?? ''} aria-busy="true" aria-live="polite">
      <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <div className="p-4">
          <div className="h-40 w-full rounded-xl bg-gray-200 animate-pulse" />
        </div>
        <div className="space-y-2 p-4">
          <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
          <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
