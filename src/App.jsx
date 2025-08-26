import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container-page mx-auto w-full max-w-6xl flex-1 py-10">
        <Outlet />
      </main>
    </div>
  )
}
