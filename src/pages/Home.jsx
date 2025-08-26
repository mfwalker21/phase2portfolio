import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import headshot from '../assets/headshot.jpg'

export default function Home() {
  const [quoteVisible, setQuoteVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setQuoteVisible(true), 500) // delay 0.5s
    return () => clearTimeout(timer)
  }, [])

  const quote = "Dreams don't work unless you do."
  const author = "John C. Maxwell"

  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Welcome to my portfolio!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          With a foundation in project management, creative design, and
          problem-solving, I aspire to craft an experience with impact. Built with React, Vite, and Tailwind
        </p>

        {/* Quote of the Day with simple fade-in animation */}
        <div
          className={`mt-6 p-4  transition-all duration-1000 ease-out
            ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
          `}
        >
          <p className="italic text-lg text-gray-800">“{quote}”</p>
          <p className="text-right text-gray-500 mt-2">— {author}</p>
        </div>

        {/* btns - projects, contact */}
        <div className="mt-6 flex gap-3">
          <Link to="/projects" className="btn-outline">
            Projects
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Me
          </Link>
        </div>
      </div>

      {/* my headshot */}
      <div className="order-first md:order-last flex justify-center">
        <img
          src={headshot}
          className="h-64 w-64 rounded-full object-cover shadow-lg md:h-80 md:w-80"
        />
      </div>
    </section>
  )
}
