import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import QuotesSection from "../components/QuotesSection";
import MentorsSection from "../components/MentorsSection";
import StudentLifeSection from "../components/StudentLifeSection";
import EventsGallery from "../components/EventsGallery";
import CounselorCTA from "../components/CounselorCTA";
import HiringStatsSection from "../components/HiringStatsSection";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import SignupPopup from "../components/SignupPopup";
import CallPopup from "../components/CallPopup";

export default function HomePage() {
  const { user } = useAuth();

  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  return (
    <main className="min-h-screen bg-cream">
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <CoursesSection />
      <QuotesSection />
      <MentorsSection />

      {user ? (
        <>
          <StudentLifeSection />
          <EventsGallery />
          <CounselorCTA
            onOpenCall={() => setShowCallPopup(true)}
          />
          <HiringStatsSection />
          <Footer />
        </>
      ) : (
        <>
          <section className="bg-cream px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Want to See More?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Sign up to explore campus life, events, placement statistics,
              and talk to our AI counselor.
            </p>

            <button
              onClick={() => setShowSignupPopup(true)}
              className="mt-8 rounded-lg bg-maroon px-8 py-3 font-semibold text-white"
            >
              Sign Up to Unlock
            </button>
          </section>

          <Footer />
        </>
      )}

      <SignupPopup
        show={showSignupPopup}
        onClose={() => setShowSignupPopup(false)}
      />

      <CallPopup
        open={showCallPopup}
        onClose={() => setShowCallPopup(false)}
      />

      <Chatbot />
    </main>
  );
}