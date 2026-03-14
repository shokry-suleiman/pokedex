import type { ReactNode } from 'react'
import PokemonCard from './PokemonCard'
import { getPokemonId, getSpriteUrl } from '../lib/pokemon'
import type { PokemonListItem } from '../types/pokemon'

type PokemonGridProps = {
  items: PokemonListItem[]
  isError: boolean
  error?: Error
  isFetching: boolean
  onRetry: () => void
  children?: ReactNode
}

export default function PokemonGrid({
  items,
  isError,
  error,
  isFetching,
  onRetry,
  children,
}: PokemonGridProps) {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {isError && (
        <div className="col-span-full rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p>{error?.message ?? 'Something went wrong.'}</p>
          <button
            type="button"
            className="mt-3 rounded-md border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700"
            onClick={onRetry}
            disabled={isFetching}
          >
            {isFetching ? 'Retrying...' : 'Retry'}
          </button>
        </div>
      )}
      {items.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          id={getPokemonId(pokemon.url)}
          name={pokemon.name}
          sprite={getSpriteUrl(pokemon.url)}
        />
      ))}
      {children}
    </section>
  )
}
