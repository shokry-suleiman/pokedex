import { useParams } from 'react-router'
import ErrorState from '../components/ErrorState'
import Skeleton from '../components/Skeleton'
import PokemonDetailsView from '../components/PokemonDetailsView'
import { usePokemonDetails } from '../hooks/usePokemonDetails'

export default function Details() {
  const { id } = useParams()
  const pokemonId = Number(id)

  const { data, isError, error, refetch, isFetching, isLoading } =
    usePokemonDetails(pokemonId)

  if (!Number.isFinite(pokemonId)) {
    return (
      <section className="container py-10">
        <ErrorState
          message="Invalid Pokemon id."
          isFetching={false}
          onRetry={() => refetch()}
        />
      </section>
    )
  }

  if (isError) {
    return (
      <section className="container py-10">
        <ErrorState
          message={(error as Error).message}
          isFetching={isFetching}
          onRetry={() => refetch()}
        />
      </section>
    )
  }

  if (isLoading || !data) {
    return (
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </section>
    )
  }

  return <PokemonDetailsView data={data} />
}
