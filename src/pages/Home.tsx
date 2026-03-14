import { useMemo, useState } from 'react'
import Header from '../components/Header'
import PokemonInfiniteLoadMore from '../components/PokemonInfiniteLoadMore'
import PaginationControls from '../components/PaginationControls'
import PokemonGrid from '../components/PokemonGrid'
import Skeleton from '../components/Skeleton'
import { usePokemonList } from '../hooks/usePokemonList'

export default function Home() {
  const [mode, setMode] = useState<'page-control' | 'infinite-scroll'>(
    'page-control',
  )
  const [page, setPage] = useState(0)
  const limit = 10
  const offset = useMemo(() => page * limit, [page])

  const handleModeChange = (val: string) => {
    if (val === 'page-control' || val === 'infinite-scroll') {
      setMode(val)
    }
  }

  const { data, isError, isLoading, error, refetch, isFetching } = usePokemonList(
    limit,
    offset,
    mode === 'page-control',
  )

  const renderGridFallback = () => (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </section>
  )

  return (
    <>
      <Header active={mode} onNavigate={handleModeChange} />
      {mode === 'page-control' ? (
        <div style={{ backgroundColor: '#e9efff' }}>
          {isLoading ? (
            renderGridFallback()
          ) : (
            <PokemonGrid
              items={data?.results ?? []}
              isError={isError}
              error={error as Error | undefined}
              isFetching={isFetching}
              onRetry={() => refetch()}
            >
              <div className="col-span-full">
                <PaginationControls
                  page={page}
                  totalCount={data?.count ?? 0}
                  limit={limit}
                  isLoading={isFetching}
                  onPageChange={setPage}
                />
              </div>
            </PokemonGrid>
          )}
        </div>
      ) : (
        <div style={{ backgroundColor: '#e1fced' }}>
          <PokemonInfiniteLoadMore limit={limit} />
        </div>
      )}
    </>
  )
}
