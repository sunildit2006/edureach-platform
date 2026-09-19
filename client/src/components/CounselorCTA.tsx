import { PhoneCall } from "lucide-react";

interface CounselorCTAProps {
  onOpenCall: () => void;
}

export default function CounselorCTA({
  onOpenCall,
}: CounselorCTAProps) {
  return (
    <section className="bg-maroon px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
          AI Counselor
        </p>

        <h2 className="text-3xl font-bold md:text-5xl">
          Need Help Choosing the Right Course?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Get personalized guidance about courses, admissions, fees,
          scholarships, and career paths.
        </p>

        <button
          onClick={onOpenCall}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-maroon transition hover:bg-amber-300"
        >
          <PhoneCall className="h-5 w-5" />
          Talk to Counsellor
        </button>
      </div>
    </section>
  );
}