"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { useCart } from "@/context/CartContext";

const BILGI_ITEMS = [
  {
    href: "/bilgi/teknik-sartnameler",
    label: "Teknik Şartnameler",
    desc: "Et kalınlıkları ve tepe yük dayanımı",
    no: "01",
  },
  {
    href: "/bilgi/sevkiyat-bilgileri",
    label: "Sevkiyat Bilgileri",
    desc: "1 tırda gidecek miktar tablosu",
    no: "02",
  },
  {
    href: "/bilgi/referanslar",
    label: "Referanslar",
    desc: "60'ı aşkın referans proje",
    no: "03",
  },
  {
    href: "/bilgi/blog",
    label: "Blog",
    desc: "Teknik makaleler ve haberler",
    no: "04",
  },
  {
    href: "/bilgi/galeri",
    label: "Galeri",
    desc: "Üretim tesisi ve proje görselleri",
    no: "05",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3" aria-label="Özlem İnşaat">
      <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
        <g transform="rotate(-20, 28, 28)">
          <path d="M 47,39 A 22,22 0 1,1 47,17" stroke="#000" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M 41,35.5 A 15,15 0 1,1 41,20.5" stroke="#000" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M 35.8,32.5 A 9,9 0 1,1 35.8,23.5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <circle cx="41" cy="20.5" r="2.6" fill="#00a8d6" />
          <circle cx="41" cy="35.5" r="2.6" fill="#00a8d6" />
        </g>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-semibold uppercase tracking-[0.18em]" style={{ fontSize: "0.95rem", color: "#000" }}>
          Özlem İnşaat
        </span>
        <span className="hidden sm:block font-light uppercase tracking-[0.13em]" style={{ fontSize: "0.58rem", color: "#888", marginTop: "4px" }}>
          Beton Boru ve Beton Elemanları Sanayi
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bilgiOpen, setBilgiOpen] = useState(false);
  const [urunlerOpen, setUrunlerOpen] = useState(false);
  const [mobileBilgiOpen, setMobileBilgiOpen] = useState(false);
  const [mobileUrunlerOpen, setMobileUrunlerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bilgiRef = useRef<HTMLDivElement>(null);
  const urunlerRef = useRef<HTMLDivElement>(null);
  const bilgiTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const urunlerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openBilgi() {
    if (bilgiTimer.current) clearTimeout(bilgiTimer.current);
    setUrunlerOpen(false);
    setBilgiOpen(true);
  }
  function closeBilgi() {
    bilgiTimer.current = setTimeout(() => setBilgiOpen(false), 120);
  }
  function openUrunler() {
    if (urunlerTimer.current) clearTimeout(urunlerTimer.current);
    setBilgiOpen(false);
    setUrunlerOpen(true);
  }
  function closeUrunler() {
    urunlerTimer.current = setTimeout(() => setUrunlerOpen(false), 120);
  }

  const { count } = useCart();
  const navLinkClass = "px-4 py-2 text-[13px] font-light uppercase tracking-wider transition-colors duration-150 hover:opacity-60";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-700"
      style={{
        borderBottom: "1px solid #e4e9f0",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "0 1px 6px rgba(0,0,0,0.06)",
      }}
    >
      {/* ── MAIN BAR ──────────────────────────────────────────── */}
      <div className={`w-full flex items-center justify-between px-6 transition-all duration-700 ${scrolled ? "h-14" : "h-20"}`}>

        <Link href="/" className="flex items-center shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.label === "Ürünlerimiz" ? (
              <div
                key="urunler"
                ref={urunlerRef}
                onMouseEnter={openUrunler}
                onMouseLeave={closeUrunler}
                className="relative"
              >
                <button
                  className={`${navLinkClass} flex items-center gap-1.5`}
                  style={{ color: "#000" }}
                  aria-haspopup="true"
                  aria-expanded={urunlerOpen}
                >
                  {link.label}
                  <svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    className={`transition-transform duration-200 ${urunlerOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 3.5l3 3 3-3" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ) : link.label === "Bilgi" ? (
              <div
                key="bilgi"
                ref={bilgiRef}
                onMouseEnter={openBilgi}
                onMouseLeave={closeBilgi}
                className="relative"
              >
                <button
                  className={`${navLinkClass} flex items-center gap-1.5`}
                  style={{ color: "#000" }}
                  aria-haspopup="true"
                  aria-expanded={bilgiOpen}
                >
                  {link.label}
                  <svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    className={`transition-transform duration-200 ${bilgiOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2 3.5l3 3 3-3" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={navLinkClass} style={{ color: "#000" }}>
                {link.label}
              </Link>
            )
          )}

          <Link href="/iletisim" className={navLinkClass} style={{ color: "#000" }}>
            İletişim
          </Link>

          {/* Cart icon */}
          <Link href="/sepet" className="relative p-2 flex items-center justify-center transition-opacity hover:opacity-60 ml-1" aria-label="Sepet">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1h2.5l2.1 9.3a1.25 1.25 0 001.25.98h5.9a1.25 1.25 0 001.23-1L15.5 5.5H4.4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6.5" cy="15" r="1.2" fill="#000"/>
              <circle cx="12.5" cy="15" r="1.2" fill="#000"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center text-[9px] font-medium text-white rounded-full" style={{ backgroundColor: "#000" }}>
                {count > 9 ? "9+" : count}
              </span>
            )}
          </Link>

          {/* Search */}
          <div className="relative group ml-1">
            <button
              className="p-2 flex items-center justify-center transition-opacity hover:opacity-60"
              style={{ color: "#000" }}
              aria-label="Ürün Ara"
            >
              <SearchIcon className="w-4 h-4" />
            </button>
            <div
              className="absolute right-0 top-full mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg p-3"
              style={{ border: "1px solid #e4e9f0" }}
            >
              <input
                type="search"
                placeholder="Ürün ara..."
                autoComplete="off"
                className="w-full h-9 px-3 text-sm font-light outline-none"
                style={{ border: "1px solid #e4e9f0", color: "#000" }}
              />
            </div>
          </div>
        </nav>

        {/* Mobile: cart + hamburger */}
        <div className="lg:hidden flex items-center gap-1">
          <Link href="/sepet" className="relative p-2 flex items-center justify-center transition-opacity hover:opacity-60" aria-label="Sepet">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1h2.5l2.1 9.3a1.25 1.25 0 001.25.98h5.9a1.25 1.25 0 001.23-1L15.5 5.5H4.4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6.5" cy="15" r="1.2" fill="#000"/>
              <circle cx="12.5" cy="15" r="1.2" fill="#000"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center text-[9px] font-medium text-white rounded-full" style={{ backgroundColor: "#000" }}>
                {count > 9 ? "9+" : count}
              </span>
            )}
          </Link>
          <button
            className="p-2 transition-opacity hover:opacity-60"
            style={{ color: "#000" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── ÜRÜNLER DROPDOWN (desktop) ────────────────────────── */}
      <div
        onMouseEnter={openUrunler}
        onMouseLeave={closeUrunler}
        className="hidden lg:block overflow-hidden transition-all duration-300"
        style={{
          maxHeight: urunlerOpen ? "260px" : "0px",
          borderTop: urunlerOpen ? "1px solid #000" : "1px solid transparent",
          backgroundColor: "#fff",
          boxShadow: urunlerOpen ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="container-max py-6">
          <div className="grid grid-cols-7 gap-px" style={{ backgroundColor: "#f0f0f0" }}>
            {/* Tüm Ürünler */}
            <Link
              href="/urunler"
              onClick={() => setUrunlerOpen(false)}
              className="group col-span-1 bg-white px-5 py-5 flex flex-col gap-3 transition-colors hover:bg-[#f7f7f7]"
            >
              <span className="text-xs font-light" style={{ color: "#ccc" }}>00</span>
              <span className="text-sm font-medium uppercase tracking-wide leading-snug group-hover:underline underline-offset-2" style={{ color: "#000" }}>
                Tüm Ürünler
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-light leading-snug" style={{ color: "#888" }}>
                Kataloğu görüntüle
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1 4.5h7M4.5 1l3.5 3.5-3.5 3.5" stroke="#888" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
            {/* Categories */}
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/urunler/${cat.id}`}
                onClick={() => setUrunlerOpen(false)}
                className="group bg-white px-5 py-5 flex flex-col gap-3 transition-colors hover:bg-[#f7f7f7]"
              >
                <span className="text-xs font-light" style={{ color: "#ccc" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium uppercase tracking-wide leading-snug group-hover:underline underline-offset-2" style={{ color: "#000" }}>
                  {cat.shortTitle}
                </span>
                <span className="text-xs font-light leading-snug" style={{ color: "#888" }}>
                  {cat.standard ?? "Altyapı elemanı"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── BILGI DROPDOWN (desktop) ──────────────────────────── */}
      <div
        onMouseEnter={openBilgi}
        onMouseLeave={closeBilgi}
        className="hidden lg:block overflow-hidden transition-all duration-300"
        style={{
          maxHeight: bilgiOpen ? "220px" : "0px",
          borderTop: bilgiOpen ? "1px solid #000" : "1px solid transparent",
          backgroundColor: "#fff",
          boxShadow: bilgiOpen ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="container-max py-6">
          <div className="grid grid-cols-5 gap-px" style={{ backgroundColor: "#f0f0f0" }}>
            {BILGI_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setBilgiOpen(false)}
                className="group bg-white px-5 py-5 flex flex-col gap-3 transition-colors hover:bg-[#f7f7f7]"
              >
                <span className="text-xs font-light" style={{ color: "#ccc" }}>
                  {item.no}
                </span>
                <span className="text-sm font-medium uppercase tracking-wide leading-snug group-hover:underline underline-offset-2" style={{ color: "#000" }}>
                  {item.label}
                </span>
                <span className="text-xs font-light leading-snug" style={{ color: "#888" }}>
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ──────────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t" style={{ borderColor: "#e4e9f0" }}>
          <div className="flex flex-col">
            {NAV_LINKS.map((link) =>
              link.label === "Ürünlerimiz" ? (
                <div key="urunler-mobile">
                  <button
                    onClick={() => setMobileUrunlerOpen(!mobileUrunlerOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 text-sm font-light uppercase tracking-wider border-b"
                    style={{ color: "#000", borderColor: "#f0f0f0" }}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      className={`transition-transform duration-200 ${mobileUrunlerOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4l4 4 4-4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileUrunlerOpen && (
                    <div style={{ backgroundColor: "#f7f7f7" }}>
                      <Link
                        href="/urunler"
                        onClick={() => { setMenuOpen(false); setMobileUrunlerOpen(false); }}
                        className="flex items-center gap-4 px-8 py-3.5 border-b"
                        style={{ borderColor: "#ececec" }}
                      >
                        <span className="text-[10px] font-light w-5" style={{ color: "#bbb" }}>00</span>
                        <span className="text-sm font-light" style={{ color: "#000" }}>Tüm Ürünler</span>
                      </Link>
                      {PRODUCT_CATEGORIES.map((cat, i) => (
                        <Link
                          key={cat.id}
                          href={`/urunler/${cat.id}`}
                          onClick={() => { setMenuOpen(false); setMobileUrunlerOpen(false); }}
                          className="flex items-center gap-4 px-8 py-3.5 border-b"
                          style={{ borderColor: "#ececec" }}
                        >
                          <span className="text-[10px] font-light w-5" style={{ color: "#bbb" }}>{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-sm font-light" style={{ color: "#222" }}>{cat.shortTitle}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.label === "Bilgi" ? (
                <div key="bilgi-mobile">
                  <button
                    onClick={() => setMobileBilgiOpen(!mobileBilgiOpen)}
                    className="w-full flex items-center justify-between px-6 py-4 text-sm font-light uppercase tracking-wider border-b"
                    style={{ color: "#000", borderColor: "#f0f0f0" }}
                  >
                    {link.label}
                    <svg
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      className={`transition-transform duration-200 ${mobileBilgiOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4l4 4 4-4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileBilgiOpen && (
                    <div style={{ backgroundColor: "#f7f7f7" }}>
                      {BILGI_ITEMS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => { setMenuOpen(false); setMobileBilgiOpen(false); }}
                          className="flex items-center gap-4 px-8 py-3.5 border-b"
                          style={{ borderColor: "#ececec" }}
                        >
                          <span className="text-[10px] font-light w-5" style={{ color: "#bbb" }}>{item.no}</span>
                          <span className="text-sm font-light" style={{ color: "#222" }}>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 text-sm font-light uppercase tracking-wider border-b"
                  style={{ color: "#000", borderColor: "#f0f0f0" }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/iletisim"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-sm font-light uppercase tracking-wider border-b"
              style={{ color: "#000", borderColor: "#f0f0f0" }}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
    </svg>
  );
}
function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
