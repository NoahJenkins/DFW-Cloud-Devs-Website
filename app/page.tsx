import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import Community from "./components/Community";
import Events from "./components/Events";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Hero />
        <About />
        <WhatWeDo />
        <Community />
        <Events />
        <Connect />
      </div>
      <Footer />
    </main>
  );
}
