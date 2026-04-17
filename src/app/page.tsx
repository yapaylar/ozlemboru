import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import WhyConcrete from "@/components/sections/WhyConcrete";
import Certificates from "@/components/sections/Certificates";
import References from "@/components/sections/References";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <References />
        <Certificates />
        <WhyConcrete />
      </main>
      <Footer />
    </>
  );
}
