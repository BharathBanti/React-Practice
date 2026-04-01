import { Link, useLoaderData } from "react-router-dom"

function JobDetails() {
  const jobDetails = useLoaderData();

  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="jobs-card">
        <p className="text-[11px] uppercase tracking-[0.28em] text-black/45">Role Overview</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-black md:text-6xl">
          {jobDetails.title}
        </h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="jobs-chip">{jobDetails.location}</span>
          <span className="jobs-chip">${jobDetails.salary.toLocaleString()}</span>
        </div>
        <p className="mt-8 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
          This role is ideal for someone who enjoys building polished user experiences,
          collaborating closely with a product team, and shipping thoughtful work with strong attention to detail.
        </p>
      </div>
      <aside className="rounded-4xl border border-black/15 bg-black p-8 text-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
        <p className="text-sm uppercase tracking-[0.25em] text-white/60">Next Step</p>
        <p className="mt-4 text-sm leading-7 text-white/75">
          Review the job summary, then continue with your application when you&apos;re ready.
        </p>
        <button
          type="button"
          className="mt-8 w-full rounded-full border border-white bg-white px-6 py-3 text-sm uppercase tracking-[0.2em] text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          Apply Now
        </button>
        <Link
          to="/jobs"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
        >
          Back To Jobs
        </Link>
      </aside>
    </section>
  )
}

export default JobDetails;

export const JobDetailsLoader = async({params}) => {
  const {id} = params;
  const res = await fetch(`http://localhost:3001/jobs/` + id);
  if (!res.ok) {
    throw new Response('Failed to load job details', { status: res.status });
  }
  return res.json();
}
