import { NavLink } from "react-router-dom";

function Employees() {
  const linkStyles = ({ isActive }) =>
    `group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "border-sky-600 bg-sky-600 text-white shadow-lg shadow-sky-200"
        : "border-slate-200 bg-white/85 text-slate-700 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
    }`;

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_28%),linear-gradient(180deg,#f8fbff_0%,#eef5ff_48%,#f8fafc_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(90deg,rgba(14,165,233,0.12),rgba(59,130,246,0.03),transparent)]" />
      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
                Team BlueWave
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Explore your employees, shifts, and current team presence.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Browse shift-wise team members, scan their current status, and
                move through employee records from one focused workspace.
              </p>
            </div>
            <div className="grid max-w-sm grid-cols-2 gap-3">
              <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
                  Live View
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-950">Shift Hub</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                  Records
                </p>
                <p className="mt-2 text-2xl font-bold text-slate-950">Team Data</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="rounded-[1.75rem] border border-slate-200/70 bg-white/85 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">Browse by shift</p>
              <p className="text-sm text-slate-500">
                Choose a shift to view available employee cards.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              <li>
                <NavLink to="shift-A" className={linkStyles}>
                  <span className="h-2.5 w-2.5 rounded-full bg-current opacity-80" />
                  Shift A
                </NavLink>
              </li>
              <li>
                <NavLink to="shift-B" className={linkStyles}>
                  <span className="h-2.5 w-2.5 rounded-full bg-current opacity-80" />
                  Shift B
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Employees
