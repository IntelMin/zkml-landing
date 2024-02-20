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
