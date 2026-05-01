"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product, ProductCategory } from "@/lib/products";

export default function ProductClient({
  product,
  category,
}: {
  product: Product;
  category: ProductCategory;
}) {
  const { addItem, count } = useCart();
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const selectedOption = product.options.find((o) => o.id === selectedOptionId);

  function handleAdd() {
    if (!selectedOption) return;
    addItem({
      key: `${product.id}-${selectedOption.id}`,
      productId: product.id,
      categoryId: product.categoryId,
      productTitle: product.title,
      optionId: selectedOption.id,
      optionLabel: selectedOption.label,
      optionLength: selectedOption.length,
      optionWeight: selectedOption.weight,
      unit: product.unit,
      image: product.image,
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const unitLabel = product.unit === "MT" ? "Metre" : product.unit === "TK" ? "Takım" : "Adet";

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="relative aspect-square w-full overflow-hidden border border-zinc-200 bg-zinc-50/90 shadow-sm">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-8 sm:p-10"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
          />
          {product.standard ? (
            <span className="absolute left-4 top-4 border border-zinc-200 bg-white/95 px-2.5 py-1.5 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-600 backdrop-blur-[2px]">
              {product.standard}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:col-span-7">
        <div>
          <span className="inline-block border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-600">
            {unitLabel}
          </span>
          <h1 className="section-h2 section-h2-wide mt-4 max-w-4xl text-pretty">{product.title}</h1>
          <p className="section-body mt-4 max-w-2xl text-pretty">{product.description}</p>
          <p className="mt-3 text-xs font-light text-zinc-500">
            Kategori:{" "}
            <Link href={`/urunler/${category.id}`} className="text-zinc-700 underline-offset-2 hover:text-navy hover:underline">
              {category.title}
            </Link>
          </p>
        </div>

        <div className="border-t border-zinc-200" />

        <div>
          <p className="section-eyebrow mb-4 max-w-full">{product.optionLabel} seçin</p>
          <div className="flex flex-wrap gap-2">
            {product.options.map((opt) => {
              const active = opt.id === selectedOptionId;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedOptionId(opt.id);
                    setAdded(false);
                  }}
                  className={`border px-4 py-2 text-sm font-light transition-colors ${
                    active
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {selectedOption ? (
          <div className="grid grid-cols-2 gap-px border border-zinc-200 bg-zinc-200">
            {[
              { label: product.optionLabel, value: selectedOption.label },
              {
                label: "Boy (mm)",
                value: selectedOption.length === "st" ? "Standart" : selectedOption.length,
              },
              {
                label: "Ağırlık (kg)",
                value: selectedOption.weight === "—" ? "Bilgi alın" : selectedOption.weight,
              },
              ...(selectedOption.extraLabel ? [{ label: "Tür", value: selectedOption.extraLabel }] : []),
            ].map((spec) => (
              <div key={spec.label} className="bg-white px-4 py-3">
                <p className="mb-1 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-400">{spec.label}</p>
                <p className="text-sm font-light text-zinc-900">{spec.value}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-zinc-300 px-4 py-4 text-sm font-light text-zinc-500">
            {product.optionLabel} seçerek teknik bilgileri görüntüleyin.
          </div>
        )}

        <div className="border-t border-zinc-200" />

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex items-center border border-zinc-200 bg-white">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-11 w-10 items-center justify-center text-lg font-light text-zinc-900 transition-colors hover:bg-zinc-50"
              aria-label="Azalt"
            >
              −
            </button>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="h-11 w-14 border-x border-zinc-200 bg-white text-center text-sm font-light text-zinc-900 outline-none"
            />
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="flex h-11 w-10 items-center justify-center text-lg font-light text-zinc-900 transition-colors hover:bg-zinc-50"
              aria-label="Artır"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            disabled={!selectedOption}
            className="btn-cta btn-cta--primary inline-flex flex-1 items-center justify-center gap-3 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {added ? (
              <>
                Sepete eklendi
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path
                    d="M2 7l3 3 6-6"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            ) : (
              <>
                Sepete ekle
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
              </>
            )}
          </button>
        </div>

        {!selectedOption ? (
          <p className="text-xs font-light text-zinc-400">
            Sepete eklemek için önce {product.optionLabel.toLowerCase()} seçin.
          </p>
        ) : null}

        {count > 0 ? (
          <Link
            href="/sepet"
            className="inline-flex items-center gap-2 text-sm font-light text-zinc-700 underline underline-offset-4 transition-colors hover:text-navy"
          >
            Sepeti görüntüle ({count} ürün)
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
              <path
                d="M1 5h8M5 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : null}

        <div className="section-body border-t border-zinc-200 pt-4 text-xs leading-relaxed text-zinc-500">
          Fiyatlandırma sipariş adedi, çap ve teslimat koşullarına göre belirlenir. Sepetinizdeki ürünler için teklif talep
          edebilirsiniz.
        </div>
      </div>
    </div>
  );
}
