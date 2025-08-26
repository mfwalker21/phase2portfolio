import { Linkedin } from "lucide-react";
export default function Contact() {
  return (
    <section className="grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-bold">Let’s Collab</h1>
        <p>Email: <a href="mailto:myawalkerinfo@gmail.com">myawalkerinfo [@ gmail.com]</a></p>
      </div>

      <p className="flex items-center gap-2">
            <Linkedin size={25} className="text-primary-300" />
            <a className="underline" href="https://www.linkedin.com/in/mya-walker" target="_blank" rel="noreferrer">
              linkedin.com/in/mya-walker
            </a>
          </p>

      <form name="contact" method="POST" action="/success" data-netlify="true" netlify-honeypot="bot-field" className="card p-6">
        <input type="hidden" name="form-name" value="contact" />
        <label className="block">Name<input className="border" type="text" name="name" required/></label>
        <label className="block">Email<input className="border" type="email" name="email" required/></label>
        <label className="block">Message<textarea className="border" name="message" required></textarea></label>
        <button className="btn-primary mt-5" type="submit">Send</button>
      </form>
    </section>
  )
}
