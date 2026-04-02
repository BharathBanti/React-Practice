
function Home() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-4xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Welcome
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Build modern experiences with a calm, confident visual style.
          </h1>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Hey, welcome to BlueWave... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi adipisci debitis qui molestiae,
            consectetur dicta iste blanditiis illum suscipit. Neque eius
            eveniet a doloremque dolor laborum ducimus voluptates magnam totam.
          </p>
          <button className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-600">
            Let&apos;s Start
          </button>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-sm">
          <img
            className="h-full w-full object-cover"
            src="./hero-banner.webp"
            alt="Hero_banner-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
