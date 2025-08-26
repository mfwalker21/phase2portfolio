export default function ProjectCard({ title, description, tech = [], links = [] }) {
  return (
    <article className="card overflow-hidden">
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
        {!!tech.length && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <li key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">{t}</li>
            ))}
          </ul>
        )}
        {!!links.length && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map(({ href, label }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="btn-outline text-sm">
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
