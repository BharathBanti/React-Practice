import { NavLink } from "react-router-dom";

function Employees() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          Team BlueWave
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Login to see employess details and records.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Still needs to add more in this page.
        </p>
      </div>
      <nav>
        <ul>
          <li><NavLink to='shiftA'>Shift A</NavLink></li>
          <li><NavLink to='shiftB'>Shift B</NavLink></li>
        </ul>
      </nav>
      
    </section>
  )
}

export default Employees
