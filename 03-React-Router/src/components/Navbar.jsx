import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <img
            className="h-10 w-10 rounded-full border border-black object-cover p-1"
            src="/react.png"
            alt="react-logo"
          />
        <ul className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] md:flex">
          <NavLink to="/">
            <li className="cursor-pointer transition-opacity duration-200 hover:opacity-60">
              Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="cursor-pointer transition-opacity duration-200 hover:opacity-60">
              About
            </li>
          </NavLink>
          <NavLink to="/product">
            <li className="cursor-pointer transition-opacity duration-200 hover:opacity-60">
              Product
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li className="cursor-pointer transition-opacity duration-200 hover:opacity-60">
              Contact
            </li>
          </NavLink>
          <NavLink to="/jobs">
            <li className="cursor-pointer transition-opacity duration-200 hover:opacity-60">
              Jobs
            </li>
          </NavLink>
        </ul>
          <button onClick={() => navigate('/about', {replace: true})} className="rounded-full border border-black bg-black px-5 py-2 text-sm uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-white hover:text-black">
            Get Started
          </button>
      </div>
    </div>
  );
}

export default Navbar;
