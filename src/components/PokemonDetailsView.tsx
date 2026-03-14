import type { PokemonDetails } from '../types/pokemon'

type PokemonDetailsViewProps = {
  data: PokemonDetails
}

export default function PokemonDetailsView({ data }: PokemonDetailsViewProps) {
  const sprite = data.sprites.other?.['official-artwork']?.front_default ?? ''

  return (
    <section className="container py-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gray-100">
            {sprite ? (
              <img className="h-28 w-28" src={sprite} alt={data.name} />
            ) : (
              <span className="text-sm text-gray-500">No image</span>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold capitalize text-gray-900">
              {data.name}
            </h1>
            <dl className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <dt className="font-medium text-gray-900">Height:</dt>
                <dd>{data.height} dm</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-gray-900">Weight:</dt>
                <dd>{data.weight} hg</dd>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <dt className="font-medium text-gray-900">Types:</dt>
                {data.types.map((item) => (
                  <span
                    key={item.type.name}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium capitalize"
                  >
                    {item.type.name}
                  </span>
                ))}
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
