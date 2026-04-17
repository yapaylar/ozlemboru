import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Özlem İnşaat",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "calc(100vh - 80px)", paddingTop: "80px" }}
      >
        <span
          className="font-light"
          style={{ fontSize: "clamp(5rem, 15vw, 10rem)", color: "#e8e8e8", lineHeight: 1 }}
        >
          404
        </span>
        <h1
          className="mt-4 font-light uppercase tracking-widest"
          style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#000" }}
        >
          Sayfa Bulunamadı
        </h1>
        <p
          className="mt-4 text-sm font-light max-w-xs leading-relaxed"
          style={{ color: "#888" }}
        >
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest border px-6 py-3 transition-all hover:bg-black hover:text-white"
            style={{ borderColor: "#000", color: "#000" }}
          >
            Anasayfaya Dön
          </Link>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest border px-6 py-3 transition-all hover:bg-black hover:text-white"
            style={{ borderColor: "#000", color: "#000" }}
          >
            Ürünleri Gör
          </Link>
        </div>
      </section>
    </main>
  );
}
