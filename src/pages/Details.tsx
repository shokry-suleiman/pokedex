import { useParams } from 'react-router'
import ErrorState from '../components/ErrorState'
import PokemonDetailsView from '../components/PokemonDetailsView'

export default function Details() {
  const { id } = useParams()
  const pokemonId = Number(id)

  if (!Number.isFinite(pokemonId)) {
    return (
      <section className="container py-10">
        <ErrorState
          message="Invalid Pokemon id."
          isFetching={false}
          onRetry={() => void 0}
        />
      </section>
    )
  }

  return <PokemonDetailsView pokemonId={pokemonId} />
}
