import { About } from "@/components/about";
import { Ecosystem } from "@/components/ecosystem";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Privacy } from "@/components/privacy";
import { Roadmap } from "@/components/roadmap";
import { Works } from "@/components/working";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Privacy />
      <Ecosystem />
      <Works />
      <Roadmap />
      <Footer />
    </main>
  );
}
// radial-gradient(14.31% 0.77% at 51.7% 92.54%,#38E5FF 1.55%, rgb(255 255 255 / 0%) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
