import { getPokemonId, getSpriteUrl } from '../lib/pokemon'
import { usePokemonInfinite } from '../hooks/usePokemonInfinite'
import PokemonCard from './PokemonCard'

type InfinitePokemonListProps = {
  limit?: number
}

export default function PokemonInfiniteLoadMore({ limit = 10 }: InfinitePokemonListProps) {
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
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {isError && (
        <div className="col-span-full rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p>{(error as Error).message}</p>
          <button
            type="button"
            className="mt-3 rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            {isFetching ? 'Retrying...' : 'Retry'}
          </button>
        </div>
      )}
      {items.map((pokemon, index) => (
        <PokemonCard
          key={`${pokemon.name}-${index}`}
          id={getPokemonId(pokemon.url)}
          name={pokemon.name}
          sprite={getSpriteUrl(pokemon.url)}
        />
      ))}
      <div className="col-span-full flex justify-center">
        <button
          type="button"
          className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </button>
      </div>
      {isFetchingNextPage && (
        <p className="col-span-full text-center text-sm text-gray-500">
          Loading more Pokemon...
        </p>
      )}
    </section>
  )
}
