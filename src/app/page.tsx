import Hero from "@/components/sections/Hero";
import SloganStrip from "@/components/sections/SloganStrip";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import WhyConcrete from "@/components/sections/WhyConcrete";
import Certificates from "@/components/sections/Certificates";
import References from "@/components/sections/References";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SloganStrip />
      <About />
      <Products />
      <References />
      <Certificates />
      <WhyConcrete />
    </main>
  );
}
