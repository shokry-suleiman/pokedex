import { Link } from 'react-router'

type PokemonCardProps = {
  id: number
  name: string
  sprite: string
}

export default function PokemonCard({ id, name, sprite }: PokemonCardProps) {
  return (
    <Link to={`/pokemon/${id}`} className="block">
      <article className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="p-4">
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
            <img
              className="h-24 w-24"
              src={sprite}
              alt={name}
              loading="lazy"
            />
          </div>
        </div>
        <div className="p-4 pt-0">
          <h3 className="text-lg font-semibold capitalize text-gray-900">
            {name}
          </h3>
        </div>
      </article>
    </Link>
  )
}
