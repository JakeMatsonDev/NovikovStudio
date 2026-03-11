import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Apps from "@/components/Apps";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Apps />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
