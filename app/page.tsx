import {
  About,
  Ecosystem,
  Footer,
  Hero,
  Privacy,
  Roadmap,
  Works,
} from "@/components";

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
