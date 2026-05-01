import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/products";

const KATALOG_HERO_SRC = "/images/products/kataloghero.jpg";

export const metadata: Metadata = {
  title: "Ürünlerimiz | Özlem Beton Boru",
  description:
    "Beton boru, betonarme boru, muayene bacası, parsel bacası, yağmur suyu ızgara elemanları ve betonarme su depoları — TSE & ISO belgeli üretim.",
};

export default function UrunlerPage() {
  const catCount = PRODUCT_CATEGORIES.length;

  return (
    <main className="w-full min-w-0 overflow-x-clip">
      {/* Hero — kurumsal sayfa ile aynı katman mantığı */}
      <section className="relative min-h-[min(52vh,26rem)] overflow-hidden border-b border-zinc-200/90 sm:min-h-[min(56vh,28rem)] md:min-h-[min(58vh,30rem)]">
        <Image
          src={KATALOG_HERO_SRC}
          alt="Beton boru ve altyapı elemanları ürün kataloğu"
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
              <span className="text-[11px] font-light tracking-[0.14em] text-white/90">
                Ürünlerimiz
              </span>
            </nav>
            <h1 className="max-w-4xl text-balance font-light leading-[1.12] tracking-[-0.02em] text-white [font-size:var(--type-hero)] sm:max-w-5xl sm:tracking-[-0.01em]">
              Ürün Kataloğu
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base font-light leading-[1.65] text-white/75 sm:text-[1.05rem] sm:leading-[1.7]">
              Beton boru, betonarme boru ve altyapı elemanları — TSE ve ISO belgeli üretim.
            </p>
          </div>
        </div>
      </section>

      {/* Kategoriler — anasayfa Ürünler kartları ile uyumlu */}
      <section className="section-y bg-white">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">
                Beton Boru ve Altyapı Elemanları
              </p>
              <h2 className="section-h2">Ürün Kategorileri</h2>
              <p className="mt-0.5 text-balance text-sm font-light leading-snug text-zinc-500 sm:hidden">
                {catCount} kategori · TSE ve ISO belgeli üretim
              </p>
            </div>
            <p className="section-rail section-rail--right hidden text-zinc-500 sm:block sm:max-w-xs">
              <span className="text-balance">
                {catCount} kategori · TSE ve ISO belgeli üretim
              </span>
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/urunler/${cat.id}`}
                className="group flex min-h-[20rem] flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md sm:min-h-[22rem]"
              >
                <div className="relative h-48 shrink-0 bg-zinc-50/90">
                  {cat.hoverImage ? (
                    <>
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-contain p-3 transition-opacity duration-300 group-hover:opacity-0"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <Image
                        src={cat.hoverImage}
                        alt=""
                        fill
                        className="pointer-events-none absolute inset-0 object-contain p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        aria-hidden
                      />
                    </>
                  ) : (
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col border-t border-zinc-100 p-4 text-left sm:p-5">
                  <div className="mb-2.5 flex items-start justify-between gap-3">
                    <h3 className="min-w-0 text-base font-light leading-[1.35] tracking-[-0.01em] text-zinc-900 sm:text-[1.05rem]">
                      {cat.title}
                    </h3>
                    {cat.standard ? (
                      <span className="shrink-0 self-start border border-zinc-200/90 bg-white px-2 py-0.5 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-600">
                        {cat.standard}
                      </span>
                    ) : null}
                  </div>
                  <p className="flex-1 text-sm font-light leading-[1.65] text-zinc-600 sm:text-[0.95rem] sm:leading-[1.7]">
                    {cat.description}
                  </p>
                  <span className="mt-4 w-fit text-sm font-light text-zinc-500 transition-colors group-hover:text-navy sm:mt-5">
                    <span className="border-b border-zinc-300/80 pb-px group-hover:border-navy/60">
                      İncele
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-zinc-50/80">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="section-eyebrow mb-3 max-w-full text-balance">Teknik destek</p>
              <h2 className="section-h2 mb-6 max-w-xl">
                Projenize uygun ürünü birlikte seçelim
              </h2>
              <p className="section-body max-w-prose">
                Çap aralığı, standart ve teknik şartnameye göre doğru ürünü belirlemenizde yardımcı
                olabiliriz. Uzman ekibimizle iletişime geçin.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/iletisim" className="btn-cta btn-cta--primary">
                İletişime Geç
              </Link>
              <Link
                href="/bilgi/teknik-sartnameler"
                className="btn-cta border border-zinc-900 bg-white text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Teknik şartnameler
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
