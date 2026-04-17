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

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

      {/* ── LEFT: Image ─────────────────────────────────────────── */}
      <div className="lg:col-span-5">
        <div className="relative w-full aspect-square bg-[#f7f7f7] overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-10"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
          />
          {product.standard && (
            <span
              className="absolute top-4 left-4 text-[10px] font-light uppercase tracking-[0.15em] px-2.5 py-1.5 bg-white border"
              style={{ borderColor: "#e0e0e0", color: "#666" }}
            >
              {product.standard}
            </span>
          )}
        </div>
      </div>

      {/* ── RIGHT: Details ──────────────────────────────────────── */}
      <div className="lg:col-span-7 flex flex-col gap-6">

        {/* Title */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-light uppercase tracking-[0.15em] px-2.5 py-1 border"
              style={{ borderColor: "#ddd", color: "#888" }}>
              {product.unit === "MT" ? "Metre" : product.unit === "TK" ? "Takım" : "Adet"}
            </span>
          </div>
          <h1 className="font-light uppercase tracking-wide leading-snug mb-4"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "#000" }}>
            {product.title}
          </h1>
          <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
            {product.description}
          </p>
        </div>

        <div className="border-t" style={{ borderColor: "#e8e8e8" }} />

        {/* Option selector */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] mb-4" style={{ color: "#888" }}>
            {product.optionLabel} seçin
          </p>
          <div className="flex flex-wrap gap-2">
            {product.options.map((opt) => {
              const active = opt.id === selectedOptionId;
              return (
                <button
                  key={opt.id}
                  onClick={() => { setSelectedOptionId(opt.id); setAdded(false); }}
                  className="px-4 py-2 text-sm font-light border transition-colors"
                  style={{
                    borderColor: active ? "#000" : "#ddd",
                    backgroundColor: active ? "#000" : "#fff",
                    color: active ? "#fff" : "#333",
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected option specs */}
        {selectedOption ? (
          <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: "#e8e8e8" }}>
            {[
              { label: product.optionLabel, value: selectedOption.label },
              { label: "Boy (mm)",          value: selectedOption.length === "st" ? "Standart" : selectedOption.length },
              { label: "Ağırlık (kg)",      value: selectedOption.weight === "—" ? "Bilgi alın" : selectedOption.weight },
              ...(selectedOption.extraLabel ? [{ label: "Tür", value: selectedOption.extraLabel }] : []),
            ].map((spec) => (
              <div key={spec.label} className="bg-white px-4 py-3">
                <p className="text-[10px] font-light uppercase tracking-[0.15em] mb-1" style={{ color: "#aaa" }}>
                  {spec.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "#000" }}>{spec.value}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-4 py-4 border border-dashed text-sm font-light"
            style={{ borderColor: "#ddd", color: "#aaa" }}>
            {product.optionLabel} seçerek teknik bilgileri görüntüleyin
          </div>
        )}

        <div className="border-t" style={{ borderColor: "#e8e8e8" }} />

        {/* Qty + Add to cart */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Qty */}
          <div className="flex items-center border" style={{ borderColor: "#ddd" }}>
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-10 h-11 flex items-center justify-center text-lg font-light transition-colors hover:bg-[#f7f7f7]"
              style={{ color: "#000" }}
            >−</button>
            <input
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-14 h-11 text-center text-sm font-light outline-none"
              style={{ color: "#000" }}
            />
            <button
              onClick={() => setQty((q) => q + 1)}
              className="w-10 h-11 flex items-center justify-center text-lg font-light transition-colors hover:bg-[#f7f7f7]"
              style={{ color: "#000" }}
            >+</button>
          </div>

          {/* Add button */}
          <button
            onClick={handleAdd}
            disabled={!selectedOption}
            className="flex-1 flex items-center justify-center gap-3 font-light uppercase tracking-widest px-6 py-3 text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              backgroundColor: added ? "#111" : "#000",
              color: "#fff",
            }}
          >
            {added ? (
              <>
                Sepete Eklendi
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 7l3 3 6-6" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            ) : (
              <>
                Sepete Ekle
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1h2l1.68 7.39a1 1 0 001 .79h4.72a1 1 0 00.98-.8L13 5H3.12" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="5.5" cy="12" r="1" fill="#fff"/>
                  <circle cx="10.5" cy="12" r="1" fill="#fff"/>
                </svg>
              </>
            )}
          </button>
        </div>

        {!selectedOption && (
          <p className="text-xs font-light" style={{ color: "#aaa" }}>
            Sepete eklemek için önce {product.optionLabel.toLowerCase()} seçin
          </p>
        )}

        {/* Cart link */}
        {count > 0 && (
          <Link
            href="/sepet"
            className="inline-flex items-center gap-2 text-sm font-light underline underline-offset-4 transition-opacity hover:opacity-60"
            style={{ color: "#000" }}
          >
            Sepeti Görüntüle ({count} ürün)
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        )}

        {/* Info */}
        <div className="pt-2 border-t text-xs font-light leading-relaxed" style={{ borderColor: "#e8e8e8", color: "#999" }}>
          Fiyatlandırma sipariş adedi, çap ve teslimat koşullarına göre belirlenmektedir.
          Sepetinizdeki ürünler için teklif talep edebilirsiniz.
        </div>
      </div>
    </div>
  );
}
