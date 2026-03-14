export const getPokemonId = (url: string) =>
  Number(url.split('/').filter(Boolean).pop())

export const getSpriteUrl = (url: string) => {
  const id = getPokemonId(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}
