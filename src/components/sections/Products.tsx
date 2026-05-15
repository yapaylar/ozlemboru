"use client";

import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import { useInView, fadeUp } from "@/hooks/useInView";

type ProductItem = (typeof PRODUCTS)[number] & { hoverImage?: string };

export default function Products() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const [featured, ...rest] = PRODUCTS as ProductItem[];

  return (
    <section id="urunlerimiz" className="section-y bg-white">
      <div className="container-max">
        <div
          ref={headerRef}
          className="section-header-row"
          style={fadeUp(headerInView, 0)}
        >
          <div>
            <p className="section-eyebrow max-w-full text-balance">
              Beton Boru ve Altyapı Elemanları
            </p>
            <h2 className="section-h2">Ürün Kataloğu</h2>
            <p className="mt-0.5 text-balance text-sm font-light leading-snug text-zinc-500 sm:hidden">
              Tüm ürünler TSE standartlarına uygun üretilmektedir.
            </p>
          </div>
          <p className="section-rail section-rail--right hidden max-w-[12rem] sm:max-w-xs sm:block">
            Tüm ürünler TSE standartlarına uygun üretilmektedir.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Featured — 2 sütun geniş */}
          <div
            className="sm:col-span-2 lg:col-span-2"
            style={fadeUp(gridInView, 0)}
          >
            <FeaturedCard product={featured} inView={gridInView} />
          </div>

          {/* İlk normal kart */}
          <div style={fadeUp(gridInView, 80)}>
            <ProductCard product={rest[0]} />
          </div>

          {/* Kalan kartlar */}
          {rest.slice(1).map((p, i) => (
            <div key={p.id} style={fadeUp(gridInView, (i + 2) * 80)}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Footer satırı */}
        <div
          className="mt-7 flex flex-col items-stretch justify-between gap-4 border-t border-zinc-200 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:pt-7"
          style={fadeUp(gridInView, 400)}
        >
          <p className="section-body max-w-prose text-left sm:text-balance">
            Tüm ürün gruplarımızı inceleyin, teknik şartname ve fiyat teklifi alın.
          </p>
          <Link href="/urunler" className="btn-cta btn-cta--primary shrink-0">
            Tüm ürünler
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ product, inView }: { product: ProductItem; inView: boolean }) {
  const hasHover = Boolean(product.hoverImage);

  return (
    <Link
      href={product.href}
      className="group relative flex h-full min-h-[22rem] flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md sm:flex-row sm:min-h-[18rem]"
    >
      {/* Görsel — mobilde üst, sm+ solda */}
      <div className="relative h-48 w-full shrink-0 bg-zinc-50/90 sm:h-auto sm:w-[48%]">
        <Image
          src={`/images/products/${product.id}.png`}
          alt=""
          fill
          className={`object-contain p-6 ${
            hasHover ? "transition-opacity duration-300 group-hover:opacity-0" : ""
          }`}
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
        />
        {hasHover && product.hoverImage && (
          <Image
            src={`/images/products/${product.hoverImage}`}
            alt=""
            fill
            className="pointer-events-none absolute inset-0 object-contain p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, 50vw"
            aria-hidden
          />
        )}
      </div>

      {/* İçerik */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
        <div>
          <span className="mb-3 inline-block border border-zinc-200 px-2.5 py-0.5 text-[10px] font-light uppercase tracking-[0.14em] text-zinc-500">
            Öne Çıkan
          </span>
          <h3 className="text-lg font-light leading-[1.3] tracking-[-0.02em] text-zinc-900 sm:text-xl">
            {product.title}
          </h3>
          <p className="mt-3 text-sm font-light leading-[1.7] text-zinc-600 sm:text-[0.95rem]">
            {product.description}
          </p>
        </div>
        <span className="mt-6 w-fit text-sm font-light text-zinc-500 transition-colors group-hover:text-[#023da6]">
          <span className="border-b border-zinc-300/80 pb-px group-hover:border-[#023da6]/60">
            İncele
          </span>
        </span>
      </div>
    </Link>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  const hasHover = Boolean(product.hoverImage);

  return (
    <Link
      href={product.href}
      className="group flex h-full min-h-[18rem] flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="relative h-44 shrink-0 bg-zinc-50/90 sm:h-48">
        <Image
          src={`/images/products/${product.id}.png`}
          alt=""
          fill
          className={`object-contain p-4 ${
            hasHover ? "transition-opacity duration-300 group-hover:opacity-0" : ""
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {hasHover && product.hoverImage && (
          <Image
            src={`/images/products/${product.hoverImage}`}
            alt=""
            fill
            className="pointer-events-none absolute inset-0 object-contain p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            aria-hidden
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-2.5 text-base font-light leading-[1.35] tracking-[-0.01em] text-zinc-900">
          {product.title}
        </h3>
        <p className="flex-1 text-sm font-light leading-[1.65] text-zinc-600">
          {product.description}
        </p>
        <span className="mt-4 w-fit text-sm font-light text-zinc-500 transition-colors group-hover:text-[#023da6] sm:mt-5">
          <span className="border-b border-zinc-300/80 pb-px group-hover:border-[#023da6]/60">
            İncele
          </span>
        </span>
      </div>
    </Link>
  );
}
