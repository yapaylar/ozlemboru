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
          className="mb-6 flex items-end justify-between gap-6 border-b border-zinc-200 pb-6"
          style={fadeUp(headerInView, 0)}
        >
          <div>
            <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase" style={{ color: "#888" }}>
              Katalog
            </p>
            <h2
              className="font-light leading-none tracking-wide uppercase"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
            >
              Ürün kataloğu
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm font-light sm:block" style={{ color: "#888" }}>
            Tüm ürünler TSE standartlarına
            <br />
            uygun üretilmektedir.
          </p>
        </div>
      </div>

      <div
        className="mt-6 w-full -mx-5 sm:-mx-8 lg:-mx-12"
        ref={scrollerRef}
        style={fadeUp(scrollerInView, 0)}
      >
        <div
          className="overflow-x-auto scroll-smooth overscroll-x-contain pb-3 [scrollbar-gutter:stable] [scrollbar-color:rgba(0,0,0,0.2)_transparent]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex w-max min-w-0 snap-x snap-mandatory gap-4 pl-8 pr-5 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12">
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
          className="mt-10 flex flex-col items-stretch justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center"
          style={fadeUp(scrollerInView, 200)}
        >
          <p className="text-sm font-light" style={{ color: "#555" }}>
            Tüm ürün gruplarımızı inceleyin, teknik şartname ve fiyat teklifi alın.
          </p>
          <Link
            href="/urunler"
            className="shrink-0 inline-flex items-center justify-center px-6 py-2.5 text-sm font-normal text-white transition hover:opacity-80"
            style={{ backgroundColor: "#023da6", borderRadius: "20px" }}
          >
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
      className="w-[min(78vw,18rem)] shrink-0 snap-start"
      style={fadeUp(inView, delayIndex * 70)}
    >
      <Link
        href={product.href}
        className="group flex h-full min-h-[22rem] flex-col overflow-hidden border border-zinc-200/90 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
      >
        <div className="relative h-48 shrink-0 bg-[#f4f6f9]">
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

        <div className="flex flex-1 flex-col p-5 text-left">
          <h3
            className="mb-2.5 text-base font-normal leading-snug tracking-tight"
            style={{ color: "#000" }}
          >
            {product.title}
          </h3>
          <p className="flex-1 text-sm font-light leading-relaxed" style={{ color: "#555" }}>
            {product.description}
          </p>
          <span className="mt-5 w-fit text-sm font-normal text-[#023da6] underline decoration-[#023da6]/30 underline-offset-2">
            İncele
          </span>
        </div>
      </Link>
    </div>
  );
}
