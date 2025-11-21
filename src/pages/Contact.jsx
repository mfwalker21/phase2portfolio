import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      navigate("/success");
    } catch (err) {
      alert("There was a problem submitting the form. Please try again.");
      console.error(err);
    }
  };

  return (
    <section className="grid gap-10 md:grid-cols-2 p-5">
      
{/* email / linkedin------------------------------------------------------ */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Let’s Collab</h1>

    <p className="flex items-center gap-2 mt-3">
  <span className="p-2 bg-purple-100 rounded-full">
    <Mail size={20} className="text-purple-600" />
  </span>
  <a
    href="mailto:myawalkerinfo@gmail.com"
    className="text-black underline hover:text-purple-600 font-semibold transition"
  >
    myawalkerinfo [@gmail.com]
  </a>
</p>



      <p className="flex items-center gap-2 mt-3">
          <Linkedin size={26} className="text-purple-900" />
          <a
            href="https://www.linkedin.com/in/mya-walker"
            target="_blank"
            rel="noreferrer"
            className="text-black underline hover:text-purple-600 font-semibold transition"
          >
            linkedin.com/in/mya-walker
          </a>
        </p>
      </div>

  {/*(FORM: right side) ----- */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="p-6 rounded-lg bg-white shadow-md space-y-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <label className="block font-medium">
          Name
          <input
            className="w-full mt-1 border p-2 rounded focus:ring focus:border-purple-500"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label className="block font-medium">
          Email
          <input
            className="w-full mt-1 border p-2 rounded focus:ring focus:border-purple-500"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label className="block font-medium">
          Message
          <textarea
            className="w-full mt-1 border p-2 rounded h-32 resize-none focus:ring focus:border-purple-500"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

{/* BUTTON ------ */}
        <button
          type="submit"
          className="w-full bg-[#6566] text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
