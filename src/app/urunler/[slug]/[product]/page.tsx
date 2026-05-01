import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, getCategoryBySlug, getProductBySlug, getProductsByCategory } from "@/lib/products";
import ProductClient from "./ProductClient";

type Props = { params: Promise<{ slug: string; product: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.categoryId, product: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, product: productId } = await params;
  const product = getProductBySlug(slug, productId);
  if (!product) return {};
  return {
    title: `${product.title} | Özlem Beton Boru`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug, product: productId } = await params;
  const product = getProductBySlug(slug, productId);
  const category = getCategoryBySlug(slug);
  if (!product || !category) notFound();

  const siblings = getProductsByCategory(slug).filter((p) => p.id !== productId);

  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <div className="border-b border-zinc-200 bg-white pt-[calc(68px+1.5rem)] pb-8 sm:pt-[calc(72px+2rem)]">
        <div className="container-max">
          <nav aria-label="İçerik yolu" className="flex flex-wrap items-center gap-x-2 text-[11px] font-light tracking-[0.14em]">
            <Link href="/" className="text-zinc-500 transition-colors hover:text-zinc-900">
              Anasayfa
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href="/urunler" className="text-zinc-500 transition-colors hover:text-zinc-900">
              Ürünlerimiz
            </Link>
            <span className="text-zinc-300">/</span>
            <Link href={`/urunler/${slug}`} className="text-zinc-500 transition-colors hover:text-zinc-900">
              {category.shortTitle}
            </Link>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-700">{product.shortTitle}</span>
          </nav>
        </div>
      </div>

      <section className="section-y bg-white">
        <div className="container-max">
          <ProductClient product={product} category={category} />
        </div>
      </section>

      {siblings.length > 0 ? (
        <section className="section-y bg-zinc-50/80">
          <div className="container-max">
            <div className="section-header-row">
              <div>
                <p className="section-eyebrow max-w-full text-balance">Aynı kategori</p>
                <h2 className="section-h2 max-w-xl">Diğer ürünler</h2>
              </div>
            </div>

            <div className="mt-10 grid gap-px border border-zinc-200 bg-zinc-200 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14">
              {siblings.slice(0, 4).map((sib) => (
                <Link
                  key={sib.id}
                  href={`/urunler/${slug}/${sib.id}`}
                  className="group flex items-center gap-4 bg-white px-5 py-4 transition-colors hover:bg-zinc-50 sm:min-h-[4.5rem]"
                >
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-light leading-snug text-zinc-900 transition-colors group-hover:text-navy">
                      {sib.shortTitle}
                    </span>
                    <span className="mt-1 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-400">
                      {sib.options.length} seçenek
                    </span>
                  </div>
                  <svg
                    className="shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-700"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M1 6h10M6 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
