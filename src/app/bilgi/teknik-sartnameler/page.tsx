import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Teknik Şartnameler | Özlem Beton Boru",
  description:
    "Özlem Beton Boru ürünlerine ait teknik şartname tabloları: iç çap, boru uzunluğu, et kalınlıkları ve tepe yük dayanım değerleri.",
};

const SPECS = [
  { name: "Ø 150 mm Buhar Kürlü Muflu Beton Boru",           ic: 150,  uzunluk: 1500, ozlemEt: 45,  ilbankEt: 34,  askiEt: 0,   ilbankTepe: "3,8",  askiTepe: "0,0" },
  { name: "Ø 200 mm Buhar Kürlü Muflu Beton Boru",           ic: 200,  uzunluk: 1500, ozlemEt: 50,  ilbankEt: 38,  askiEt: 40,  ilbankTepe: "4,5",  askiTepe: "4,2" },
  { name: "Ø 300 mm Buhar Kürlü Muflu Beton Boru",           ic: 300,  uzunluk: 1500, ozlemEt: 58,  ilbankEt: 50,  askiEt: 45,  ilbankTepe: "4,8",  askiTepe: "4,8" },
  { name: "Ø 400 mm Buhar Kürlü Muflu Beton Boru",           ic: 400,  uzunluk: 1500, ozlemEt: 65,  ilbankEt: 55,  askiEt: 50,  ilbankTepe: "5,4",  askiTepe: "6,5" },
  { name: "Ø 500 mm Buhar Kürlü Muflu Beton Boru",           ic: 500,  uzunluk: 2000, ozlemEt: 85,  ilbankEt: 62,  askiEt: 65,  ilbankTepe: "6,0",  askiTepe: "7,0" },
  { name: "Ø 600 mm Buhar Kürlü Muflu Beton Boru",           ic: 600,  uzunluk: 2000, ozlemEt: 90,  ilbankEt: 70,  askiEt: 70,  ilbankTepe: "6,5",  askiTepe: "8,0" },
  { name: "Ø 800 mm Buhar Kürlü Muflu Betonarme Boru",       ic: 800,  uzunluk: 2000, ozlemEt: 105, ilbankEt: 92,  askiEt: 100, ilbankTepe: "7,2",  askiTepe: "10,0" },
  { name: "Ø1000 mm Buhar Kürlü Muflu Betonarme Boru",       ic: 1000, uzunluk: 2000, ozlemEt: 125, ilbankEt: 110, askiEt: 120, ilbankTepe: "8,0",  askiTepe: "14,0" },
  { name: "Ø1200 mm Buhar Kürlü Muflu Betonarme Boru",       ic: 1200, uzunluk: 2000, ozlemEt: 155, ilbankEt: 130, askiEt: 135, ilbankTepe: "8,5",  askiTepe: "17,0" },
  { name: "Ø1400 mm Buhar Kürlü Muflu Betonarme Boru",       ic: 1400, uzunluk: 2000, ozlemEt: 170, ilbankEt: 155, askiEt: 160, ilbankTepe: "9,2",  askiTepe: "20,0" },
  { name: "Ø1600 mm Buhar Kürlü Muflu Betonarme Boru",       ic: 1600, uzunluk: 2000, ozlemEt: 185, ilbankEt: 185, askiEt: 180, ilbankTepe: "10,3", askiTepe: "23,0" },
  { name: "Ø1800 mm Buhar Kürlü Lamba Zıvanalı Betonarme Boru", ic: 1800, uzunluk: 2000, ozlemEt: 180, ilbankEt: 180, askiEt: 180, ilbankTepe: "10,8", askiTepe: "25,0" },
  { name: "Ø2000 mm Buhar Kürlü Lamba Zıvanalı Betonarme Boru", ic: 2000, uzunluk: 2000, ozlemEt: 200, ilbankEt: 200, askiEt: 200, ilbankTepe: "12,6", askiTepe: "28,0" },
];

const NOTES = [
  "Ürünlerimiz TS 821 EN 1916, TS EN 1917 ve TS 13473 standartlarında belgelidir.",
  "Ürünlerimizde SDÇ 42,5 çimento kullanılmaktadır.",
  "İmalatlarımız buhar kürlüdür.",
  "Proje esaslı özel üretimlerde yapılabilmektedir.",
  "Ø1400 mm üzeri betonarme borularda prefabrik muayene bacası imalatı yoktur.",
  "Ürünlerimiz contasız olarak da üretilmektedir.",
  "Firmamız ISO 9001 ve ISO 14001 belgelerine sahiptir.",
];

const TH = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <th
    className={`py-3.5 px-4 text-left text-[11px] font-medium uppercase tracking-wide leading-snug ${className}`}
    style={{ color: "#fff", backgroundColor: "#0a0a0a" }}
  >
    {children}
  </th>
);

const TD = ({ children, center = false, className = "" }: { children: React.ReactNode; center?: boolean; className?: string }) => (
  <td
    className={`py-4 px-4 text-sm font-light border-b ${center ? "text-center" : "text-left"} ${className}`}
    style={{ borderColor: "#ececec", color: "#222" }}
  >
    {children}
  </td>
);

export default function TeknikSartnamelePage() {
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
                Anasayfa / Bilgi / Teknik Şartnameler
              </p>
              <h1
                className="font-light uppercase tracking-wide text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Teknik Şartnameler
              </h1>
            </div>
          </div>
        </section>

        {/* ── TABLE SECTION ────────────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Ürün Verileri
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#000" }}
                >
                  Beton Boru Şartnamesine Göre<br className="hidden sm:block" /> Et Kalınlıkları ve Tepe Yük Dayanımı
                </h2>
              </div>
            </div>

            {/* Table — horizontal scroll on mobile */}
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full border-collapse" style={{ minWidth: "760px" }}>
                <thead>
                  <tr>
                    <TH className="w-[26%]">Ürün Adı</TH>
                    <TH className="text-center">İç Çapı<br />(mm)</TH>
                    <TH className="text-center">Özlem Boru<br />Uzunlukları<br />(mm)</TH>
                    <TH className="text-center">Özlem Boru<br />Et Kalınlıkları<br />(mm)</TH>
                    <TH className="text-center">İLBANK<br />Boru Et<br />Kalınlıkları (mm)</TH>
                    <TH className="text-center">ASKİ<br />Boru Et<br />Kalınlıkları (mm)</TH>
                    <TH className="text-center">İLBANK<br />Tepe Yük<br />Dayanımı (Ton/m)</TH>
                    <TH className="text-center">ASKİ<br />Tepe Yük<br />Dayanımı (Ton/m)</TH>
                  </tr>
                </thead>
                <tbody>
                  {SPECS.map((row, i) => (
                    <tr
                      key={row.ic}
                      style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa" }}
                    >
                      <TD>{row.name}</TD>
                      <TD center>{row.ic}</TD>
                      <TD center>{row.uzunluk}</TD>
                      <TD center className="font-medium">{row.ozlemEt}</TD>
                      <TD center>{row.ilbankEt}</TD>
                      <TD center>{row.askiEt === 0 ? "—" : row.askiEt}</TD>
                      <TD center>{row.ilbankTepe}</TD>
                      <TD center>{row.askiTepe}</TD>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Notes */}
            <div className="mt-10 pt-8 border-t" style={{ borderColor: "#e8e8e8" }}>
              <p className="text-xs font-light uppercase tracking-[0.15em] mb-5" style={{ color: "#888" }}>
                Notlar
              </p>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                {NOTES.map((note) => (
                  <div key={note} className="flex items-start gap-3">
                    <span className="mt-[6px] w-1 h-1 rounded-full shrink-0 bg-black" />
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#444" }}>
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF download placeholder */}
            <div className="mt-12 flex items-center justify-between p-6 border" style={{ borderColor: "#e8e8e8" }}>
              <div>
                <p className="font-medium uppercase tracking-wide text-sm mb-1" style={{ color: "#000" }}>
                  Teknik Şartname (PDF)
                </p>
                <p className="text-sm font-light" style={{ color: "#888" }}>
                  Tam teknik şartnameyi PDF olarak indirin
                </p>
              </div>
              <a
                href="/docs/teknik-sartname.pdf"
                className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-6 py-3 text-xs border transition-colors hover:bg-black hover:text-white hover:border-black"
                style={{ borderColor: "#000", color: "#000" }}
              >
                PDF İndir
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M6.5 1v8M2 9l4.5 3.5L11 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
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
