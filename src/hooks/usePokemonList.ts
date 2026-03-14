import { useQuery } from '@tanstack/react-query'
import { fetchPokemonList } from '../services/pokemon'

export const usePokemonList = (
  limit: number,
  offset: number,
  enabled = true,
) =>
  useQuery({
    queryKey: ['pokemon', 'list', limit, offset],
    queryFn: () => fetchPokemonList(limit, offset),
    enabled,
  })
