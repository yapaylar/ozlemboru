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
        <div className="container-max w-full pb-16 sm:pb-20">
          <h1
            className="max-w-3xl text-balance font-light text-white [font-size:var(--type-hero)] leading-[1.12] tracking-[-0.02em] sm:tracking-[-0.01em]"
            style={fadeLeft(ready, 0)}
          >
            Beton boru ve altyapı elemanları üretimi
          </h1>

          <p
            className="mt-6 max-w-2xl text-balance text-base leading-[1.65] text-white/70 sm:text-[1.05rem] sm:leading-[1.7]"
            style={fadeLeft(ready, 150)}
          >
            Ankara&rsquo;da beton boru, betonarme boru ve altyapı elemanları
            üretiyor; 1989&rsquo;dan bu yana projelere güvenilir çözümler
            sunuyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 sm:mt-10 sm:gap-4" style={fadeLeft(ready, 300)}>
            <Link href="/urunler" className="btn-cta btn-cta--primary">
              Ürünleri gör
            </Link>
            <Link href="/iletisim" className="btn-cta btn-cta--soft">
              İletişime geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
