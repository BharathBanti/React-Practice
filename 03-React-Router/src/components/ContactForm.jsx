function ContactForm() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="contact-panel max-w-3xl">
        <form className="space-y-6" action="">
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-[0.28em] text-black/45" htmlFor="name">
              Name
            </label>
            <input className="contact-input" type="text" name='name' id='name' placeholder='Enter your name' />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-[0.28em] text-black/45" htmlFor="email">
              Email
            </label>
            <input className="contact-input" type="email" name='email' id='email' placeholder='Enter your email' />
          </div>
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-[0.28em] text-black/45" htmlFor="message">
              Your message
            </label>
            <textarea className="contact-input min-h-40 resize-y" name="message" id="message" placeholder="Write your message here"></textarea>
          </div>
          <button className="rounded-full border border-black bg-black px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-white hover:text-black" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
