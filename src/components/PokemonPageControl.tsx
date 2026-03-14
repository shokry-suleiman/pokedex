import { useMemo, useState } from 'react'
import PokemonGrid from './PokemonGrid'
import PaginationControls from './PaginationControls'
import Skeleton from './Skeleton'
import { usePokemonList } from '../hooks/usePokemonList'

type PokemonPageControlProps = {
  limit?: number
}

export default function PokemonPageControl({ limit = 20 }: PokemonPageControlProps) {
  const [page, setPage] = useState(0)
  const offset = useMemo(() => page * limit, [page, limit])

  const { data, isError, isLoading, error, refetch, isFetching } = usePokemonList(
    limit,
    offset,
  )

  if (isLoading) {
    return (
      <div className="bg-[#e9efff]">
        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </section>
      </div>
    )
  }

  const totalPages = Math.ceil((data?.count ?? 0) / limit)

  return (
    <div className="bg-[#e9efff]">
      <PokemonGrid
        items={data?.results ?? []}
        isError={isError}
        error={error as Error | undefined}
        isFetching={isFetching}
        onRetry={() => refetch()}
      >
        <div className="col-span-full mt-6">
          <PaginationControls
            page={page}
            totalCount={data?.count ?? 0}
            limit={limit}
            isLoading={isFetching}
            onPageChange={setPage}
          />
          <p className="text-center text-sm text-gray-500">
            Page {page + 1} of {totalPages} ({limit} Pokémon shown)
          </p>
        </div>
      </PokemonGrid>
    </div>
  )
}
