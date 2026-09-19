
export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-maroon">
              About EduReach
            </p>

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Building Futures Through Education
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              EduReach College is an engineering institution focused on
              technical education, innovation, and career development. We
              provide students with a supportive learning environment,
              industry-focused programs, experienced mentors, and modern
              campus facilities.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our goal is to help students make smarter education decisions
              and prepare them for successful careers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-cream p-6 text-center">
              <h3 className="text-3xl font-bold text-maroon">92%</h3>
              <p className="mt-2 text-gray-600">Placement Rate</p>
            </div>

            <div className="rounded-2xl bg-cream p-6 text-center">
              <h3 className="text-3xl font-bold text-maroon">₹42 LPA</h3>
              <p className="mt-2 text-gray-600">Highest Package</p>
            </div>

            <div className="rounded-2xl bg-cream p-6 text-center">
              <h3 className="text-3xl font-bold text-maroon">150+</h3>
              <p className="mt-2 text-gray-600">Recruiters</p>
            </div>

            <div className="rounded-2xl bg-cream p-6 text-center">
              <h3 className="text-3xl font-bold text-maroon">850+</h3>
              <p className="mt-2 text-gray-600">Offers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
