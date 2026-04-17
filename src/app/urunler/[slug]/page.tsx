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
    <main>

        {/* ── PAGE HEADER ─────────────────────────────────────────── */}
        <section
          className="bg-white border-b"
          style={{ paddingTop: "calc(80px + 56px)", paddingBottom: "56px", borderColor: "#e8e8e8" }}
        >
          <div className="container-max">
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#bbb" }}>
              <Link href="/urunler" className="hover:opacity-60 transition-opacity" style={{ color: "#bbb" }}>Ürünlerimiz</Link>
              {" / "}{cat.shortTitle}
            </p>
            <h1 className="font-light uppercase tracking-wide leading-none mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#000" }}>
              {cat.title}
            </h1>
            <p className="text-sm font-light" style={{ color: "#888", maxWidth: "480px" }}>
              {cat.description}
            </p>
            {cat.standard && (
              <span className="inline-block mt-4 text-[10px] font-light uppercase tracking-[0.18em] px-3 py-1.5 border"
                style={{ borderColor: "#000", color: "#000" }}>
                {cat.standard}
              </span>
            )}
          </div>
        </section>

        {/* ── PRODUCT GRID ─────────────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-10 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-3" style={{ color: "#888" }}>
                  {products.length} ürün
                </p>
                <h2 className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#000" }}>
                  Ürünler
                </h2>
              </div>
              <Link href="/sepet"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{ color: "#000" }}>
                Sepetim
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1h2l1.68 7.39a1 1 0 001 .79h4.72a1 1 0 00.98-.8L13 5H3.12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="5.5" cy="12" r="1" fill="currentColor"/>
                  <circle cx="10.5" cy="12" r="1" fill="currentColor"/>
                </svg>
              </Link>
            </div>

            {products.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t" style={{ borderColor: "#e8e8e8" }}>
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/urunler/${slug}/${product.id}`}
                    className="group bg-white flex flex-col overflow-hidden border-r border-b"
                    style={{ borderColor: "#e8e8e8" }}
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-white overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col flex-1 p-5 gap-3 border-t" style={{ borderColor: "#f0f0f0" }}>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium uppercase tracking-wide text-sm leading-snug" style={{ color: "#000" }}>
                          {product.shortTitle}
                        </h3>
                        <span className="text-[10px] font-light uppercase tracking-widest px-2 py-0.5 border shrink-0"
                          style={{ borderColor: "#ddd", color: "#999" }}>
                          {product.unit}
                        </span>
                      </div>
                      <p className="text-xs font-light leading-relaxed line-clamp-2" style={{ color: "#777" }}>
                        {product.description}
                      </p>
                      {/* Options preview */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {product.options.slice(0, 5).map((opt) => (
                          <span key={opt.id}
                            className="text-[11px] font-light px-2 py-0.5 border"
                            style={{ borderColor: "#e0e0e0", color: "#555" }}>
                            {opt.label}
                          </span>
                        ))}
                        {product.options.length > 5 && (
                          <span className="text-[11px] font-light px-2 py-0.5"
                            style={{ color: "#bbb" }}>
                            +{product.options.length - 5}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 pt-2 text-xs font-light uppercase tracking-widest transition-opacity group-hover:opacity-50"
                        style={{ color: "#000" }}>
                        Seç &amp; Ekle
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border" style={{ borderColor: "#e8e8e8" }}>
                <p className="text-sm font-light uppercase tracking-widest mb-2" style={{ color: "#bbb" }}>Yakında</p>
                <p className="text-sm font-light" style={{ color: "#888" }}>Bu kategori için ürünler hazırlanıyor.</p>
              </div>
            )}

          </div>
        </section>

        {/* ── OTHER CATEGORIES ─────────────────────────────────────── */}
        <section className="section-y" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="container-max">
            <p className="text-xs font-light uppercase tracking-[0.18em] mb-6" style={{ color: "#888" }}>Diğer Kategoriler</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t" style={{ borderColor: "#e0e0e0" }}>
              {others.map((other) => (
                <Link key={other.id} href={`/urunler/${other.id}`}
                  className="group flex items-center gap-5 bg-white px-5 py-4 border-r border-b transition-colors hover:bg-[#f7f7f7]"
                  style={{ borderColor: "#e0e0e0" }}>
                  <div className="relative w-14 h-14 shrink-0">
                    <Image src={other.image} alt={other.title} fill className="object-contain" sizes="56px" />
                  </div>
                  <div>
                    <span className="text-sm font-light leading-snug group-hover:underline underline-offset-2"
                      style={{ color: "#222" }}>
                      {other.title}
                    </span>
                    {other.standard && (
                      <p className="text-[10px] font-light uppercase tracking-widest mt-0.5" style={{ color: "#bbb" }}>
                        {other.standard}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

    </main>
  );
}
