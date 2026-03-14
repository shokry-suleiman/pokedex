import { Link } from 'react-router'
import avatarIcon from '../assets/Icons/avatar.png'

type PokemonCardProps = {
  id: number
  name: string
  sprite: string
}

export default function PokemonCard({ id, name, sprite }: PokemonCardProps) {
  return (
    <Link to={`/pokemon/${id}`} className="block">
      <article className="w-full overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm h-full">
        <div className="p-4">
          <div className="flex items-center justify-center rounded-sm bg-gray-100 p-2">
            <img
              className="h-28 w-26 object-cover"
              src={sprite}
              alt={name}
              loading="lazy"
              onError={(e) => { e.currentTarget.src = avatarIcon }}
            />
          </div>
        </div>
        <div className="p-4 pt-0">
          <h3 className="text-lg font-semibold capitalize text-gray-900 text-center">
            {name}
          </h3>
        </div>
      </article>
    </Link>
  )
}
