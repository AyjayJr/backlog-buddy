import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">Backlog Buddy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/backlog">Backlog</Link></li>
          <li><Link to="/about">About Me</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/backlog">Backlog</Link></li>
            <li><Link to="/about">About Me</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}