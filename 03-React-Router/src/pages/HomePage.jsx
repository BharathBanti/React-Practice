function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-89px)] max-w-6xl items-center px-6 py-16">
      <div className="max-w-3xl space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-black/50">Welcome</p>
        <h1 className="text-5xl leading-tight font-medium tracking-tight md:text-7xl">
          Home Page
        </h1>
        <p className="max-w-xl text-base leading-8 text-black/65 md:text-lg">
          A quiet, minimal interface built with strong contrast, simple spacing, and just enough structure to feel polished.
        </p>
      </div>
    </section>
  )
}

export default HomePage
