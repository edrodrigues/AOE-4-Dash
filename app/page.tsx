import Hero from "@/components/Hero";
import Leaderboard from "@/components/Leaderboard";
import MatchHistory from "@/components/MatchHistory";
import AddMatchForm from "@/components/AddMatchForm";
import Navigation from "@/components/Navigation";
import PointsExplanation from "@/components/PointsExplanation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Leaderboard />
        <MatchHistory />
        <AddMatchForm />
      </main>
      <PointsExplanation />
      <Footer />
    </>
  );
}
