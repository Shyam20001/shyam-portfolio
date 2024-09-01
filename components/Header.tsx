import { Link } from "aleph/react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center" role="navigation" aria-label="Main Navigation">
        <Link to="/" className="text-xl font-bold" aria-label="Go to Home">
          My Portfolio
        </Link>
        <ul className="flex space-x-4" role="menubar">
          <li role="none">
            <Link to="/" className="hover:underline" role="menuitem">
              Home
            </Link>
          </li>
          <li role="none">
            <Link to="/aboutme" className="hover:underline" role="menuitem">
              About
            </Link>
          </li>
          <li role="none">
            <Link to="/experience" className="hover:underline" role="menuitem">
              Experience
            </Link>
          </li>
          <li role="none">
            <Link to="/projects" className="hover:underline" role="menuitem">
              Projects
            </Link>
          </li>
          <li role="none">
            <Link to="/education" className="hover:underline" role="menuitem">
              Education
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
