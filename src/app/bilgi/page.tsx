import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Bilgi Merkezi | Özlem Beton Boru",
  description:
    "Teknik şartnameler, sevkiyat bilgileri, referanslar, galeri ve blog içerikleri.",
};

const SECTIONS = [
  {
    no: "01",
    title: "Teknik Şartnameler",
    description:
      "Beton boru ve altyapı elemanlarına ait çap, et kalınlığı, uzunluk ve tepe yük dayanımı tabloları.",
    href: "/bilgi/teknik-sartnameler",
    tag: "Ürün Verileri",
  },
  {
    no: "02",
    title: "Sevkiyat Bilgileri",
    description:
      "Teslimat bölgeleri, lojistik süreçler, yükleme standartları ve sipariş koşulları hakkında bilgi.",
    href: "/bilgi/sevkiyat-bilgileri",
    tag: "Lojistik",
  },
  {
    no: "03",
    title: "Referanslar",
    description:
      "1989'dan bu yana kamu kurumları ve özel sektörde tamamlanan 60'ı aşkın referans projemiz.",
    href: "/bilgi/referanslar",
    tag: "Projeler",
  },
  {
    no: "04",
    title: "Blog",
    description:
      "Altyapı sektörüne dair teknik makaleler, sektör haberleri ve Özlem İnşaat'tan güncellemeler.",
    href: "/bilgi/blog",
    tag: "İçerik",
  },
  {
    no: "05",
    title: "Galeri",
    description:
      "Üretim tesisimiz, ürünlerimiz ve tamamlanan projelerden fotoğraflar.",
    href: "/bilgi/galeri",
    tag: "Görsel",
  },
];

export default function BilgiPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── PAGE HEADER ─────────────────────────────────────────── */}
        <section
          className="relative pt-[80px]"
          style={{ backgroundColor: "#0a0a0a", minHeight: "280px" }}
        >
          <div
            className="relative z-10 flex items-end container-max pb-14"
            style={{ minHeight: "calc(280px - 80px)" }}
          >
            <div>
              <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Anasayfa / Bilgi
              </p>
              <h1
                className="font-light uppercase tracking-wide text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Bilgi Merkezi
              </h1>
            </div>
          </div>
        </section>

        {/* ── SECTIONS LIST ────────────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  İçerik
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
                >
                  Neler Bulursunuz?
                </h2>
              </div>
            </div>

            <div className="space-y-0">
              {SECTIONS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-center gap-6 py-7 border-b transition-colors hover:bg-[#f7f7f7] -mx-4 px-4"
                  style={{ borderColor: "#e8e8e8" }}
                >
                  <span className="text-xs font-light shrink-0 w-6 text-right hidden sm:block" style={{ color: "#bbb" }}>
                    {s.no}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="font-medium uppercase tracking-wide text-sm" style={{ color: "#000" }}>
                        {s.title}
                      </h3>
                      <span
                        className="text-[10px] font-light uppercase tracking-[0.15em] px-2 py-0.5 border hidden sm:inline"
                        style={{ borderColor: "#ddd", color: "#999" }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
                      {s.description}
                    </p>
                  </div>

                  <svg
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M1 8h14M8 2l6 6-6 6" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
