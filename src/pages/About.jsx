export default function About() {
  return (
    <section className="relative mx-auto my-10 max-w-3xl prose text-primary-300 min-h-screen">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl animate-fade-in-down text-black">
        A Little About Me
      </h1>

      <p className="mt-4 animate-fade-in text-primary-300">
        My goal is to bridge the gap between creative ideation and technical execution, ensuring solutions are intuitive, engaging, and continuously improved through consumer feedback.
      </p>

      <h2 className="text-2xl font-semibold mt-6 animate-fade-in-left text-primary-300">Skills</h2>
      <ul className="list-disc list-inside mt-2 animate-fade-in-left text-primary-300">
        <li><strong>Frontend:</strong> React, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Prisma, APIs</li>
        <li><strong>Design & UX:</strong> User-Centered Design, Wireframing, Figma, Prototyping</li>
        <li><strong>Marketing & Content:</strong> Digital Marketing, Content Strategy/Creation, Data Analytics, Customer Experience</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 animate-fade-in-right text-primary-300">Career Aspirations</h2>
      <p className="mt-2 animate-fade-in-right text-primary-300">
        Over the next 5–10 years, I see myself in a marketing or design role where I can guide both technical and creative aspects of website and app development. Roles such as Product Marketing Manager, Digital Marketing Manager, UX/UI Designer, or Customer Experience (CX) Strategist align with my vision to deliver experiences that are both functional and impactful for users.
      </p>
    </section>
  )
}
