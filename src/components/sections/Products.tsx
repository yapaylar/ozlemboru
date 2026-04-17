import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";

export default function Products() {
  return (
    <section id="urunlerimiz" className="section-y bg-white">
      <div className="container-max">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
          <div>
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
              Katalog
            </p>
            <h2
              className="font-light uppercase leading-none tracking-wide"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
            >
              Ürün Kataloğu
            </h2>
          </div>
          <p className="hidden sm:block text-sm font-light text-right max-w-xs" style={{ color: "#888" }}>
            Tüm ürünler TSE standartlarına<br />uygun üretilmektedir.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              className="bg-white flex flex-col group"
            >
              {/* Image area */}
              <div className="relative h-44 overflow-hidden bg-white">
                <Image
                  src={`/images/products/${product.id}.png`}
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 border-t" style={{ borderColor: "#f0f0f0" }}>
                <h3
                  className="font-medium uppercase tracking-wide text-sm mb-3 leading-snug"
                  style={{ color: "#000" }}
                >
                  {product.title}
                </h3>
                <p className="text-sm font-light leading-relaxed flex-1" style={{ color: "#555" }}>
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest transition-all duration-200 group-hover:gap-3"
                  style={{ color: "#000" }}
                >
                  İncele
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-px flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-7 bg-white border-b border-x"
          style={{ borderColor: "#000" }}
        >
          <p className="text-sm font-light" style={{ color: "#555" }}>
            Tüm ürün gruplarımızı inceleyin, teknik şartname ve fiyat teklifi alın.
          </p>
          <Link
            href="/urunler"
            className="shrink-0 inline-flex items-center gap-2.5 font-light uppercase tracking-widest text-sm text-white px-7 py-3.5 transition hover:opacity-75"
            style={{ backgroundColor: "#000" }}
          >
            Tüm Ürünler
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
