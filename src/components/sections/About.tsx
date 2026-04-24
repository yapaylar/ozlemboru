"use client";

import Link from "next/link";
import { useInView, fadeUp } from "@/hooks/useInView";

const STAT_CARDS = [
  {
    line: "SEKTÖRDE +35 YILLIK DENEYİM",
    href: "/kurumsal",
    bg: "#023da6",
    dark: true,
  },
  {
    line: "TSE & ISO YETERLİLİK",
    href: "/kurumsal",
    bg: "#6db0e0",
    dark: true,
  },
  {
    line: "60+ REFERANS",
    href: "/bilgi/referanslar",
    bg: "#f4f6f9",
    dark: false,
  },
] as const;

/** Üst: 60+ referans, orta: TSE, alt: 35+ yıl (en geniş) */
const STAT_STACK_INDEXES = [2, 1, 0] as const;
const STAT_STACK_WIDTH = [
  "w-full lg:w-[70%] lg:mx-auto",
  "w-full lg:w-[86%] lg:mx-auto",
  "w-full",
] as const;

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section id="hakkimizda" className="section-y bg-white">
      <div ref={ref} className="container-max">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7" style={fadeUp(inView, 0)}>
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-6" style={{ color: "#888" }}>
              Kurumsal
            </p>

            <h2
              className="font-light uppercase leading-[1.08] tracking-wide"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
            >
              Kalitenin
              <br />
              Taşıyıcı Gücü
            </h2>

            <div className="mt-8 mb-8 border-t" style={{ borderColor: "#000" }} />

            <p className="font-light leading-relaxed text-base" style={{ color: "#333" }}>
              Her güçlü yapının arkasında, doğru üretilmiş altyapı elemanları ve tavizsiz bir kalite anlayışı yer
              alır. Özlem İnşaat ve Altyapı Elemanları, üretimden sevkiyata uzanan tüm süreçlerde benimsediği
              titiz yaklaşımı, belgelerle desteklenen güvenilirliği ve sektör tecrübesiyle, projelerin ihtiyaç
              duyduğu sağlamlığı ve sürekliliği en doğru biçimde karşılamaktadır.
            </p>

            <div className="mt-10">
              <Link
                href="/kurumsal"
                className="inline-flex items-center px-6 py-2.5 text-sm font-normal text-white transition-all duration-200 hover:opacity-80"
                style={{ backgroundColor: "#023da6", borderRadius: "20px" }}
              >
                Detaylı bilgi
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex flex-col gap-3">
            {STAT_STACK_INDEXES.map((cardIndex, i) => {
              const card = STAT_CARDS[cardIndex];
              return (
                <Link
                  key={cardIndex}
                  href={card.href}
                  className={`flex min-h-24 sm:min-h-28 items-center justify-center overflow-hidden px-4 py-5 sm:px-6 ${STAT_STACK_WIDTH[i]}`}
                  style={{ backgroundColor: card.bg, ...fadeUp(inView, 160 + i * 100) }}
                >
                  <p
                    className="font-light uppercase text-center text-balance leading-tight"
                    style={{
                      fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)",
                      color: card.dark ? "#fff" : "#000",
                      letterSpacing: "0.16em",
                    }}
                  >
                    {card.line}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
