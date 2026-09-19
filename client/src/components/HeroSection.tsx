
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-maroon px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Est. 2005 • Excellence in Education
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Your Gateway to
            <span className="block text-white/80">
              Smarter Education Decisions
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Discover quality education, industry-focused courses, experienced
            mentors, modern campus facilities, and career opportunities at
            EduReach College.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-maroon transition hover:bg-gray-100"
            >
              Explore Courses
            </a>

            <a
              href="#about"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-maroon"
            >
              Discover EduReach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

