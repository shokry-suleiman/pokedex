import { usePokemonInfinite } from '../hooks/usePokemonInfinite'
import PokemonGrid from './PokemonGrid'

type InfinitePokemonListProps = {
  limit?: number
}

export default function PokemonInfiniteLoadMore({ limit = 20 }: InfinitePokemonListProps) {
  const {
    data,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isFetching,
  } = usePokemonInfinite(limit)

  const items = data?.pages.flatMap((page) => page.results) ?? []

  return (
    <div className="bg-[#e1fced]">
      <PokemonGrid
        items={items}
        isError={isError}
        error={error as Error | undefined}
        isFetching={isFetching}
        onRetry={() => refetch()}
      >
        {isFetchingNextPage ? (
          <p className="col-span-full mt-6 flex items-center justify-center gap-2 text-center text-sm text-gray-500">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />
            Loading more Pokemon...
          </p>
        ) : hasNextPage ? (
          <div className="col-span-full mt-6 flex justify-center">
            <button
              type="button"
              className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => fetchNextPage()}
            >
              Load more
            </button>
          </div>
        ) : null}
        <p className="col-span-full text-center text-sm text-gray-500">
         Showing {items.length} Pokémon
        </p>
      </PokemonGrid>
    </div>
  )
}
