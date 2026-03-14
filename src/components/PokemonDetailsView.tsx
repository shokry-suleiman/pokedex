import { Link } from 'react-router'
import type { PokemonDetails } from '../types/pokemon'
import whiteFlashIcon from '../assets/Icons/white-flash.png'
import rulerIcon from '../assets/Icons/ruler.png'
import weightIcon from '../assets/Icons/weight.png'

type PokemonDetailsViewProps = {
  data: PokemonDetails
}

export default function PokemonDetailsView({ data }: PokemonDetailsViewProps) {
  const sprite = data.sprites.other?.['official-artwork']?.front_default ?? ''

  return (
    <section className="min-h-screen py-10" style={{ backgroundColor: '#fbebf6' }}>
      <div className="px-4 mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md border border-black px-3 py-1.5 text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
        >
          ← Back to list
        </Link>
      </div>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Header with gradient and name */}
        <div
          className="flex items-center justify-center py-8"
          style={{ background: 'linear-gradient(to right, #a557f5, #e8489e)' }}
        >
          <h1 className="flex items-center gap-2 text-3xl font-bold capitalize text-white">
            <img className="h-6 w-6" src={whiteFlashIcon} alt="Flash" />
            {data.name}
          </h1>
        </div>

        {/* Sprite */}
        <div className="flex justify-center py-6">
          <div className="flex h-80 w-80 items-center justify-center rounded-full bg-gray-100">
            {sprite ? (
              <img className="h-64 w-64" src={sprite} alt={data.name} />
            ) : (
              <span className="text-sm text-gray-500">No image</span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 p-6 pt-4">
          {/* Type flags */}
          <div className="flex flex-wrap justify-center gap-2">
            {data.types.map((item) => (
              <span
                key={item.type.name}
                className="rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-semibold capitalize text-white"
              >
                {item.type.name}
              </span>
            ))}
          </div>

          {/* Height and Weight */}
          <dl className="flex gap-8 text-sm text-gray-700">
            <div className="flex flex-col items-center gap-1 rounded-lg bg-gray-100 px-6 py-3">
              <dt className="flex items-center gap-1 font-semibold text-gray-900">
                <img className="h-4 w-4" src={rulerIcon} alt="Ruler" />
                Height
              </dt>
              <dd className="font-bold">{data.height} dm</dd>
            </div>
            <div className="flex flex-col items-center gap-1 rounded-lg bg-gray-100 px-6 py-3">
              <dt className="flex items-center gap-1 font-semibold text-gray-900">
                <img className="h-4 w-4" src={weightIcon} alt="Weight" />
                Weight
              </dt>
              <dd className="font-bold">{data.weight} hg</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
