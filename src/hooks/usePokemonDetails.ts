import { useQuery } from '@tanstack/react-query'
import { fetchPokemonById } from '../services/pokemon'

export const usePokemonDetails = (id: number) =>
  useQuery({
    queryKey: ['pokemon', 'detail', id],
    queryFn: () => fetchPokemonById(id),
    enabled: Number.isFinite(id),
  })
