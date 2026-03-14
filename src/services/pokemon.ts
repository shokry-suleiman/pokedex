import type { PokemonDetails, PokemonListResponse } from '../types/pokemon'

export const fetchPokemonList = async (
  limit: number,
  offset: number,
): Promise<PokemonListResponse> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  )

  if (!response.ok) {
    throw new Error('Failed to load Pokemon list')
  }

  return response.json() as Promise<PokemonListResponse>
}

export const fetchPokemonById = async (id: number): Promise<PokemonDetails> => {
  if (!Number.isFinite(id)) {
    throw new Error('Invalid Pokemon id')
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  if (!response.ok) {
    throw new Error('Failed to load Pokemon details')
  }

  return response.json() as Promise<PokemonDetails>
}
