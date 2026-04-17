"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ContactMethod = "phone" | "email";

export default function PriceRequestClient() {
  const { items, count } = useCart();
  const [method, setMethod] = useState<ContactMethod>("phone");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 gap-8">
        <div
          className="w-16 h-16 flex items-center justify-center border-2"
          style={{ borderColor: "#000" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12l5 5L20 7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p
            className="font-light uppercase tracking-wide mb-3"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#000" }}
          >
            Talebiniz Alındı
          </p>
          <p className="text-sm font-light leading-relaxed max-w-sm mx-auto" style={{ color: "#555" }}>
            Uzman ekibimiz seçtiğiniz ürünlerin fiyatlarını en geç <strong style={{ color: "#000", fontWeight: 500 }}>30 dakika</strong> içinde size ulaştıracak.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest px-6 py-3 border transition-colors hover:bg-black hover:text-white hover:border-black"
            style={{ borderColor: "#000", color: "#000" }}
          >
            Alışverişe Devam
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest px-6 py-3 transition-opacity hover:opacity-60"
            style={{ color: "#888" }}
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-12 gap-0 min-h-[60vh]">

      {/* ── SOL: SEPET ÖZETİ ────────────────────────────────────────── */}
      <div
        className="lg:col-span-5 py-14 lg:pr-14 border-b lg:border-b-0 lg:border-r order-2 lg:order-1"
        style={{ borderColor: "#e8e8e8" }}
      >
        <p className="text-xs font-light uppercase tracking-[0.15em] mb-6" style={{ color: "#888" }}>
          Seçtiğiniz Ürünler — {count} kalem
        </p>

        {items.length === 0 ? (
          <div className="flex flex-col gap-3">
            <p className="text-sm font-light" style={{ color: "#aaa" }}>
              Sepetiniz boş.
            </p>
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "#000" }}
            >
              Ürünlere Git
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M1 4.5h7M4.5 1l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="space-y-0">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex items-start justify-between gap-4 py-4 border-b"
                style={{ borderColor: "#f0f0f0" }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-light leading-snug mb-1 truncate" style={{ color: "#000" }}>
                    {item.productTitle}
                  </p>
                  <span
                    className="text-[10px] font-light uppercase tracking-widest px-2 py-0.5 border"
                    style={{ borderColor: "#e0e0e0", color: "#777" }}
                  >
                    {item.optionLabel}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-medium" style={{ color: "#000" }}>{item.quantity}</p>
                  <p className="text-[10px] font-light uppercase tracking-widest" style={{ color: "#bbb" }}>
                    {item.unit === "MT" ? "mt" : item.unit === "TK" ? "tk" : "adet"}
                  </p>
                </div>
              </div>
            ))}
            <div className="pt-5">
              <Link
                href="/sepet"
                className="text-xs font-light uppercase tracking-widest underline underline-offset-4 transition-opacity hover:opacity-50"
                style={{ color: "#888" }}
              >
                Sepeti Düzenle
              </Link>
            </div>
          </div>
        )}

        <div
          className="mt-10 p-5 border"
          style={{ borderColor: "#f0f0f0", backgroundColor: "#fafafa" }}
        >
          <p className="text-xs font-light leading-relaxed" style={{ color: "#888" }}>
            Fiyatlandırma; ürün çapı, sipariş miktarı ve teslimat lokasyonuna göre belirlenir.
            Teklif talebiniz bağlayıcı değildir.
          </p>
        </div>
      </div>

      {/* ── SAĞ: FORM ──────────────────────────────────────────────── */}
      <div className="lg:col-span-7 py-14 lg:pl-16 order-1 lg:order-2">

        {/* Başlık */}
        <div className="mb-10">
          <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#aaa" }}>
            Son adım
          </p>
          <h2
            className="font-light uppercase tracking-wide leading-none mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#000" }}
          >
            Fiyatınız<br />Dakikalar İçinde
          </h2>
          <p className="text-base font-light leading-relaxed max-w-md" style={{ color: "#555" }}>
            Telefon numaranızı veya e-posta adresinizi bırakın — uzman ekibimiz
            seçtiğiniz ürünler için size özel teklifinizi en kısa sürede iletsin.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* İletişim yöntemi seçici */}
          <div>
            <p className="text-xs font-light uppercase tracking-[0.15em] mb-3" style={{ color: "#888" }}>
              Bize nasıl ulaşalım?
            </p>
            <div className="flex gap-0 border" style={{ borderColor: "#e0e0e0" }}>
              {(["phone", "email"] as ContactMethod[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => { setMethod(m); setContact(""); }}
                  className="flex-1 py-3 text-xs font-light uppercase tracking-widest transition-colors"
                  style={{
                    backgroundColor: method === m ? "#000" : "#fff",
                    color: method === m ? "#fff" : "#888",
                  }}
                >
                  {m === "phone" ? "Telefon" : "E-posta"}
                </button>
              ))}
            </div>
          </div>

          {/* İsim */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-light uppercase tracking-[0.15em]" style={{ color: "#888" }}>
              Adınız <span style={{ color: "#bbb" }}>(isteğe bağlı)</span>
            </label>
            <input
              type="text"
              placeholder="Ad Soyad veya Firma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b py-3 text-sm font-light bg-transparent outline-none placeholder:text-[#ccc]"
              style={{ borderColor: "#ddd", color: "#000" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#ddd")}
            />
          </div>

          {/* Telefon veya e-posta */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-light uppercase tracking-[0.15em]" style={{ color: "#888" }}>
              {method === "phone" ? "Telefon Numaranız" : "E-posta Adresiniz"}{" "}
              <span style={{ color: "#000" }}>*</span>
            </label>
            <input
              key={method}
              type={method === "phone" ? "tel" : "email"}
              placeholder={method === "phone" ? "0 5__ ___ __ __" : "ornek@firma.com"}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="w-full border-b py-3 text-sm font-light bg-transparent outline-none placeholder:text-[#ccc]"
              style={{ borderColor: "#ddd", color: "#000" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#ddd")}
            />
          </div>

          {/* Submit */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending" || !contact}
              className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-10 py-4 text-sm text-white transition-opacity disabled:opacity-40"
              style={{ backgroundColor: "#000" }}
            >
              {status === "sending" ? "Gönderiliyor…" : "Fiyat Al"}
              {status === "idle" && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <p className="text-xs font-light" style={{ color: "#aaa" }}>
              Bilgileriniz yalnızca teklif sürecinde kullanılır.
            </p>
          </div>
        </form>

      </div>
    </div>
  );
}
