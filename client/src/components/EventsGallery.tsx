export default function EventsGallery() {
  const events = [
    {
      title: "Technical Workshops",
      description: "Hands-on sessions with industry experts and mentors.",
    },
    {
      title: "Cultural Events",
      description: "Celebrations that bring the student community together.",
    },
    {
      title: "Hackathons",
      description: "Build innovative solutions and showcase your skills.",
    },
    {
      title: "Career Events",
      description: "Connect with recruiters and explore career opportunities.",
    },
  ];

  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-maroon">
            Events
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Campus Events
          </h2>

          <p className="mt-4 text-gray-600">
            Participate in events that help you learn, collaborate, and grow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-maroon text-xl font-bold text-white">
                {event.title.charAt(0)}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {event.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}