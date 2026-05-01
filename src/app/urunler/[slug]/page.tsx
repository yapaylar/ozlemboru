import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCT_CATEGORIES, getProductsByCategory, getCategoryBySlug } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.title} | Özlem Beton Boru`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const products = getProductsByCategory(slug);
  const others = PRODUCT_CATEGORIES.filter((c) => c.id !== cat.id);

  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <section className="border-b border-zinc-200 bg-white pt-[calc(68px+2rem)] pb-10 sm:pt-[calc(72px+3rem)] sm:pb-12 md:pb-14">
        <div className="container-max">
          <nav aria-label="İçerik yolu" className="mb-5 flex flex-wrap items-center gap-x-2 text-[11px] font-light tracking-[0.14em]">
            <Link href="/" className="text-zinc-500 transition-colors hover:text-zinc-900">
              Anasayfa
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/urunler" className="text-zinc-500 transition-colors hover:text-zinc-900">
              Ürünlerimiz
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-700">{cat.shortTitle}</span>
          </nav>
          <h1 className="section-h2 section-h2-wide max-w-4xl text-balance">{cat.title}</h1>
          <p className="section-body mt-4 max-w-2xl text-pretty">{cat.description}</p>
          {cat.standard ? (
            <span className="mt-5 inline-block border border-zinc-200 bg-white px-3 py-1.5 text-[10px] font-light uppercase tracking-[0.14em] text-zinc-700">
              {cat.standard}
            </span>
          ) : null}
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">{products.length} ürün</p>
              <h2 className="section-h2 max-w-xl">Ürünler</h2>
            </div>
            <Link
              href="/sepet"
              className="section-rail hidden shrink-0 items-center gap-2 text-zinc-600 transition-colors hover:text-navy sm:flex sm:justify-end"
            >
              Sepetim
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M1 1h2l1.68 7.39a1 1 0 001 .79h4.72a1 1 0 00.98-.8L13 5H3.12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="5.5" cy="12" r="1" fill="currentColor" />
                <circle cx="10.5" cy="12" r="1" fill="currentColor" />
              </svg>
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="mt-10 grid gap-px border border-zinc-200 bg-zinc-200 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/urunler/${slug}/${product.id}`}
                  className="group flex min-h-[20rem] flex-col overflow-hidden bg-white shadow-sm transition-shadow duration-200 hover:shadow-md sm:min-h-[22rem]"
                >
                  <div className="relative h-48 shrink-0 bg-zinc-50/90">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-3 border-t border-zinc-100 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="min-w-0 text-sm font-light leading-snug tracking-[-0.01em] text-zinc-900 sm:text-[0.95rem]">
                        {product.shortTitle}
                      </h3>
                      <span className="shrink-0 border border-zinc-200 bg-white px-2 py-0.5 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-600">
                        {product.unit}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-xs font-light leading-relaxed text-zinc-600 sm:text-[0.8125rem] sm:leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {product.options.slice(0, 5).map((opt) => (
                        <span
                          key={opt.id}
                          className="border border-zinc-200 px-2 py-0.5 text-[11px] font-light text-zinc-600"
                        >
                          {opt.label}
                        </span>
                      ))}
                      {product.options.length > 5 ? (
                        <span className="px-2 py-0.5 text-[11px] font-light text-zinc-400">
                          +{product.options.length - 5}
                        </span>
                      ) : null}
                    </div>
                    <span className="inline-flex items-center gap-1.5 pt-2 text-xs font-light uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-navy">
                      Seç ve ekle
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                        <path
                          d="M1 5h8M5 1l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 border border-zinc-200 bg-zinc-50/40 py-16 text-center sm:mt-12">
              <p className="text-xs font-light uppercase tracking-[0.14em] text-zinc-400">Yakında</p>
              <p className="section-body mt-2 text-zinc-600">Bu kategori için ürünler hazırlanıyor.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-y bg-zinc-50/80">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">Diğer kategoriler</p>
              <h2 className="section-h2 max-w-xl">Keşfetmeye devam edin</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-px border border-zinc-200 bg-zinc-200 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.id}
                href={`/urunler/${other.id}`}
                className="group flex items-center gap-5 bg-white px-5 py-4 transition-colors hover:bg-zinc-50/90"
              >
                <div className="relative h-14 w-14 shrink-0">
                  <Image src={other.image} alt="" fill className="object-contain" sizes="56px" />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-light leading-snug text-zinc-900 transition-colors group-hover:text-navy">
                    {other.title}
                  </span>
                  {other.standard ? (
                    <p className="mt-0.5 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-400">
                      {other.standard}
                    </p>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
