import { Link } from "react-router-dom";

function EmployeeCard({ emp }) {
  const isAdmin = emp.role === 'admin';
  const isActive = emp.status === 'active';

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_22px_60px_-42px_rgba(15,23,42,0.55)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_60%,#38bdf8_100%)] px-6 pb-6 pt-7 text-white">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex items-center gap-4">
          <img
            className="h-20 w-20 rounded-3xl border-2 border-white/60 object-cover shadow-lg"
            src={`${emp.avatar}`}
            alt={`${emp.name}`}
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-100">
              {emp.position}
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              {emp.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-wrap gap-3">
          <p
            className={`${isAdmin ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'} rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em]`}
          >
            {emp.role}
          </p>
          <p
            className={`${isActive ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-100 text-slate-600'} rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em]`}
          >
            {emp.status}
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Employee summary
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Working in the {emp.shift} shift as {emp.position}, with a current
            {` ${emp.status} `}status in the BlueWave employee records.
          </p>
        </div>

        <p className="text-sm font-medium text-slate-500">
          Employee ID:{' '}
          <span className="font-semibold text-slate-900">{emp.id}</span>
        </p>

        <Link to={`${emp.id}`}>
          <button className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sky-600">
            View details
          </button>
        </Link>
      </div>
    </article>
  );
}

export default EmployeeCard;
