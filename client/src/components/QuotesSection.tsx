
export default function QuotesSection() {
  const quotes = [
    {
      quote:
        "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
    },
    {
      quote:
        "The beautiful thing about learning is that nobody can take it away from you.",
      author: "B. B. King",
    },
    {
      quote:
        "An investment in knowledge pays the best interest.",
      author: "Benjamin Franklin",
    },
  ];

  return (
    <section className="bg-maroon px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            Inspiration
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Words That Inspire
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((item) => (
            <div
              key={item.author}
              className="rounded-2xl border border-white/20 bg-white/10 p-8"
            >
              <div className="mb-5 text-5xl text-white/60">“</div>

              <p className="text-lg leading-8 text-white/90">
                {item.quote}
              </p>

              <p className="mt-6 font-semibold text-white">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
