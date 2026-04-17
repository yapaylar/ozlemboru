"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPageClient() {
  const { items, removeItem, setQty, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-6 text-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M3 3h5l4.68 20.39a3 3 0 003 2.22h13.44a3 3 0 002.96-2.39L35 13H9.12" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="15" cy="34" r="2.5" fill="#ccc"/>
          <circle cx="28" cy="34" r="2.5" fill="#ccc"/>
        </svg>
        <div>
          <p className="font-medium uppercase tracking-wide text-sm mb-2" style={{ color: "#888" }}>Sepetiniz Boş</p>
          <p className="text-sm font-light" style={{ color: "#aaa" }}>Ürün kataloğumuzu inceleyerek sepetinize ekleyin.</p>
        </div>
        <Link href="/urunler"
          className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest mt-2 transition-opacity hover:opacity-60"
          style={{ color: "#000" }}>
          Ürünlere Git
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    );
  }

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="grid lg:grid-cols-12 gap-12">

      {/* ── ITEMS ────────────────────────────────────────────────── */}
      <div className="lg:col-span-8">
        <div className="space-y-0">
          {items.map((item) => (
            <div key={item.key} className="flex gap-5 py-6 border-b" style={{ borderColor: "#e8e8e8" }}>
              {/* Image */}
              <div className="relative w-20 h-20 shrink-0" style={{ backgroundColor: "#f7f7f7" }}>
                <Image src={item.image} alt={item.productTitle} fill className="object-contain p-2" sizes="80px"/>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 gap-2 min-w-0">
                <p className="text-sm font-medium uppercase tracking-wide leading-snug" style={{ color: "#000" }}>
                  {item.productTitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-light px-2 py-0.5 border" style={{ borderColor: "#e0e0e0", color: "#555" }}>
                    {item.optionLabel}
                  </span>
                  {item.optionLength !== "—" && item.optionLength !== "st" && (
                    <span className="text-xs font-light" style={{ color: "#aaa" }}>
                      {item.optionLength} mm boy
                    </span>
                  )}
                  {item.optionWeight !== "—" && (
                    <span className="text-xs font-light" style={{ color: "#aaa" }}>
                      ~{item.optionWeight} kg/adet
                    </span>
                  )}
                </div>

                {/* Qty + remove */}
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center border" style={{ borderColor: "#ddd" }}>
                    <button onClick={() => setQty(item.key, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-base font-light transition-colors hover:bg-[#f7f7f7]"
                      style={{ color: "#000" }}>−</button>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => setQty(item.key, Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-10 h-8 text-center text-sm font-light outline-none"
                      style={{ color: "#000" }}
                    />
                    <button onClick={() => setQty(item.key, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-base font-light transition-colors hover:bg-[#f7f7f7]"
                      style={{ color: "#000" }}>+</button>
                  </div>
                  <span className="text-xs font-light uppercase tracking-widest" style={{ color: "#888" }}>
                    {item.unit === "MT" ? "Metre" : item.unit === "TK" ? "Takım" : "Adet"}
                  </span>
                  <button onClick={() => removeItem(item.key)}
                    className="ml-auto text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-50"
                    style={{ color: "#bbb" }}>
                    Kaldır
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear */}
        <div className="flex justify-end pt-4">
          <button onClick={clearCart}
            className="text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-50"
            style={{ color: "#bbb" }}>
            Sepeti Temizle
          </button>
        </div>
      </div>

      {/* ── SUMMARY + CTA ────────────────────────────────────────── */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 border" style={{ borderColor: "#e8e8e8" }}>
          <div className="px-6 py-5 border-b" style={{ borderColor: "#e8e8e8" }}>
            <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "#000" }}>Sipariş Özeti</p>
          </div>
          <div className="px-6 py-5 space-y-3">
            <div className="flex justify-between text-sm font-light" style={{ color: "#555" }}>
              <span>Toplam kalem</span>
              <span>{items.length}</span>
            </div>
            <div className="flex justify-between text-sm font-light" style={{ color: "#555" }}>
              <span>Toplam miktar</span>
              <span>{totalItems} adet/mt</span>
            </div>
            <div className="pt-3 border-t" style={{ borderColor: "#e8e8e8" }}>
              <p className="text-xs font-light leading-relaxed" style={{ color: "#aaa" }}>
                Fiyat, çap ve sipariş miktarına göre belirlenir. Teklif almak için formu doldurun.
              </p>
            </div>
          </div>
          <div className="px-6 pb-6 flex flex-col gap-3">
            <Link
              href={`/fiyat-al`}
              className="w-full flex items-center justify-center gap-3 font-light uppercase tracking-widest py-3.5 text-sm text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000" }}>
              Fiyatları Öğren
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/urunler"
              className="w-full flex items-center justify-center gap-2 text-xs font-light uppercase tracking-widest py-3 border transition-colors hover:bg-[#f7f7f7]"
              style={{ borderColor: "#ddd", color: "#555" }}>
              Alışverişe Devam
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
