import { useState } from 'react'
import Header from '../components/Header'
import PokemonInfiniteLoadMore from '../components/PokemonInfiniteLoadMore'
import PokemonPageControl from '../components/PokemonPageControl'

export default function Home() {
  const [mode, setMode] = useState<'page-control' | 'infinite-scroll'>(
    'page-control',
  )

  const handleModeChange = (val: string) => {
    if (val === 'page-control' || val === 'infinite-scroll') {
      setMode(val)
    }
  }

  return (
    <>
      <Header active={mode} onNavigate={handleModeChange} />
      {mode === 'page-control' ? (
        <PokemonPageControl />
      ) : (
        <PokemonInfiniteLoadMore />
      )}
    </>
  )
}
