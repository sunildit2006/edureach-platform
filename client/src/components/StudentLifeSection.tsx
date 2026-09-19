
export default function StudentLifeSection() {
  const features = [
    {
      title: "Digital Classrooms",
      description:
        "Modern learning spaces supported by digital teaching technology.",
    },
    {
      title: "Computer Laboratories",
      description:
        "Well-equipped labs for practical learning, coding, and projects.",
    },
    {
      title: "Library",
      description:
        "A learning environment with resources for academic and professional development.",
    },
    {
      title: "Seminar Halls",
      description:
        "Dedicated spaces for seminars, workshops, presentations, and events.",
    },
    {
      title: "Sports Facilities",
      description:
        "Facilities that encourage students to maintain an active and balanced lifestyle.",
    },
    {
      title: "Student Activity Centers",
      description:
        "Spaces for clubs, activities, collaboration, creativity, and student engagement.",
    },
  ];

  return (
    <section id="campus" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-maroon">
            Campus Life
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Experience Life at EduReach
          </h2>

          <p className="mt-4 text-gray-600">
            Explore facilities designed to support learning, collaboration,
            creativity, and student development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-cream p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-maroon text-xl font-bold text-white">
                {feature.title.charAt(0)}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
