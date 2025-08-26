import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="space-y-16">
      {/* collabs */}
      <section>
        <h2 className="text-2xl font-bold">Collaborative Projects</h2>
        <p className="mt-2 text-gray-700">Projects built with teammates during coursework and group work.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="EcoBridge"
            description="Team project repository containing multiple directories (backend, frontend) for an app focused on sustainability themes."
            tech={['JavaScript', 'CSS', 'HTML']}
            links={[
              { href: 'https://github.com/tokslaw7/ecobridge', label: 'GitHub Repo' },
            ]}
          />
          <ProjectCard
            title="Mini Pokedex"
            description="A simple Pokédex built with React, React Router, React Query, Tailwind CSS, and Axios that fetches data from the public PokeAPI."
            tech={['React', 'React Router', 'Tailwind', 'Axios']}
            links={[
              { href: 'https://github.com/zawadtanzim/mini-pokedex', label: 'GitHub Repo' },
            ]}
          />
        </div>
      </section>

      {/* Social Media */}
      <section>
        <h2 className="text-2xl font-bold">Social Media Experience</h2>
        <p className="mt-2 text-gray-700">
          A portfolio of my work in social media content strategy, branding, and digital storytelling.
          Includes campaigns, graphics, and engagement examples.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-1">
          <ProjectCard
            title="Social Media Portfolio"
            description="Examples of content creation, branding strategy, and digital marketing campaigns I’ve managed."
            tech={['Social Media', 'Branding', 'Content Creation']}
            links={[
              { href: 'https://infomyaw.wixsite.com/myaw-portfolio', label: 'Portfolio Site' },
            ]}
          />
        </div>
      </section>

      {/* Solo Projects */}
      <section>
        <h2 className="text-2xl font-bold">Solo Projects</h2>
        <p className="mt-2 text-gray-700">Independent projects/experiments published on GitHub.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Personal Portfolio (v1)"
            description="My first personal portfolio site showcasing early projects."
            tech={['React', 'Tailwind', 'Netlify']}
            links={[
              { href: 'https://github.com/mfwalker21/portfolio', label: 'GitHub Repo' },
            ]}
          />
          <ProjectCard
            title="Other GitHub Repositories"
            description="See more practice projects."
            tech={['Various']}
            links={[
              { href: 'https://github.com/mfwalker21?tab=repositories', label: 'All GitHub Repos' },
            ]}
          />
        </div>
      </section>
    </div>
  )
}
