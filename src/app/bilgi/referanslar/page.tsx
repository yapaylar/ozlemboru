import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referanslar | Özlem Beton Boru",
  description:
    "1989'dan bu yana İller Bankası, ASKİ, TOKİ ve 60'ı aşkın kamu ve özel sektör kuruluşuyla tamamlanan referans projelerimiz.",
};

const HERO_SRC = "/teknikhero.jpg";

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
    tag: "Yerel yönetim",
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
    tag: "Özel sektör",
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
  { value: "35+", label: "Yıl deneyim" },
  { value: "63+", label: "Referans" },
  { value: "20+", label: "İl" },
  { value: "8", label: "Kamu kurumu" },
];

export default function ReferanslarPage() {
  const total = GROUPS.reduce((acc, g) => acc + g.refs.length, 0);

  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <section className="relative min-h-[min(52vh,26rem)] overflow-hidden border-b border-zinc-200/90 sm:min-h-[min(56vh,28rem)] md:min-h-[min(58vh,30rem)]">
        <Image
          src={HERO_SRC}
          alt="Referans projeler ve iş ortakları"
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
              <span className="text-[11px] font-light tracking-[0.14em] text-white/90">Referanslar</span>
            </nav>
            <h1 className="max-w-4xl text-balance font-light leading-[1.12] tracking-[-0.02em] text-white [font-size:var(--type-hero)] sm:max-w-5xl sm:tracking-[-0.01em]">
              Referanslarımız
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base font-light leading-[1.65] text-white/75 sm:text-[1.05rem] sm:leading-[1.7]">
              Kamu kurumları, belediyeler, TOKİ ve özel sektör projelerinde güvenilir altyapı tedariki.
            </p>
          </div>
        </div>
      </section>

      <div className="border-b border-zinc-200 bg-zinc-50/80">
        <div className="container-max grid grid-cols-2 divide-x divide-zinc-200 border-zinc-200 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-7 text-center sm:px-6">
              <p className="font-light tabular-nums leading-none text-zinc-900 [font-size:clamp(1.5rem,3vw,2rem)]">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] font-light uppercase tracking-[0.14em] text-zinc-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="section-y bg-white">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">Kurum ve kuruluşlar</p>
              <h2 className="section-h2 max-w-xl">Birlikte çalıştıklarımız</h2>
              <p className="mt-0.5 text-balance text-sm font-light leading-snug text-zinc-500 sm:hidden">
                {total} referans proje
              </p>
            </div>
            <p className="section-rail section-rail--right hidden max-w-[11rem] text-balance sm:block sm:max-w-xs">
              {total} referans proje
            </p>
          </div>

          <div className="mt-10 grid grid-cols-4 gap-3 sm:mt-12 sm:grid-cols-7 sm:gap-4 lg:mt-14">
            {LOGOS.map((n) => (
              <div
                key={n}
                className="flex aspect-square items-center justify-center border border-zinc-200 bg-zinc-50/40 p-4 shadow-sm sm:p-5"
              >
                <Image
                  src={`/images/references/${n}.png`}
                  alt={`Referans kurumu ${n}`}
                  width={100}
                  height={100}
                  className="h-full w-full object-contain opacity-95"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-14">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <div className="mb-5 flex flex-wrap items-center gap-3 gap-y-2 sm:mb-6">
                  <span className="shrink-0 border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-light uppercase tracking-[0.14em] text-zinc-700">
                    {group.tag}
                  </span>
                  <h3 className="min-w-0 text-sm font-light uppercase tracking-[0.12em] text-zinc-900 sm:text-[0.95rem]">
                    {group.title}
                  </h3>
                  <div className="hidden min-h-px min-w-[2rem] flex-1 bg-zinc-200 sm:block" aria-hidden />
                  <span className="ml-auto shrink-0 text-xs font-light tabular-nums text-zinc-400 sm:ml-0">
                    {group.refs.length}
                  </span>
                </div>

                <div className="grid gap-px border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
                  {group.refs.map((ref, i) => (
                    <div key={ref} className="flex items-start gap-4 bg-white px-4 py-3.5 sm:px-5 sm:py-4">
                      <span className="w-7 shrink-0 text-right text-[11px] font-light tabular-nums text-zinc-400 sm:w-8 sm:text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 text-sm font-light leading-snug text-zinc-800 sm:text-[0.95rem] sm:leading-relaxed">
                        {ref}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 border border-zinc-200 bg-zinc-50/80 p-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-base font-light text-zinc-900">Projenize katkı sağlayalım</p>
              <p className="section-body mt-1 max-w-xl text-zinc-600">
                Listemizdeki kurum ve firmalar gibi güvenilir bir tedarik ortağı arıyorsanız bize ulaşın.
              </p>
            </div>
            <Link href="/iletisim" className="btn-cta btn-cta--primary inline-flex shrink-0 items-center gap-2">
              İletişime geç
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                <path
                  d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
