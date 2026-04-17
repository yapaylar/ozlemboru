import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export const metadata: Metadata = {
  title: "Ürünlerimiz | Özlem Beton Boru",
  description:
    "Beton boru, betonarme boru, muayene bacası, parsel bacası, yağmur suyu ızgara elemanları ve betonarme su depoları — TSE & ISO belgeli üretim.",
};

export default function UrunlerPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── PAGE HEADER ─────────────────────────────────────────── */}
        <section
          className="bg-white border-b"
          style={{ paddingTop: "calc(80px + 56px)", paddingBottom: "56px", borderColor: "#e8e8e8" }}
        >
          <div className="container-max">
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#bbb" }}>
              Anasayfa / Ürünlerimiz
            </p>
            <h1
              className="font-light uppercase tracking-wide leading-none"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#000" }}
            >
              Ürün Kataloğu
            </h1>
          </div>
        </section>

        {/* ── CATEGORY GRID ────────────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Katalog
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#000" }}
                >
                  Ürün Kategorileri
                </h2>
              </div>
              <p className="hidden sm:block text-sm font-light" style={{ color: "#888" }}>
                {PRODUCT_CATEGORIES.length} kategori · TSE &amp; ISO belgeli
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t" style={{ borderColor: "#e8e8e8" }}>
              {PRODUCT_CATEGORIES.map((cat, i) => (
                <Link
                  key={cat.id}
                  href={`/urunler/${cat.id}`}
                  className="group relative bg-white flex flex-col overflow-hidden border-r border-b"
                  style={{ borderColor: "#e8e8e8" }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-white">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Number watermark */}
                    <span
                      className="absolute bottom-3 right-4 text-6xl font-bold leading-none select-none pointer-events-none"
                      style={{ color: "rgba(0,0,0,0.04)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 gap-3 border-t" style={{ borderColor: "#f0f0f0" }}>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-medium uppercase tracking-wide text-sm leading-snug" style={{ color: "#000" }}>
                        {cat.title}
                      </h3>
                      {cat.standard && (
                        <span
                          className="text-[10px] font-light uppercase tracking-[0.12em] px-2 py-0.5 border shrink-0"
                          style={{ borderColor: "#ddd", color: "#999" }}
                        >
                          {cat.standard}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
                      {cat.description}
                    </p>
                    <div className="mt-auto pt-3 flex items-center gap-2 text-xs font-light uppercase tracking-widest transition-opacity group-hover:opacity-60" style={{ color: "#000" }}>
                      İncele
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="section-y" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Teknik Destek
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide mb-6"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#000" }}
                >
                  Projenize Uygun<br />Ürünü Bulalım
                </h2>
                <p className="text-base font-light leading-relaxed" style={{ color: "#555" }}>
                  Çap aralığı, standart ve teknik şartnameye göre doğru ürünü seçmekte
                  yardımcı olabiliriz. Uzman ekibimizle iletişime geçin.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-3 font-light uppercase tracking-widest px-8 py-4 text-sm text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "#000" }}
                >
                  İletişime Geç
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/bilgi/teknik-sartnameler"
                  className="inline-flex items-center justify-center gap-3 font-light uppercase tracking-widest px-8 py-4 text-sm border transition-colors hover:bg-black hover:text-white hover:border-black"
                  style={{ borderColor: "#000", color: "#000" }}
                >
                  Teknik Şartname
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
