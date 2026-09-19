
export default function HiringStatsSection() {
  const stats = [
    {
      value: "150+",
      label: "Top Recruiters",
    },
    {
      value: "850+",
      label: "Job Offers",
    },
    {
      value: "92%",
      label: "Placement Rate",
    },
    {
      value: "₹42 LPA",
      label: "Highest Package",
    },
  ];

  return (
    <section id="placements" className="bg-maroon px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            Career Opportunities
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Placement & Hiring
          </h2>

          <p className="mt-4 text-white/75">
            Our placement cell supports students with technical preparation,
            aptitude training, coding assessments, interviews, and recruitment
            opportunities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center"
            >
              <h3 className="text-4xl font-bold">{stat.value}</h3>

              <p className="mt-3 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
