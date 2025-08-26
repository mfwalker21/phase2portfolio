import { Linkedin } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });
      navigate("/success"); 
    } catch (err) {
      alert("There was a problem submitting the form. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-2xl font-bold">Let’s Collab!</h1>
        <p>Email: <a href="mailto:myawalkerinfo@gmail.com">myawalkerinfo [@ gmail.com]</a></p>
      </div>

      <p className="flex items-center gap-2">
        <Linkedin size={25} className="text-primary-300" />
        <a className="underline" href="https://www.linkedin.com/in/mya-walker" target="_blank" rel="noreferrer">
          linkedin.com/in/mya-walker
        </a>
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="card p-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label className="block">
          Name
          <input className="border" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label className="block">
          Email
          <input className="border" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label className="block">
          Message
          <textarea className="border" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button className="btn-primary mt-5" type="submit">Send</button>
      </form>
    </section>
  );
}
