"use client";

import Link from "next/link";
import { useInView, fadeUp } from "@/hooks/useInView";

const STAT_CARDS = [
  {
    line: "Sektörde 35+ yıllık deneyim",
    href: "/kurumsal",
    bg: "#023da6",
    dark: true,
  },
  {
    line: "TSE ve ISO yeterlilik",
    href: "/kurumsal",
    bg: "#6db0e0",
    dark: true,
  },
  {
    line: "60+ referans",
    href: "/bilgi/referanslar",
    bg: "#f4f6fa",
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
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7" style={fadeUp(inView, 0)}>
            <p className="section-eyebrow">Kurumsal</p>

            <h2 className="section-h2 max-w-xl">
              <span className="block">Beton boru ve altyapı elemanlarında</span>
              <span className="mt-1.5 block sm:mt-2">güvenilir üretim gücü</span>
            </h2>

            <div className="mb-7 mt-7 max-w-sm border-t border-zinc-200" />

            <p className="section-body leading-[1.75]">
              Her güçlü yapının arkasında, doğru üretilmiş altyapı elemanları ve tavizsiz bir kalite anlayışı
              yer alır. Özlem İnşaat ve Altyapı Elemanları, üretimden sevkiyata uzanan tüm süreçlerde
              benimsediği titiz yaklaşımı, belgelerle desteklenen güvenilirliği ve sektör tecrübesiyle,
              projelerin ihtiyaç duyduğu sağlamlığı ve sürekliliği en doğru biçimde karşılamaktadır.
            </p>

            <div className="mt-10">
              <Link href="/kurumsal" className="btn-cta btn-cta--primary">
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
                  className={`flex min-h-[5.5rem] items-center justify-center overflow-hidden px-4 py-5 sm:min-h-28 sm:px-6 ${STAT_STACK_WIDTH[i]}`}
                  style={{ backgroundColor: card.bg, ...fadeUp(inView, 160 + i * 100) }}
                >
                  <p
                    className={`px-1 text-center text-balance text-[0.75rem] font-light leading-snug tracking-[-0.01em] sm:text-[0.85rem] ${
                      card.dark ? "text-white/95" : "text-zinc-800"
                    }`}
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
