import Hero from "@/components/sections/Hero";
import SloganStrip from "@/components/sections/SloganStrip";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import WhyConcrete from "@/components/sections/WhyConcrete";
import Certificates from "@/components/sections/Certificates";
import References from "@/components/sections/References";
import { HERO_VIDEO } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <link rel="preload" href={HERO_VIDEO.src} as="video" type="video/mp4" fetchPriority="high" />
      <main className="w-full min-w-0 overflow-x-clip">
      <Hero />
      <SloganStrip />
      <About />
      <Products />
      <References />
      <Certificates />
      <WhyConcrete />
    </main>
    </>
  );
}
