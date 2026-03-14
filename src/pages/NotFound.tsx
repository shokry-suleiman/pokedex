import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#fbebf6] px-4">
      <div className="text-center">
        <p className="text-8xl font-extrabold text-[#a557f5]">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-[#a557f5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9340e8]"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  )
}
