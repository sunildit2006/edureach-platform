
import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon">
                <GraduationCap size={22} />
              </div>

              <span className="text-2xl font-bold">EduReach</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Your Gateway to Smarter Education Decisions. Empowering students
              through quality education, mentorship, and career opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <div className="mt-5 space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-white">
                About
              </a>

              <a
                href="#courses"
                className="block text-gray-400 hover:text-white"
              >
                Courses
              </a>

              <a
                href="#mentors"
                className="block text-gray-400 hover:text-white"
              >
                Mentors
              </a>

              <a
                href="#campus"
                className="block text-gray-400 hover:text-white"
              >
                Campus
              </a>

              <a
                href="#placements"
                className="block text-gray-400 hover:text-white"
              >
                Placements
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Admissions</h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/signup"
                className="block text-gray-400 hover:text-white"
              >
                Create Account
              </Link>

              <Link
                to="/login"
                className="block text-gray-400 hover:text-white"
              >
                Student Login
              </Link>

              <a
                href="#courses"
                className="block text-gray-400 hover:text-white"
              >
                Explore Courses
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-5 space-y-4 text-gray-400">
              <p className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0" />
                <span>admissions@edureach.edu</span>
              </p>

              <p className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0" />
                <span>+91 98765 43210</span>
              </p>

              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span>EduReach College, Hyderabad, India</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduReach College. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
