import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <section className="text-center">
      <h1 className="text font-bold">Thanks for reaching out!</h1>
      <p>Your message was submitted successfully.</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Back to Home</Link>
    </section>
  )
}
