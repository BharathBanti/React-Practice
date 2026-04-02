
function About() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            About Us
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            A minimal, focused team built around clarity and steady growth.
          </h1>
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Hey, this is about our BlueWave ... Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Repellat enim, omnis, libero non
            sequi esse eius quis sed aliquam cupiditate dolorem atque ducimus
            nisi quisquam qui neque, tempore at odio?
          </p>
          <button className="rounded-full border border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-600 hover:text-white">
            Explore
          </button>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-sm">
          <img
            className="h-full w-full object-cover"
            src="./about.webp"
            alt="About_banner-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
