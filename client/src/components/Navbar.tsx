
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-white">
            <GraduationCap size={22} />
          </div>

          <span className="text-2xl font-bold text-maroon">
            EduReach
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-gray-700 hover:text-maroon">
            Home
          </a>

          <a href="#about" className="text-gray-700 hover:text-maroon">
            About
          </a>

          <a href="#courses" className="text-gray-700 hover:text-maroon">
            Courses
          </a>

          <a href="#mentors" className="text-gray-700 hover:text-maroon">
            Mentors
          </a>

          <a href="#campus" className="text-gray-700 hover:text-maroon">
            Campus
          </a>

          <a href="#placements" className="text-gray-700 hover:text-maroon">
            Placements
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg border border-maroon px-4 py-2 font-semibold text-maroon hover:bg-maroon hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-maroon px-4 py-2 font-semibold text-white hover:bg-maroon-dark"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
