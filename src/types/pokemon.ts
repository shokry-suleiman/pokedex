export type PokemonListItem = {
  name: string
  url: string
}

export type PokemonListResponse = {
  count: number
  results: PokemonListItem[]
}

export type PokemonDetails = {
  name: string
  height: number
  weight: number
  types: Array<{ type: { name: string } }>
  sprites: {
    other?: {
      'official-artwork'?: { front_default?: string | null }
    }
  }
}
