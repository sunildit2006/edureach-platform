
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import QuotesSection from "../components/QuotesSection";
import MentorsSection from "../components/MentorsSection";
import StudentLifeSection from "../components/StudentLifeSection";
import HiringStatsSection from "../components/HiringStatsSection";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <CoursesSection />
      <QuotesSection />
      <MentorsSection />
      <StudentLifeSection />
      <HiringStatsSection />
      <Footer />
      <Chatbot />
    </main>
  );
}