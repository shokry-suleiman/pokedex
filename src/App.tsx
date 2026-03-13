import { Link, Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <header className="app-nav">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App
