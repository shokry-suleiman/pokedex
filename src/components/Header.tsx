import flashIcon from '../assets/Icons/flash.png'

type HeaderProps = {
  active: 'page-control' | 'infinite-scroll'
  onNavigate: (val: string) => void
}

export default function Header({ active, onNavigate }: HeaderProps) {
  const isPageControl = active === 'page-control'
  const isInfiniteScroll = active === 'infinite-scroll'
  const accent = isPageControl ? '#e9efff' : '#e1fced'

  return (
    <header style={{ backgroundColor: accent }}>
      <div className="flex flex-col items-center justify-center gap-3 py-6">
        <div className="flex items-center gap-2">
          <img className="h-6 w-6" src={flashIcon} alt="Flash" />
          <h1 className="text-2xl font-extrabold tracking-tight">Pokédex</h1>
        </div>
        <p className="text-gray-700">
          Discover and explore Pokemon with{' '}
          {isPageControl ? 'page control' : 'infinite scroll'}
        </p>
        <nav className="flex items-center gap-3">
          <button
            type="button"
            className={`rounded-sm border px-4 py-2 text-sm font-medium transition cursor-pointer ${
              isPageControl
                ? 'border-gray-900 bg-gray-900 text-white hover:border-gray-800 hover:bg-gray-800'
                : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50'
            }`}
            aria-current={isPageControl ? 'page' : undefined}
            onClick={() => onNavigate('page-control')}
          >
            Page control
          </button>
          <button
            type="button"
            className={`rounded-sm border px-4 py-2 text-sm font-medium transition cursor-pointer ${
              isInfiniteScroll
                ? 'border-gray-900 bg-gray-900 text-white hover:border-gray-800 hover:bg-gray-800'
                : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50'
            }`}
            aria-current={isInfiniteScroll ? 'page' : undefined}
            onClick={() => onNavigate('infinite-scroll')}
          >
            Infinite scroll
          </button>
        </nav>
      </div>
    </header>
  )
}
