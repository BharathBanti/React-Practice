import { useNavigate } from "react-router-dom"

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">Contact</p>
          <h1 className="text-4xl font-medium tracking-tight md:text-6xl">Contact Page</h1>
          <p className="max-w-xl text-base leading-8 text-black/65 md:text-lg">
            Simple surfaces and monochrome contrast make the page feel intentional while staying easy to extend later.
          </p>
        </div>
        <div className="rounded-4xl border border-black/15 bg-black p-8 text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Minimal UI</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
            Pick a route below to view the direct contact details or the message form inside the nested outlet.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-4">
            <button className="contact-pill" onClick={() => navigate('info')}>
              Contact Info
            </button>
            <button className="contact-pill" onClick={() => navigate('form')}>
              Contact Form
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
