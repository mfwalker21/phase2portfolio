import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'rounded-xl px-3 py-2 text-sm font-medium transition ' +
        (isActive ? 'bg-primary-100 text-primary-800' : 'text-gray-700 hover:bg-gray-100')
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container-px mx-auto flex max-w-6xl items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold">Mya Walker</span>
        </Link>

        <nav className="hidden gap-2 md:flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <button
          className="md:hidden rounded-xl border border-gray-300 px-3 py-2 text-sm"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="container-px mx-auto max-w-6xl pb-3 md:hidden">
          <div className="flex flex-col gap-2">
            <NavItem to="/" >Home</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </div>
        </div>
      )}
    </header>
  )
}
