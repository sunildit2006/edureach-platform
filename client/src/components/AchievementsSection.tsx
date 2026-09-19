
export default function AchievementsSection() {
  const achievements = [
    {
      value: "92%",
      title: "Placement Rate",
      description: "Students placed through our career support programs.",
    },
    {
      value: "₹42 LPA",
      title: "Highest Package",
      description: "Top annual package achieved by our students.",
    },
    {
      value: "150+",
      title: "Companies",
      description: "Companies participating in our recruitment drives.",
    },
    {
      value: "850+",
      title: "Offers",
      description: "Career opportunities offered to our students.",
    },
  ];

  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-maroon">
            Our Achievements
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Numbers That Reflect Our Journey
          </h2>

          <p className="mt-4 text-gray-600">
            Our academic and career initiatives continue to create valuable
            opportunities for students.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-4xl font-bold text-maroon">
                {achievement.value}
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-gray-900">
                {achievement.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
