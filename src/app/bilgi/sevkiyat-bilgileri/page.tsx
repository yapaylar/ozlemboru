import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sevkiyat Bilgileri | Özlem Beton Boru",
  description:
    "Özlem Beton Boru ürünleri için 1 tırda gidecek miktar ve birim bilgileri. Beton boru, muayene bacası ve altyapı elemanları lojistik tablosu.",
};

const HERO_SRC = "/teknikhero.jpg";

type Row = { name: string; miktar: number; birim: "MT" | "ADET" | "TK" };
type Group = { title: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    title: "Entegre Contalı Beton ve Betonarme Borular",
    rows: [
      { name: "150×1500 Entg.C. Beton Boru", miktar: 300, birim: "MT" },
      { name: "200×1500 Entg.C. Beton Boru", miktar: 255, birim: "MT" },
      { name: "300×1500 Entg.C. Beton Boru", miktar: 150, birim: "MT" },
      { name: "400×1500 Entg.C. Beton Boru", miktar: 87, birim: "MT" },
      { name: "500×2000 Entg.C. Beton Boru", miktar: 60, birim: "MT" },
      { name: "600×2000 Entg.C. Beton Boru", miktar: 50, birim: "MT" },
      { name: "800×2000 Entg.C. Betonarme Boru", miktar: 30, birim: "MT" },
      { name: "1000×2000 Entg.C. Betonarme Boru", miktar: 22, birim: "MT" },
      { name: "1200×2000 Entg.C. Betonarme Boru", miktar: 14, birim: "MT" },
      { name: "1400×2000 Entg.C. Betonarme Boru", miktar: 12, birim: "MT" },
      { name: "1600×2000 Entg.C. Betonarme Boru", miktar: 10, birim: "MT" },
      { name: "1800×2000 Entg.C. Betonarme Boru", miktar: 8, birim: "MT" },
      { name: "2000×2000 Entg.C. Betonarme Boru", miktar: 6, birim: "MT" },
    ],
  },
  {
    title: "Muayene Bacası Taban Elemanları",
    rows: [
      { name: "1000'lik Entg.Con. MB. Baca Tabanı (Ø200/300/400)", miktar: 14, birim: "ADET" },
      { name: "1000'lik Entg.Con. MB. Baca Tabanı (Ø500/600)", miktar: 12, birim: "ADET" },
      { name: "1200'lük Entg.Con. MB. Baca Tabanı (Ø200/300/400)", miktar: 10, birim: "ADET" },
      { name: "1200'lük Entg.Con. MB. Baca Tabanı (Ø500/600)", miktar: 10, birim: "ADET" },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø800) + Geçiş Plağı", miktar: 5, birim: "TK" },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø1000) + Geçiş Plağı", miktar: 4, birim: "TK" },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø1200) + Geçiş Plağı", miktar: 3, birim: "TK" },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø1400) + Geçiş Plağı", miktar: 3, birim: "TK" },
    ],
  },
  {
    title: "Muayene Bacası Gövde Bilezikleri ve Konik Elemanlar",
    rows: [
      { name: "1000×600 Entg.C. MB. Gövde Bileziği", miktar: 30, birim: "ADET" },
      { name: "1000×350 Entg.C. MB. Gövde Bileziği", miktar: 50, birim: "ADET" },
      { name: "1000×650 Entg.C. MB. Konik Elemanı", miktar: 30, birim: "ADET" },
      { name: "1200×600 Entg.C. MB. Ba. Gövde Bileziği", miktar: 24, birim: "ADET" },
      { name: "1200×350 Entg.C. MB. Ba. Gövde Bileziği", miktar: 45, birim: "ADET" },
      { name: "1200×780 Entg.C. MB. Ba. Konik Elemanı", miktar: 24, birim: "ADET" },
      { name: "1600'lük Entg. Ba. Bet. Rediksiyon Kapak", miktar: 24, birim: "ADET" },
      { name: "1400'lük Entg. Ba. Bet. Rediksiyon Kapak", miktar: 34, birim: "ADET" },
      { name: "Ø620 Entg.C. Mua.B. Gövde Boyun Bileziği", miktar: 140, birim: "ADET" },
      { name: "Ø620 Entg.C. Mua.B. Çerçeve Montaj Elemanı", miktar: 90, birim: "ADET" },
    ],
  },
  {
    title: "Parsel Bacası Elemanları",
    rows: [
      { name: "Ø800×800×600 Parsel Taban Elemanı (Kare)", miktar: 32, birim: "ADET" },
      { name: "Ø800×600'lük Parsel Taban Elemanı (Yuvarlak)", miktar: 44, birim: "ADET" },
      { name: "Ø800×800×500 Parsel Bacası", miktar: 55, birim: "ADET" },
      { name: "Ø800×800×250 Parsel Bacası", miktar: 80, birim: "ADET" },
      { name: "Ø800×500 Parsel Bacası (Yuvarlak)", miktar: 70, birim: "ADET" },
      { name: "Ø800×250 Parsel Bacası (Yuvarlak)", miktar: 90, birim: "ADET" },
      { name: "500×1000×1000 Çerçeveli Parsel Kapağı", miktar: 200, birim: "ADET" },
      { name: "500×1000×1000 Çerçevesiz Parsel Kapağı", miktar: 200, birim: "ADET" },
      { name: "Ø800×250 Parsel Bacası Mahruti", miktar: 100, birim: "ADET" },
    ],
  },
  {
    title: "Beton Bilezik, Baca ve Diğer Elemanlar",
    rows: [
      { name: "Ø1000×900 Baca Taban Elemanı (E.T.)", miktar: 18, birim: "ADET" },
      { name: "Ø1000×500 Beton Bilezik", miktar: 55, birim: "ADET" },
      { name: "Ø1000×250 Beton Bilezik", miktar: 77, birim: "ADET" },
      { name: "Ø1000×250 Beton Mahruti", miktar: 70, birim: "ADET" },
      { name: "Yuvarlak Ba. Beton Kapak", miktar: 250, birim: "ADET" },
      { name: "400×600×1000 YS Bacası", miktar: 27, birim: "ADET" },
      { name: "400×400×400 YS Baca Tabanı", miktar: 90, birim: "ADET" },
      { name: "400×400×400 YS Bacası", miktar: 170, birim: "ADET" },
    ],
  },
];

const BIRIM_LABEL: Record<string, string> = {
  MT: "Metre",
  ADET: "Adet",
  TK: "Takım",
};

const INFO_STRIP = [
  { label: "Araç tipi", value: "Standart tır (13,6 m dorse)" },
  { label: "Bölge", value: "Tüm Türkiye" },
  { label: "Sevkiyat", value: "Proje bazlı planlama ile" },
];

const NOTES = [
  "Tablodaki miktarlar standart 13,6 m dorseli tıra göre hesaplanmıştır.",
  "Belirtilen miktarlar yaklaşık değer olup ürün boyutuna ve yükleme koşullarına göre değişebilir.",
  "Özel proje sevkiyatları için ayrıca planlama yapılmaktadır.",
  "Fiyat teklifi ve sevkiyat takvimi için lütfen bizimle iletişime geçin.",
];

export default function SevkiyatBilgileriPage() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <section className="relative min-h-[min(52vh,26rem)] overflow-hidden border-b border-zinc-200/90 sm:min-h-[min(56vh,28rem)] md:min-h-[min(58vh,30rem)]">
        <Image
          src={HERO_SRC}
          alt="Sevkiyat ve lojistik"
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
                Sevkiyat bilgileri
              </span>
            </nav>
            <h1 className="max-w-4xl text-balance font-light leading-[1.12] tracking-[-0.02em] text-white [font-size:var(--type-hero)] sm:max-w-5xl sm:tracking-[-0.01em]">
              Sevkiyat bilgileri
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base font-light leading-[1.65] text-white/75 sm:text-[1.05rem] sm:leading-[1.7]">
              Standart tır kapasitesine göre ürün bazlı yükleme miktarları ve birim özetleri.
            </p>
          </div>
        </div>
      </section>

      <div className="border-b border-zinc-200 bg-zinc-50/80">
        <div className="container-max flex flex-wrap items-start gap-x-10 gap-y-4 py-6 sm:items-center sm:gap-x-14">
          {INFO_STRIP.map((item) => (
            <div key={item.label} className="min-w-[min(100%,14rem)]">
              <p className="text-[11px] font-light uppercase tracking-[0.14em] text-zinc-500">{item.label}</p>
              <p className="mt-1 text-sm font-light text-zinc-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="section-y bg-white">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">Lojistik</p>
              <h2 className="section-h2 max-w-xl">1 tırda gidecek miktar</h2>
              <p className="mt-0.5 text-balance text-sm font-light leading-snug text-zinc-500 sm:hidden">
                Standart tır kapasitesine göre özet tablolar
              </p>
            </div>
            <p className="section-rail section-rail--right hidden max-w-[11rem] text-balance sm:block sm:max-w-xs">
              Standart tır kapasitesine göre hesaplanmıştır.
            </p>
          </div>

          <div className="mt-10 space-y-14 sm:mt-12 lg:mt-14">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <div className="mb-4 flex items-center gap-4">
                  <h3 className="max-w-[min(100%,28rem)] text-[11px] font-light uppercase tracking-[0.14em] text-zinc-500">
                    {group.title}
                  </h3>
                  <div className="min-h-px flex-1 bg-zinc-200" aria-hidden />
                </div>

                <div className="overflow-x-auto pb-1">
                  <table className="w-full min-w-[480px] border-collapse border border-zinc-200">
                    <thead>
                      <tr className="bg-[#6db0e0] text-white">
                        <th className="w-[70%] py-3.5 px-4 text-left text-[11px] font-medium uppercase tracking-wide">
                          Ürün adı
                        </th>
                        <th className="py-3.5 px-4 text-center text-[11px] font-medium uppercase tracking-wide">
                          Miktar
                        </th>
                        <th className="py-3.5 px-4 text-center text-[11px] font-medium uppercase tracking-wide">
                          Birimi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row, i) => (
                        <tr key={row.name} className={i % 2 === 1 ? "bg-zinc-50/70" : "bg-white"}>
                          <td className="border-b border-zinc-200 py-3.5 px-4 text-sm font-light text-zinc-800">
                            {row.name}
                          </td>
                          <td className="border-b border-zinc-200 py-3.5 px-4 text-center text-sm font-normal tabular-nums text-zinc-900">
                            {row.miktar}
                          </td>
                          <td className="border-b border-zinc-200 py-3.5 px-4 text-center">
                            <span
                              className={`inline-block border px-2.5 py-1 text-[10px] font-light uppercase tracking-[0.12em] ${
                                row.birim === "MT"
                                  ? "border-zinc-900 bg-white text-zinc-900"
                                  : "border-zinc-200 bg-white text-zinc-600"
                              }`}
                            >
                              {BIRIM_LABEL[row.birim]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-zinc-200 pt-10 sm:mt-16">
            <div className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
              {NOTES.map((note) => (
                <div key={note} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" aria-hidden />
                  <p className="section-body text-zinc-600">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-zinc-200 pt-10">
            <Link href="/iletisim" className="btn-cta btn-cta--primary">
              İletişime geç
            </Link>
            <Link
              href="/bilgi/teknik-sartnameler"
              className="btn-cta border border-zinc-900 bg-white text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              Teknik şartnameler
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
