import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Galeri | Gülüm Özlemborun",
  description:
    "Şantiye fotoğrafları, üretim süreci görselleri ve tamamlanmış proje fotoğrafları.",
};

export default function GaleriPage() {
  return (
    <main>
      <section
        style={{
          paddingTop: "calc(80px + 56px)",
          paddingBottom: "56px",
          borderBottom: "1px solid #e8e8e8",
          backgroundColor: "#fff",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-3 flex items-center gap-2 text-xs font-light uppercase tracking-widest" style={{ color: "#bbb" }}>
            <Link href="/bilgi" className="hover:text-black transition-colors">Bilgi Merkezi</Link>
            <span>/</span>
            <span style={{ color: "#555" }}>Galeri</span>
          </div>
          <h1
            className="font-light uppercase tracking-widest"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#000" }}
          >
            Galeri
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24">
        <div
          className="flex flex-col items-center justify-center text-center py-24 border"
          style={{ borderColor: "#e8e8e8" }}
        >
          <div
            className="w-10 h-px mb-10"
            style={{ backgroundColor: "#000" }}
          />
          <p
            className="font-light uppercase tracking-widest text-xs mb-3"
            style={{ color: "#bbb" }}
          >
            Yakında
          </p>
          <h2
            className="font-light"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "#000" }}
          >
            Fotoğraflar hazırlanıyor
          </h2>
          <p
            className="mt-4 text-sm font-light max-w-sm leading-relaxed"
            style={{ color: "#888" }}
          >
            Şantiye görselleri, üretim süreci ve tamamlanmış projelerimizin
            fotoğrafları yakında burada.
          </p>
          <Link
            href="/bilgi"
            className="mt-10 inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest border px-6 py-3 transition-all hover:bg-black hover:text-white"
            style={{ borderColor: "#000", color: "#000" }}
          >
            Bilgi Merkezine Dön
          </Link>
        </div>
      </section>
    </main>
  );
}
