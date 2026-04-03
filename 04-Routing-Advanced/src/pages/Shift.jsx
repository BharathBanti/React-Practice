import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import EmployeeCard from '../components/EmployeeCard';

function Shift() {
  const params = useParams();
  const { shift } = params;
  const normalizedShift = shift?.split('-').pop()?.toUpperCase();

  const data = useOutletContext();
  const fileteredEmployees = data.filter(
    (emp) => emp.shift.toUpperCase() === normalizedShift
  );

  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.45)] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Shift {normalizedShift}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
              Employee roster for the current shift.
            </h2>
          </div>
          <div className="rounded-2xl bg-slate-950 px-4 py-3 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
              Active cards
            </p>
            <p className="mt-1 text-2xl font-bold">
              {fileteredEmployees.length}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {fileteredEmployees.map((emp) => (
            <EmployeeCard emp={emp} key={emp.id} />
          ))}
        </div>
      </div>
      <Outlet />
    </section>
  );
}

export default Shift;
