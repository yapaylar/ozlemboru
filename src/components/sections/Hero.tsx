"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  { src: "/images/hero-bg-1.jpg", alt: "Özlem İnşaat Beton Boru Üretim Tesisi" },
  { src: "/images/hero-bg-2.jpg", alt: "Beton Boru ve Altyapı Elemanları Üretimi" },
  { src: "/images/hero-bg-3.jpg", alt: "Özlem İnşaat - Ankara Beton Boru Üreticisi" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setCurrent((i) => (i + 1) % SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-[80px]"
        style={{ minHeight: "700px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Slide images */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div
          className="relative z-10 flex items-end"
          style={{ minHeight: "calc(700px - 80px)" }}
        >
          <div className="px-8 lg:px-20 pb-16 w-full">
            <h1
              className="font-semibold text-white uppercase leading-[1.1] tracking-wide"
              style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)" }}
            >
              Beton Boru ve<br />
              Altyapı Elemanları
            </h1>

            <p
              className="mt-6 text-white/65 leading-relaxed"
              style={{ fontSize: "1rem" }}
            >
              1989&rsquo;dan bu yana Ankara&rsquo;da; ISO 9001 belgeli beton boru,
              betonarme boru, muayene bacası ve altyapı elemanları üretimi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/urunler"
                className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-7 py-3.5 text-sm text-black transition-all duration-200 hover:opacity-80"
                style={{ backgroundColor: "#ffffff" }}
              >
                Ürünleri Gör
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-7 py-3.5 text-sm transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-8 lg:left-20 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "#000000" : "rgba(255,255,255,0.45)",
              }}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>

        {/* ── LEFT ARROW ── triangle points RIGHT (rounded tip), arrow points LEFT */}
        <button
          onClick={prev}
          aria-label="Önceki"
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <div style={{ position: "relative", width: 46, height: 72 }}>
            <svg width="46" height="72" viewBox="0 0 46 72" fill="none">
              <path d="M0,0 L0,72 L39,42 Q47,36 39,30 L0,0 Z" fill="#ffffff" />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", paddingLeft: "6px" }}>
              <ChevronLeftIcon />
            </div>
          </div>
        </button>

        {/* ── RIGHT ARROW ── triangle points LEFT (rounded tip), arrow points RIGHT */}
        <button
          onClick={next}
          aria-label="Sonraki"
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <div style={{ position: "relative", width: 46, height: 72 }}>
            <svg width="46" height="72" viewBox="0 0 46 72" fill="none">
              <path d="M46,0 L46,72 L7,42 Q-1,36 7,30 L46,0 Z" fill="#ffffff" />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "6px" }}>
              <ChevronRightIcon />
            </div>
          </div>
        </button>
      </section>

      {/* Slogan strip */}
      <div className="bg-white py-16">
        <div className="container-max">
          <p className="text-sm sm:text-base font-light tracking-[0.12em] text-center" style={{ color: "#000000" }}>
            Güçlü şehirlerin güçlü alt yapılara ihtiyacı vardır. Biz bunun için varız.
          </p>
        </div>
      </div>

      {/* ── QUICK QUOTE STRIP ───────────────────────────────────── */}
      <div className="border-y" style={{ backgroundColor: "#f7f7f7", borderColor: "#000000" }}>
        <div
          className="container-max py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Icon + Text */}
          <div className="flex items-center gap-5">
            <SemiTruckIcon className="w-14 h-10 shrink-0" />
            <div>
              <p className="font-medium text-base leading-snug" style={{ color: "#000000" }}>
                Fiyat teklifinizi hemen öğrenmek için ürünleri sepete ekleyin
              </p>
              <p className="text-sm font-light mt-1 leading-relaxed" style={{ color: "#555" }}>
                Projenize uygun ürünleri seçin, miktarları belirleyin ve fiyatınızı hızlı bir şekilde alın.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="flex-shrink-0">
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2.5 font-light uppercase tracking-widest px-7 py-3.5 text-sm text-white transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: "#000000" }}
            >
              Teklifi Gör
              <BasketIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function BasketIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#000" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#000" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SemiTruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 40"
      fill="none"
      stroke="#000"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Trailer */}
      <rect x="1" y="4" width="36" height="22" rx="1" />
      {/* Cab */}
      <path d="M37 10 h8 l6 8 v8 H37 V10z" />
      {/* Windshield */}
      <path d="M38.5 11.5 h5.5 l4 6 H38.5 V11.5z" fill="#000" fillOpacity="0.06" stroke="none" />
      <path d="M38.5 11.5 h5.5 l4 6 H38.5 V11.5z" />
      {/* Trailer wheels */}
      <circle cx="12" cy="30" r="4" />
      <circle cx="12" cy="30" r="1.5" fill="#000" stroke="none" />
      <circle cx="24" cy="30" r="4" />
      <circle cx="24" cy="30" r="1.5" fill="#000" stroke="none" />
      {/* Cab wheels */}
      <circle cx="48" cy="30" r="4" />
      <circle cx="48" cy="30" r="1.5" fill="#000" stroke="none" />
      {/* Undercarriage */}
      <line x1="1" y1="26" x2="51" y2="26" />
      {/* Fifth wheel / coupling */}
      <line x1="37" y1="22" x2="37" y2="26" />
    </svg>
  );
}
