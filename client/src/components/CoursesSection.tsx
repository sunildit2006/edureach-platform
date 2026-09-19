
export default function CoursesSection() {
  const courses = [
    {
      title: "B.Tech",
      description:
        "Build strong technical foundations with industry-focused undergraduate engineering programs.",
      programs: [
        "Computer Science and Engineering",
        "Information Technology",
        "Electronics and Communication Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Artificial Intelligence and Data Science",
      ],
    },
    {
      title: "M.Tech",
      description:
        "Advance your technical expertise through specialized postgraduate engineering programs.",
      programs: [
        "Computer Science and Engineering",
        "Artificial Intelligence",
        "Data Science",
      ],
    },
    {
      title: "MBA",
      description:
        "Develop leadership, business, and management skills for a competitive professional career.",
      programs: [
        "Business Management",
        "Finance",
        "Marketing",
      ],
    },
  ];

  return (
    <section id="courses" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-maroon">
            Academic Programs
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Our Courses
          </h2>

          <p className="mt-4 text-gray-600">
            Choose programs designed to develop technical knowledge,
            professional skills, and career readiness.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-2xl border border-gray-200 bg-cream p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-maroon text-xl font-bold text-white">
                {course.title.charAt(0)}
              </div>

              <h3 className="text-3xl font-bold text-maroon">
                {course.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {course.description}
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900">
                  Programs
                </h4>

                <ul className="mt-3 space-y-2">
                  {course.programs.map((program) => (
                    <li
                      key={program}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon" />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
