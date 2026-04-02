import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-xl border border-slate-200 object-cover shadow-sm"
            src="/logo.jpg"
            alt="header_logo-image"
          />
          <div>
            <p className="text-lg font-semibold tracking-[0.18em] text-slate-900 uppercase">
              Bluewave
            </p>
            <p className="text-xs font-medium tracking-[0.22em] text-blue-600 uppercase">
              Professional
            </p>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
            <li className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}><NavLink to='/'>Home</NavLink></li>
            <li className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}><NavLink to='/about'>About</NavLink></li>
            <li className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}><NavLink to='/product'>Product</NavLink></li>
            <li className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}><NavLink to='/contact'>Contact</NavLink></li>
            <li className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}><NavLink to='/employees'>Employees</NavLink></li>
            <li className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer`}><NavLink to='/settings'>Settings</NavLink></li>
          </ul>
        </nav>

        <button className="rounded-full border border-blue-600 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-600">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
