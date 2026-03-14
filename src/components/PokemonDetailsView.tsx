import { Link } from 'react-router'
import whiteFlashIcon from '../assets/Icons/white-flash.png'
import rulerIcon from '../assets/Icons/ruler.png'
import weightIcon from '../assets/Icons/weight.png'
import avatarIcon from '../assets/Icons/avatar.png'
import ErrorState from './ErrorState'
import { usePokemonDetails } from '../hooks/usePokemonDetails'

type PokemonDetailsViewProps = {
  pokemonId: number
}

function DetailsSkeleton() {
  return (
    <div className="mx-4 sm:mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center justify-center bg-gradient-to-r from-[#a557f5] to-[#e8489e] py-8">
        <div className="h-8 w-40 rounded bg-white/30" />
      </div>

      {/* Sprite skeleton */}
      <div className="flex justify-center py-6">
        <div className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full bg-gray-200" />
      </div>

      <div className="flex flex-col items-center gap-4 p-6 pt-3">
        {/* Type flags skeleton */}
        <div className="flex gap-2">
          <div className="h-5 w-14 rounded-full bg-gray-200" />
          <div className="h-5 w-14 rounded-full bg-gray-200" />
        </div>

        {/* Height and Weight skeleton */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1 rounded-lg bg-gray-100 px-6 sm:px-8 md:px-12 py-4">
            <div className="h-4 w-16 rounded bg-gray-200" />
            <div className="h-5 w-12 rounded bg-gray-200" />
          </div>
          <div className="flex flex-col items-center gap-1 rounded-lg bg-gray-100 px-6 sm:px-8 md:px-12 py-4">
            <div className="h-4 w-16 rounded bg-gray-200" />
            <div className="h-5 w-12 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PokemonDetailsView({ pokemonId }: PokemonDetailsViewProps) {
  const { data, isError, error, refetch, isFetching, isLoading } =
    usePokemonDetails(pokemonId)

  const sprite = data?.sprites.other?.['official-artwork']?.front_default ?? ''

  return (
    <section className="min-h-screen bg-[#fbebf6] py-10">
      <div className="container mx-auto mb-8 px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1 rounded-md border border-black px-3 py-1.5 text-sm font-semibold text-gray-900 hover:text-gray-600 transition"
        >
          ← Back to list
        </Link>
      </div>

      {isLoading ? (
        <DetailsSkeleton />
      ) : isError ? (
        <div className="mx-4 sm:mx-auto max-w-3xl">
          <ErrorState
            message={(error as Error).message}
            isFetching={isFetching}
            onRetry={() => refetch()}
          />
        </div>
      ) : data ? (
        <div className="mx-4 sm:mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Header with gradient and name */}
          <div className="flex items-center justify-center bg-gradient-to-r from-[#a557f5] to-[#e8489e] py-8">
            <h1 className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold capitalize text-white">
              <img className="h-6 w-6" src={whiteFlashIcon} alt="Flash" />
              {data.name}
            </h1>
          </div>

          {/* Sprite */}
          <div className="flex justify-center py-6">
            <div className="flex h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 items-center justify-center rounded-full bg-gray-100">
              <img className="h-36 w-36 sm:h-48 sm:w-48 md:h-64 md:w-64" src={sprite || avatarIcon} alt={data.name} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 p-6 pt-3">
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
            <dl className="flex gap-4 text-sm text-gray-700">
              <div className="flex flex-col items-center gap-1 rounded-lg bg-gray-100 px-6 sm:px-8 md:px-12 py-4">
                <dt className="flex items-center gap-1 font-semibold text-gray-500">
                  <img className="h-4 w-4" src={rulerIcon} alt="Ruler" />
                  Height
                </dt>
                <dd className="font-extrabold text-black">{data.height / 10} m</dd>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg bg-gray-100 px-6 sm:px-8 md:px-12 py-4">
                <dt className="flex items-center gap-1 font-semibold text-gray-500">
                  <img className="h-4 w-4" src={weightIcon} alt="Weight" />
                  Weight
                </dt>
                <dd className="font-extrabold text-black">{data.weight / 10} kg</dd>
              </div>
            </dl>
          </div>
        </div>
      ) : null}
    </section>
  )
}
