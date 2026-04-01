function ContactInfo() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="contact-panel grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-stone-100 p-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">Email</p>
          <p className="mt-3 text-base leading-7 text-black/80 break-all">dasarib180@gmail.com</p>
        </div>
        <div className="rounded-3xl bg-stone-100 p-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">Phone</p>
          <p className="mt-3 text-base leading-7 text-black/80">7989668448</p>
        </div>
        <div className="rounded-3xl bg-stone-100 p-5 md:col-span-1">
          <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">Address</p>
          <p className="mt-3 text-base leading-7 text-black/80">
            Kurlapalli Village, Kanaganapalli Mandal, Sri Sathya Sai District - 515641
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
