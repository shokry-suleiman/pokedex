import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPokemonList } from '../services/pokemon'

export const usePokemonInfinite = (limit: number) =>
  useInfiniteQuery({
    queryKey: ['pokemon', 'infinite', limit],
    queryFn: ({ pageParam }) => fetchPokemonList(limit, pageParam as number),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * limit
      return nextOffset < lastPage.count ? nextOffset : undefined
    },
  })
