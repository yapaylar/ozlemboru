"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fadeLeft } from "@/hooks/useInView";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <section className="relative overflow-hidden pt-[72px] h-screen">
      {/* Video arka plan */}
      <video
        src="/herovideotest1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Karartma */}
      <div className="absolute inset-0 bg-black/55" />

      {/* İçerik */}
      <div
        className="relative z-10 flex items-end"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        <div className="px-8 lg:px-20 pb-16 w-full">
          <h1
            className="font-semibold text-white uppercase leading-[1.1] tracking-wide"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)", ...fadeLeft(ready, 0) }}
          >
            Beton Boru ve<br />
            Altyapı Elemanları
          </h1>

          <p
            className="mt-6 text-white/65 leading-relaxed"
            style={{ fontSize: "1rem", ...fadeLeft(ready, 150) }}
          >
            1989&rsquo;dan bu yana Ankara&rsquo;da; ISO 9001 belgeli beton boru,
            betonarme boru, muayene bacası ve altyapı elemanları üretimi.
          </p>

          <div className="mt-8 flex flex-wrap gap-4" style={fadeLeft(ready, 300)}>
            <Link
              href="/urunler"
              className="inline-flex items-center px-6 py-2.5 text-sm font-normal text-white transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: "#023da6", borderRadius: "20px" }}
            >
              Ürünleri gör
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center px-6 py-2.5 text-sm font-normal text-white transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: "#6db0e0", borderRadius: "20px" }}
            >
              İletişime geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
