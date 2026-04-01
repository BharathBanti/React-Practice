import { Outlet } from 'react-router-dom';

function JobsLayout() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-black/50">Careers</p>
          <h2 className="text-4xl font-medium tracking-tight md:text-6xl">Job Openings</h2>
          <p className="max-w-2xl text-base leading-8 text-black/65 md:text-lg">
            Explore the current roles available in our company and scan the key details at a glance.
          </p>
        </div>
        <div className="rounded-[2rem] border border-black/15 bg-black p-8 text-white">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Open Roles</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
            Each listing is presented as a clean card with location and salary details kept easy to compare.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <Outlet />
      </div>
    </section>
  );
}

export default JobsLayout;
