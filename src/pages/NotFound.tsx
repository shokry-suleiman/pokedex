import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section id="center">
      <div>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back home</Link>
      </div>
    </section>
  )
}
