export default function About() {
  return (
    <section className="relative mx-auto my-12 max-w-3xl px-6 min-h-screen">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold sm:text-5xl animate-fade-in-down text-black">
          A Little About Me
        </h1>
        <div className="h-1 w-20 bg-purple-400 rounded mt-3 animate-fade-in"></div>
      </div>

      {/* Intro */}
      <p className="mt-4 animate-fade-in text-gray-700 leading-relaxed text-lg">
        My goal is to bridge the gap between creative ideation and technical execution,
        ensuring solutions are intuitive, engaging, and continuously improved through thoughtful
        user feedback.
      </p>

      {/* Skills Section */}
      <div className="mt-10 animate-fade-in-left bg-white/70 shadow-sm border border-purple-100 rounded-xl p-6 backdrop-blur">
        <h2 className="text-2xl font-semibold text-black mb-3">
          Skills
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Frontend:</strong> React, Tailwind CSS, Vite, Axios</li>
          <li><strong>Backend:</strong> Node.js, Prisma, APIs, Supabase Auth, Database Seeding (Faker.js)</li>
          <li><strong>Design & UX:</strong> User-Centered Design, Wireframing, Figma, Prototyping</li>
          <li><strong>Full-Stack Project Management:</strong> End-to-end development, Git/GitHub, Netlify Deployment</li>
          <li><strong>Marketing & Content:</strong> Digital Marketing, Content Strategy, Analytics, Customer Experience</li>
          <li><strong>Business Operations:</strong> Training, workflow optimization, and data coordination across healthcare systems, health-tech startups, and global technology organizations </li>
        </ul>
      </div>

      {/* Career Aspirations */}
      <div className="mt-10 animate-fade-in-right bg-white/70 shadow-sm border border-purple-100 rounded-xl p-6 backdrop-blur">
        <h2 className="text-2xl font-semibold text-black mb-3">
          Career Aspirations
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          I can guide both technical and creative aspects of digital experiences. Roles like Product Marketing Manager,
          Digital Marketing Manager, UX/UI Designer, or Customer Experience Strategist align with my
          vision to create experiences that are functional, human-centered, and impactful.
        </p>
      </div>

    </section>
  );
}
