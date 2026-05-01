import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teknik Şartnameler | Özlem Beton Boru",
  description:
    "Özlem Beton Boru ürünlerine ait teknik şartname tabloları: iç çap, boru uzunluğu, et kalınlıkları ve tepe yük dayanım değerleri.",
};

const HERO_SRC = "/kurumsalhero.jpg";

const SPECS = [
  { name: "Ø 150 mm Buhar Kürlü Muflu Beton Boru", ic: 150, uzunluk: 1500, ozlemEt: 45, ilbankEt: 34, askiEt: 0, ilbankTepe: "3,8", askiTepe: "0,0" },
  { name: "Ø 200 mm Buhar Kürlü Muflu Beton Boru", ic: 200, uzunluk: 1500, ozlemEt: 50, ilbankEt: 38, askiEt: 40, ilbankTepe: "4,5", askiTepe: "4,2" },
  { name: "Ø 300 mm Buhar Kürlü Muflu Beton Boru", ic: 300, uzunluk: 1500, ozlemEt: 58, ilbankEt: 50, askiEt: 45, ilbankTepe: "4,8", askiTepe: "4,8" },
  { name: "Ø 400 mm Buhar Kürlü Muflu Beton Boru", ic: 400, uzunluk: 1500, ozlemEt: 65, ilbankEt: 55, askiEt: 50, ilbankTepe: "5,4", askiTepe: "6,5" },
  { name: "Ø 500 mm Buhar Kürlü Muflu Beton Boru", ic: 500, uzunluk: 2000, ozlemEt: 85, ilbankEt: 62, askiEt: 65, ilbankTepe: "6,0", askiTepe: "7,0" },
  { name: "Ø 600 mm Buhar Kürlü Muflu Beton Boru", ic: 600, uzunluk: 2000, ozlemEt: 90, ilbankEt: 70, askiEt: 70, ilbankTepe: "6,5", askiTepe: "8,0" },
  { name: "Ø 800 mm Buhar Kürlü Muflu Betonarme Boru", ic: 800, uzunluk: 2000, ozlemEt: 105, ilbankEt: 92, askiEt: 100, ilbankTepe: "7,2", askiTepe: "10,0" },
  { name: "Ø1000 mm Buhar Kürlü Muflu Betonarme Boru", ic: 1000, uzunluk: 2000, ozlemEt: 125, ilbankEt: 110, askiEt: 120, ilbankTepe: "8,0", askiTepe: "14,0" },
  { name: "Ø1200 mm Buhar Kürlü Muflu Betonarme Boru", ic: 1200, uzunluk: 2000, ozlemEt: 155, ilbankEt: 130, askiEt: 135, ilbankTepe: "8,5", askiTepe: "17,0" },
  { name: "Ø1400 mm Buhar Kürlü Muflu Betonarme Boru", ic: 1400, uzunluk: 2000, ozlemEt: 170, ilbankEt: 155, askiEt: 160, ilbankTepe: "9,2", askiTepe: "20,0" },
  { name: "Ø1600 mm Buhar Kürlü Muflu Betonarme Boru", ic: 1600, uzunluk: 2000, ozlemEt: 185, ilbankEt: 185, askiEt: 180, ilbankTepe: "10,3", askiTepe: "23,0" },
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

function TH({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={`bg-[#6db0e0] py-3.5 px-4 text-left text-[11px] font-medium uppercase leading-snug tracking-wide text-white ${className}`}
    >
      {children}
    </th>
  );
}

function TD({
  children,
  center = false,
  emphasize = false,
  className = "",
}: {
  children: React.ReactNode;
  center?: boolean;
  emphasize?: boolean;
  className?: string;
}) {
  return (
    <td
      className={`border-b border-zinc-200 py-4 px-4 text-sm font-light text-zinc-800 ${emphasize ? "font-normal text-zinc-900" : ""} ${center ? "text-center tabular-nums" : "text-left"} ${className}`}
    >
      {children}
    </td>
  );
}

export default function TeknikSartnamelerPage() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <section className="relative min-h-[min(52vh,26rem)] overflow-hidden border-b border-zinc-200/90 sm:min-h-[min(56vh,28rem)] md:min-h-[min(58vh,30rem)]">
        <Image
          src={HERO_SRC}
          alt="Teknik şartname ve üretim"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />

        <div className="relative z-10 flex min-h-[min(52vh,26rem)] flex-col justify-end pt-[68px] sm:min-h-[min(56vh,28rem)] sm:pt-[72px] md:min-h-[min(58vh,30rem)]">
          <div className="container-max w-full pb-10 [padding-bottom:max(2.5rem,env(safe-area-inset-bottom))] sm:pb-14 md:pb-16">
            <nav aria-label="İçerik yolu" className="mb-5">
              <Link
                href="/"
                className="text-[11px] font-light tracking-[0.14em] text-white/60 transition-colors hover:text-white"
              >
                Anasayfa
              </Link>
              <span className="mx-2 text-white/35">/</span>
              <Link
                href="/bilgi"
                className="text-[11px] font-light tracking-[0.14em] text-white/60 transition-colors hover:text-white"
              >
                Bilgi
              </Link>
              <span className="mx-2 text-white/35">/</span>
              <span className="text-[11px] font-light tracking-[0.14em] text-white/90">
                Teknik şartnameler
              </span>
            </nav>
            <h1 className="max-w-4xl text-balance font-light leading-[1.12] tracking-[-0.02em] text-white [font-size:var(--type-hero)] sm:max-w-5xl sm:tracking-[-0.01em]">
              Teknik şartnameler
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base font-light leading-[1.65] text-white/75 sm:text-[1.05rem] sm:leading-[1.7]">
              Et kalınlıkları ve tepe yük dayanımı tabloları; TSE standartlarına uygun üretim verileri.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">Ürün verileri</p>
              <h2 className="section-h2 max-w-3xl">
                Beton boru şartnamesine göre et kalınlıkları ve tepe yük dayanımı
              </h2>
              <p className="mt-0.5 text-balance text-sm font-light leading-snug text-zinc-500 sm:hidden">
                Özlem Boru, İLBANK ve ASKİ referans değerleri
              </p>
            </div>
            <p className="section-rail section-rail--right hidden max-w-xs text-balance sm:block">
              Özlem Boru, İLBANK ve ASKİ referans değerleri
            </p>
          </div>

          <div className="mt-10 overflow-x-auto pb-1 sm:mt-12 lg:mt-14">
            <table className="w-full min-w-[760px] border-collapse border border-zinc-200">
              <thead>
                <tr>
                  <TH className="w-[26%]">Ürün adı</TH>
                  <TH className="text-center">
                    İç çapı
                    <br />
                    (mm)
                  </TH>
                  <TH className="text-center">
                    Özlem Boru
                    <br />
                    uzunlukları
                    <br />
                    (mm)
                  </TH>
                  <TH className="text-center">
                    Özlem Boru
                    <br />
                    et kalınlıkları
                    <br />
                    (mm)
                  </TH>
                  <TH className="text-center">
                    İLBANK
                    <br />
                    boru et
                    <br />
                    kalınlıkları (mm)
                  </TH>
                  <TH className="text-center">
                    ASKİ
                    <br />
                    boru et
                    <br />
                    kalınlıkları (mm)
                  </TH>
                  <TH className="text-center">
                    İLBANK
                    <br />
                    tepe yük
                    <br />
                    dayanımı (Ton/m)
                  </TH>
                  <TH className="text-center">
                    ASKİ
                    <br />
                    tepe yük
                    <br />
                    dayanımı (Ton/m)
                  </TH>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((row, i) => (
                  <tr key={row.ic} className={i % 2 === 1 ? "bg-zinc-50/70" : "bg-white"}>
                    <TD>{row.name}</TD>
                    <TD center>{row.ic}</TD>
                    <TD center>{row.uzunluk}</TD>
                    <TD center emphasize>
                      {row.ozlemEt}
                    </TD>
                    <TD center>{row.ilbankEt}</TD>
                    <TD center>{row.askiEt === 0 ? "—" : row.askiEt}</TD>
                    <TD center>{row.ilbankTepe}</TD>
                    <TD center>{row.askiTepe}</TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 border-t border-zinc-200 pt-10 sm:mt-14">
            <p className="section-eyebrow mb-6 max-w-full">Notlar</p>
            <div className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
              {NOTES.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden />
                  <p className="section-body text-zinc-600">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-6 border border-zinc-200 bg-zinc-50/80 p-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-base font-light text-zinc-900">Teknik şartname (PDF)</p>
              <p className="section-body mt-1 text-zinc-600">Tam teknik şartnameyi PDF olarak indirin.</p>
            </div>
            <a
              href="/docs/teknik-sartname.pdf"
              className="btn-cta btn-cta--primary inline-flex shrink-0 items-center gap-2 sm:w-auto"
            >
              PDF indir
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path
                  d="M6.5 1v8M2 9l4.5 3.5L11 9"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-zinc-200 pt-10">
            <Link href="/iletisim" className="btn-cta btn-cta--primary">
              İletişime geç
            </Link>
            <Link
              href="/bilgi/sevkiyat-bilgileri"
              className="btn-cta border border-zinc-900 bg-white text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Sevkiyat bilgileri
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
