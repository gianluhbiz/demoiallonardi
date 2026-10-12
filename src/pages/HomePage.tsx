import Bottega from "../components/home/Bottega";
import FinalCta from "../components/home/FinalCta";
import Hero from "../components/home/Hero";
import Kitchen from "../components/home/Kitchen";
import Process from "../components/home/Process";
import Reviews from "../components/home/Reviews";
import Story, { MarqueeBand } from "../components/home/Story";
import Visit from "../components/home/Visit";
import { useHashScroll } from "../hooks/useHashScroll";

export default function HomePage() {
  useHashScroll();
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Story />
      <Process />
      <Bottega />
      <Kitchen />
      <Reviews />
      <Visit />
      <FinalCta />
    </>
  );
}
