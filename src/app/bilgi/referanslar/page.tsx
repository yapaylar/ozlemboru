import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Referanslar | Özlem Beton Boru",
  description:
    "1989'dan bu yana İller Bankası, ASKİ, TOKİ ve 60'ı aşkın kamu ve özel sektör kuruluşuyla tamamlanan referans projelerimiz.",
};

const LOGOS = [1, 2, 3, 4, 5, 6, 7];

const GROUPS = [
  {
    title: "Kamu Kurumları ve Bankalar",
    tag: "Kamu",
    refs: [
      "İller Bankası Genel Müdürlüğü",
      "İller Bankası Ankara Bölge Müdürlüğü",
      "İller Bankası Kastamonu Bölge Müdürlüğü",
      "İller Bankası Eskişehir Bölge Müdürlüğü",
      "İller Bankası Konya Bölge Müdürlüğü",
      "İller Bankası Samsun Bölge Müdürlüğü",
      "ASKİ Genel Müdürlüğü",
      "ASKİ Kanal Yatırım Dairesi Başkanlığı",
    ],
  },
  {
    title: "Belediyeler",
    tag: "Yerel Yönetim",
    refs: [
      "Eflanı Belediye Başkanlığı",
      "Mengen Belediye Başkanlığı",
      "Çerkeş Belediye Başkanlığı",
      "Şabanozu Belediye Başkanlığı",
      "Gölbaşı Belediye Başkanlığı",
      "Sungurlu Belediye Başkanlığı",
      "Emirdağ Belediye Başkanlığı",
    ],
  },
  {
    title: "TOKİ ve Konut Projeleri",
    tag: "Konut",
    refs: [
      "Özkar İnşaat A.Ş. (TOKİ — Ankara / Rize / Van)",
      "Akay İnşaat A.Ş. (TOKİ — Ankara / Kütahya / Van)",
      "Başyapı İnşaat (TOKİ — Çankırı / Karabük / Eskişehir)",
      "Türkerler İnşaat (TOKİ — Kuzey Ankara)",
      "Öz Doğuz İnşaat (TOKİ — Kuzey Ankara)",
      "Can İnşaat (TOKİ — Kuzey Ankara)",
      "S.S. Saraykent Yapı Koop / Kazan Sanayi Bölgesi",
      "S.S. Koop18 Yapı Koop (Angora Evleri)",
    ],
  },
  {
    title: "Altyapı ve Kanalizasyon İnşaatları",
    tag: "Altyapı",
    refs: [
      "Ateşler İnşaat / Mamak AS-YS. Yapım İşi",
      "Ateş İnşaat",
      "MRM-Maksu İş Ortaklığı / Keçiören AS-YS. Yapım İşi",
      "Alken-Miracyol İş Ortaklığı / Mahalle Kanalizasyon Bakım Onarım İşi",
      "Yasmak-Koza İş Ortaklığı / Sincan AS-YS. Yapım İşi",
      "Alptekin İnşaat / OSB İnşaatı",
      "Güvenç Yapı / Bolu-Bartın-Turgutlu DSB / Taşova Kanalizasyon İnşaatı",
      "Mimaray İnşaat / Kilimli (Zonguldak) Kanalizasyon İnşaatı",
      "Fetvacı Kardeşler / Çerkeş (Çankırı) Kanalizasyon İnşaatı",
      "Sürekli İnşaat / Şabanozu (Çankırı) Kanalizasyon İnşaatı",
      "Sürekli İnşaat / Kandil-Kolukisa (Konya) Kanalizasyon İnşaatı",
      "Mehmet Baki Duvan / Perşembe (Zonguldak) Kanalizasyon İnşaatı",
      "Mehmet Baki Duvan / Gökçesu (Bolu) Kanalizasyon İnşaatı",
      "Nuri Akgül İnşaat / Sulakyurt (Kırıkkale) Kanalizasyon İnşaatı",
      "Dağdemir İnşaat / Çeltikçi Kanalizasyon İnşaatı",
      "Mehmet Gülşen İnşaat / Eskipazar (Karabük) Kanalizasyon İnşaatı",
      "Ercan Eker İnşaat / Azdavay (Kastamonu) Kanalizasyon İnşaatı",
      "Esen İnşaat / Taşköprü (Kastamonu) Atıksu Arıtma Tesisi İnşaatı",
      "Hasan Yüksel İnşaat / Pazarköy (Mengen) Kanalizasyon İnşaatı",
      "HBV İnşaat / Balçikhisar (Haymana) Kanalizasyon İnşaatı",
      "Gayem İnşaat / Çerkeş OSB İnşaatı",
    ],
  },
  {
    title: "Özel Sektör Firmaları",
    tag: "Özel Sektör",
    refs: [
      "Özdoğanlar İnşaat",
      "MSK Grup Yatırım A.Ş.",
      "Nata Holding",
      "YDA İnşaat / Nevbahar Avenue, İncek Altyapı İnşaatı",
      "Ahmet Aydeniz İnşaat",
      "Aras Kardeşler",
      "Besa İnşaat A.Ş.",
      "BM Holding (Jokey Kulübü İnşaatı)",
      "Bilir İnşaat",
      "Ekşioğlu İnşaat",
      "Menka Mühendislik",
      "MFZ Gözde Yapı / Gözüm İnşaat",
      "Varyap Varlıbaşlılar (Ankara Şantiyeleri)",
      "Yapı Proje A.Ş.",
      "Tepe İnşaat / Bilkent İnşaatı Konya Yolu İnşaatı",
      "Uçural A.Ş.",
      "Sentez İnşaat",
      "Bir İnşaat A.Ş.",
    ],
  },
];

const STATS = [
  { value: "35+", label: "Yıl Deneyim" },
  { value: "63+", label: "Referans" },
  { value: "20+", label: "İl" },
  { value: "8",   label: "Kamu Kurumu" },
];

export default function ReferanslarPage() {
  const total = GROUPS.reduce((acc, g) => acc + g.refs.length, 0);

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
                Anasayfa / Bilgi / Referanslar
              </p>
              <h1
                className="font-light uppercase tracking-wide text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Referanslarımız
              </h1>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ─────────────────────────────────────────── */}
        <div style={{ backgroundColor: "#f7f7f7", borderBottom: "1px solid #e8e8e8" }}>
          <div className="container-max">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#e8e8e8]">
              {STATS.map((s) => (
                <div key={s.label} className="py-7 px-6 text-center">
                  <p
                    className="font-light leading-none mb-2"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#000" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs font-light uppercase tracking-[0.15em]" style={{ color: "#888" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── LOGOS ────────────────────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-10 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Kurum ve Kuruluşlar
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#000" }}
                >
                  Birlikte Çalıştıklarımız
                </h2>
              </div>
              <p className="hidden sm:block text-sm font-light text-right" style={{ color: "#888" }}>
                {total} referans proje
              </p>
            </div>

            {/* Logo grid */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-px mb-16" style={{ backgroundColor: "#000" }}>
              {LOGOS.map((n) => (
                <div
                  key={n}
                  className="aspect-square bg-white flex items-center justify-center p-5"
                >
                  <Image
                    src={`/images/references/${n}.png`}
                    alt={`Referans Kurum ${n}`}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* ── GROUPED REFERENCE LIST ─────────────────────────── */}
            <div className="space-y-14">
              {GROUPS.map((group) => (
                <div key={group.title}>

                  {/* Group header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span
                      className="text-[10px] font-light uppercase tracking-[0.18em] px-2.5 py-1 border shrink-0"
                      style={{ borderColor: "#000", color: "#000" }}
                    >
                      {group.tag}
                    </span>
                    <h3 className="text-sm font-medium uppercase tracking-wide" style={{ color: "#000" }}>
                      {group.title}
                    </h3>
                    <div className="flex-1 border-t" style={{ borderColor: "#e8e8e8" }} />
                    <span className="text-xs font-light shrink-0" style={{ color: "#bbb" }}>
                      {group.refs.length}
                    </span>
                  </div>

                  {/* Reference items — 2 column grid */}
                  <div className="grid sm:grid-cols-2 border-l border-t" style={{ borderColor: "#e8e8e8" }}>
                    {group.refs.map((ref, i) => (
                      <div
                        key={ref}
                        className="flex items-center gap-4 px-5 py-4 bg-white border-r border-b"
                        style={{ borderColor: "#e8e8e8" }}
                      >
                        <span
                          className="text-xs font-light shrink-0 w-5 text-right tabular-nums"
                          style={{ color: "#ccc" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-light leading-snug" style={{ color: "#222" }}>
                          {ref}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 border"
              style={{ borderColor: "#e8e8e8" }}
            >
              <div>
                <p className="font-medium uppercase tracking-wide text-sm mb-1.5" style={{ color: "#000" }}>
                  Projenize Katkı Sağlayalım
                </p>
                <p className="text-sm font-light" style={{ color: "#888" }}>
                  Listemizdeki kurum ve firmalar gibi siz de güvenilir bir tedarik ortağı arıyorsanız bize ulaşın.
                </p>
              </div>
              <a
                href="/iletisim"
                className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-7 py-3.5 text-sm text-white shrink-0 transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#000" }}
              >
                İletişime Geç
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
