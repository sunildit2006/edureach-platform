
export default function MentorsSection() {
  const mentors = [
    {
      name: "Dr. Ananya Rao",
      role: "Professor & Academic Mentor",
      description:
        "Guides students in academic planning, research, and technical skill development.",
    },
    {
      name: "Dr. Rahul Sharma",
      role: "Industry & Career Mentor",
      description:
        "Helps students prepare for interviews, placements, and industry expectations.",
    },
    {
      name: "Prof. Priya Nair",
      role: "Technology Mentor",
      description:
        "Supports students in modern technologies, projects, and innovation.",
    },
    {
      name: "Prof. Arjun Kumar",
      role: "Student Development Mentor",
      description:
        "Encourages leadership, communication, teamwork, and professional growth.",
    },
  ];

  return (
    <section id="mentors" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-maroon">
            Our Mentors
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Learn From Experienced Mentors
          </h2>

          <p className="mt-4 text-gray-600">
            Get guidance from experienced educators and professionals
            throughout your academic and career journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-maroon text-2xl font-bold text-white">
                {mentor.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(-2)
                  .join("")}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {mentor.name}
              </h3>

              <p className="mt-2 font-semibold text-maroon">
                {mentor.role}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {mentor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
