import Hero from "@/components/Hero";
import Leaderboard from "@/components/Leaderboard";
import MatchHistory from "@/components/MatchHistory";
import AddMatchForm from "@/components/AddMatchForm";
import Navigation from "@/components/Navigation";

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
    </>
  );
}
