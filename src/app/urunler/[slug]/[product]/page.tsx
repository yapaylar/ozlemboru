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
    <main>

        {/* ── BREADCRUMB ───────────────────────────────────────────── */}
        <div className="bg-white border-b" style={{ paddingTop: "calc(80px + 40px)", borderColor: "#e8e8e8" }}>
          <div className="container-max pb-8">
            <p className="text-xs font-light uppercase tracking-[0.2em]" style={{ color: "#bbb" }}>
              <Link href="/urunler" className="hover:opacity-60 transition-opacity" style={{ color: "#bbb" }}>Ürünlerimiz</Link>
              {" / "}
              <Link href={`/urunler/${slug}`} className="hover:opacity-60 transition-opacity" style={{ color: "#bbb" }}>{category.shortTitle}</Link>
              {" / "}<span style={{ color: "#555" }}>{product.shortTitle}</span>
            </p>
          </div>
        </div>

        {/* ── PRODUCT DETAIL ───────────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">
            <ProductClient product={product} category={category} />
          </div>
        </section>

        {/* ── RELATED PRODUCTS ─────────────────────────────────────── */}
        {siblings.length > 0 && (
          <section className="section-y" style={{ backgroundColor: "#f7f7f7" }}>
            <div className="container-max">

              <div className="flex items-center gap-4 mb-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] shrink-0" style={{ color: "#888" }}>
                  Bu Kategorideki Diğer Ürünler
                </p>
                <div className="flex-1 border-t" style={{ borderColor: "#e8e8e8" }} />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t" style={{ borderColor: "#e0e0e0" }}>
                {siblings.slice(0, 4).map((sib) => (
                  <Link
                    key={sib.id}
                    href={`/urunler/${slug}/${sib.id}`}
                    className="group flex items-center gap-4 bg-white px-5 py-4 border-r border-b transition-colors hover:bg-[#f7f7f7]"
                    style={{ borderColor: "#e0e0e0" }}
                  >
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-sm font-light leading-snug group-hover:underline underline-offset-2 truncate" style={{ color: "#222" }}>
                        {sib.shortTitle}
                      </span>
                      <span className="text-[10px] font-light uppercase tracking-widest mt-1" style={{ color: "#bbb" }}>
                        {sib.options.length} seçenek
                      </span>
                    </div>
                    <svg className="shrink-0 transition-transform group-hover:translate-x-1"
                      width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

    </main>
  );
}
