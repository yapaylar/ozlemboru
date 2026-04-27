"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import { useInView, fadeUp } from "@/hooks/useInView";

type ProductItem = (typeof PRODUCTS)[number] & { hoverImage?: string };

const AUTO_HOVER_MS = 2000;

export default function Products() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: scrollerRef, inView: scrollerInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="urunlerimiz" className="section-y bg-white">
      <div className="container-max">
        <div
          ref={headerRef}
          className="section-header-row"
          style={fadeUp(headerInView, 0)}
        >
          <div>
            <p className="section-eyebrow">Katalog</p>
            <h2 className="section-h2">Ürün kataloğu</h2>
            <p className="mt-0.5 text-balance text-sm font-light leading-snug text-zinc-500 sm:hidden">
              Tüm ürünler TSE standartlarına uygun üretilmektedir.
            </p>
          </div>
          <p className="section-rail section-rail--right hidden max-w-[12rem] sm:max-w-xs sm:block">
            Tüm ürünler TSE standartlarına uygun üretilmektedir.
          </p>
        </div>
      </div>

      <div
        className="container-max mt-7 w-full min-w-0 sm:mt-8"
        ref={scrollerRef}
        style={fadeUp(scrollerInView, 0)}
      >
        <div
          className="overflow-x-auto scroll-smooth overscroll-x-contain pb-3 [scrollbar-gutter:stable] [scrollbar-color:rgba(0,0,0,0.2)_transparent]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/** pl-0: sol kenar, başlık/eyebrow ile aynı (container-max yatay padding) */}
          <div className="flex w-max min-w-0 snap-x snap-mandatory gap-4 pl-0 pr-0">
            {PRODUCTS.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p as ProductItem}
                inView={scrollerInView}
                delayIndex={i}
                isFirst={i === 0}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container-max">
        <div
          className="mt-7 flex flex-col items-stretch justify-between gap-4 border-t border-zinc-200 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:pt-7"
          style={fadeUp(scrollerInView, 200)}
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

function ProductCard({
  product,
  inView,
  delayIndex,
  isFirst,
}: {
  product: ProductItem;
  inView: boolean;
  delayIndex: number;
  isFirst: boolean;
}) {
  const hasHover = Boolean(product.hoverImage);
  const [autoShowTech, setAutoShowTech] = useState(false);
  const [pointerOnCard, setPointerOnCard] = useState(false);

  useEffect(() => {
    if (!isFirst || !hasHover) return;
    if (pointerOnCard) return;
    const id = window.setInterval(() => setAutoShowTech((s) => !s), AUTO_HOVER_MS);
    return () => window.clearInterval(id);
  }, [isFirst, hasHover, pointerOnCard]);

  const onPointerEnter = useCallback(() => setPointerOnCard(true), []);
  const onPointerLeave = useCallback(() => setPointerOnCard(false), []);

  const showSecond =
    hasHover &&
    (isFirst
      ? pointerOnCard || autoShowTech
      : false);

  return (
    <div
      className="w-[min(18rem,88vw)] max-w-full shrink-0 snap-start sm:w-[min(78vw,18rem)]"
      style={fadeUp(inView, delayIndex * 70)}
    >
      <Link
        href={product.href}
        className="group flex h-full min-h-[20rem] flex-col overflow-hidden border border-zinc-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md sm:min-h-[22rem]"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        <div className="relative h-48 shrink-0 bg-zinc-50/90">
          {isFirst && hasHover ? (
            <>
              <Image
                src={`/images/products/${product.id}.png`}
                alt=""
                fill
                className="object-contain p-3 transition-opacity duration-500"
                style={{ opacity: showSecond ? 0 : 1 }}
                sizes="300px"
              />
              {product.hoverImage && (
                <Image
                  src={`/images/products/${product.hoverImage}`}
                  alt=""
                  fill
                  className="pointer-events-none absolute inset-0 object-contain p-3 transition-opacity duration-500"
                  style={{ opacity: showSecond ? 1 : 0 }}
                  sizes="300px"
                  aria-hidden
                />
              )}
            </>
          ) : (
            <>
              <Image
                src={`/images/products/${product.id}.png`}
                alt=""
                fill
                className={`object-contain p-3 ${
                  hasHover ? "transition-opacity duration-300 group-hover:opacity-0" : ""
                }`}
                sizes="300px"
              />
              {hasHover && product.hoverImage && (
                <Image
                  src={`/images/products/${product.hoverImage}`}
                  alt=""
                  fill
                  className="pointer-events-none absolute inset-0 object-contain p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="300px"
                  aria-hidden
                />
              )}
            </>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4 text-left sm:p-5">
          <h3 className="mb-2.5 text-base font-light leading-[1.35] tracking-[-0.01em] text-zinc-900 sm:text-[1.05rem]">
            {product.title}
          </h3>
          <p className="flex-1 text-sm font-light leading-[1.65] text-zinc-600 sm:text-[0.95rem] sm:leading-[1.7]">
            {product.description}
          </p>
          <span className="mt-4 w-fit text-sm font-light text-zinc-500 transition-colors group-hover:text-navy sm:mt-5">
            <span className="border-b border-zinc-300/80 pb-px group-hover:border-navy/60">
              İncele
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
