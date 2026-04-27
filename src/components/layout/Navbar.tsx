"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCT_CATEGORIES } from "@/lib/products";

const BILGI_ITEMS = [
  { href: "/bilgi/teknik-sartnameler", label: "Teknik Şartnameler", desc: "Et kalınlıkları ve tepe yük dayanımı", no: "01" },
  { href: "/bilgi/sevkiyat-bilgileri", label: "Sevkiyat Bilgileri", desc: "1 tırda gidecek miktar tablosu", no: "02" },
  { href: "/bilgi/referanslar", label: "Referanslar", desc: "60'ı aşkın referans proje", no: "03" },
  { href: "/bilgi/blog", label: "Blog", desc: "Teknik makaleler ve haberler", no: "04" },
  { href: "/bilgi/galeri", label: "Galeri", desc: "Üretim tesisi ve proje görselleri", no: "05" },
];

function Logo() {
  return (
    <div aria-label="Özlem İnşaat">
      <Image
        src="/images/ozlemlogotest4.png"
        alt="Özlem İnşaat"
        width={260}
        height={80}
        className="h-12 w-auto sm:h-16"
        priority
      />
    </div>
  );
}

const navLinkClass =
  "px-4 py-2 text-[13px] font-light tracking-wide transition-opacity duration-150 hover:opacity-50";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bilgiOpen, setBilgiOpen] = useState(false);
  const [urunlerOpen, setUrunlerOpen] = useState(false);
  const [mobileBilgiOpen, setMobileBilgiOpen] = useState(false);
  const [mobileUrunlerOpen, setMobileUrunlerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const bilgiRef = useRef<HTMLDivElement>(null);
  const urunlerRef = useRef<HTMLDivElement>(null);
  const bilgiTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const urunlerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setScrollingDown(y > lastScrollY.current && y > 40);
      lastScrollY.current = y;
    };
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

  const chevron = (open: boolean) => (
    <svg
      width="10" height="10" viewBox="0 0 10 10" fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 3.5l3 3 3-3" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "lg:right-16" : "lg:right-20"}`}
      style={{
        backgroundColor: scrollingDown ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,1)",
        backdropFilter: scrollingDown ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrollingDown ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "0 1px 6px rgba(0,0,0,0.06)",
      }}
    >
      {/* ── MAIN BAR ── */}
      <div
        className={`relative w-full flex items-center px-4 sm:px-6 transition-all duration-700 border-b border-zinc-200/90 ${scrolled ? "h-14" : "h-[68px] sm:h-[72px]"}`}
      >

        {/* ── Sol nav (desktop) ── */}
        <nav className="hidden lg:flex items-center justify-center gap-1 flex-1">
          <Link href="/" className={navLinkClass} style={{ color: "#000" }}>Anasayfa</Link>
          <Link href="/kurumsal" className={navLinkClass} style={{ color: "#000" }}>Kurumsal</Link>
        </nav>

        {/* ── Logo — ortada (desktop), sola yaslı (mobile) ── */}
        <Link href="/" className="hidden lg:flex items-center shrink-0 absolute left-1/2 -translate-x-1/2">
          <Logo />
        </Link>
        <Link href="/" className="flex lg:hidden items-center shrink-0">
          <Logo />
        </Link>

        {/* ── Sağ nav (desktop) ── */}
        <nav className="hidden lg:flex items-center justify-center gap-1 flex-1">
          {/* Ürünlerimiz */}
          <div
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
              Ürünlerimiz {chevron(urunlerOpen)}
            </button>
          </div>

          {/* Bilgi */}
          <div
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
              Bilgi {chevron(bilgiOpen)}
            </button>
          </div>

          <Link href="/iletisim" className={navLinkClass} style={{ color: "#000" }}>
            İletişim
          </Link>
        </nav>

        {/* ── Mobile: sadece menü ── */}
        <div className="ml-auto flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-zinc-900 transition-opacity hover:opacity-60 -mr-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Menü"
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── ÜRÜNLER DROPDOWN (desktop) ── */}
      <div
        onMouseEnter={openUrunler}
        onMouseLeave={closeUrunler}
        className="hidden lg:block overflow-hidden transition-all duration-300"
        style={{
          maxHeight: urunlerOpen ? "260px" : "0px",
          borderTop: urunlerOpen ? "1px solid #000" : "none",
          backgroundColor: "#fff",
          boxShadow: urunlerOpen ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="container-max py-6">
          <div className="grid grid-cols-7 gap-px" style={{ backgroundColor: "#f0f0f0" }}>
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
                  <path d="M1 4.5h7M4.5 1l3.5 3.5-3.5 3.5" stroke="#888" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
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

      {/* ── BİLGİ DROPDOWN (desktop) ── */}
      <div
        onMouseEnter={openBilgi}
        onMouseLeave={closeBilgi}
        className="hidden lg:block overflow-hidden transition-all duration-300"
        style={{
          maxHeight: bilgiOpen ? "220px" : "0px",
          borderTop: bilgiOpen ? "1px solid #000" : "none",
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
                <span className="text-xs font-light" style={{ color: "#ccc" }}>{item.no}</span>
                <span className="text-sm font-medium uppercase tracking-wide leading-snug group-hover:underline underline-offset-2" style={{ color: "#000" }}>
                  {item.label}
                </span>
                <span className="text-xs font-light leading-snug" style={{ color: "#888" }}>{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBİL MENÜ ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t" style={{ borderColor: "#e4e9f0" }}>
          <div className="flex flex-col">
            <Link href="/" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-sm font-light uppercase tracking-wider border-b" style={{ color: "#000", borderColor: "#f0f0f0" }}>
              Anasayfa
            </Link>
            <Link href="/kurumsal" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-sm font-light uppercase tracking-wider border-b" style={{ color: "#000", borderColor: "#f0f0f0" }}>
              Kurumsal
            </Link>

            {/* Ürünlerimiz */}
            <div>
              <button
                onClick={() => setMobileUrunlerOpen(!mobileUrunlerOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm font-light uppercase tracking-wider border-b"
                style={{ color: "#000", borderColor: "#f0f0f0" }}
              >
                Ürünlerimiz
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileUrunlerOpen ? "rotate-180" : ""}`}>
                  <path d="M2 4l4 4 4-4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileUrunlerOpen && (
                <div style={{ backgroundColor: "#f7f7f7" }}>
                  <Link href="/urunler" onClick={() => { setMenuOpen(false); setMobileUrunlerOpen(false); }} className="flex items-center gap-4 px-8 py-3.5 border-b" style={{ borderColor: "#ececec" }}>
                    <span className="text-[10px] font-light w-5" style={{ color: "#bbb" }}>00</span>
                    <span className="text-sm font-light" style={{ color: "#000" }}>Tüm Ürünler</span>
                  </Link>
                  {PRODUCT_CATEGORIES.map((cat, i) => (
                    <Link key={cat.id} href={`/urunler/${cat.id}`} onClick={() => { setMenuOpen(false); setMobileUrunlerOpen(false); }} className="flex items-center gap-4 px-8 py-3.5 border-b" style={{ borderColor: "#ececec" }}>
                      <span className="text-[10px] font-light w-5" style={{ color: "#bbb" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm font-light" style={{ color: "#222" }}>{cat.shortTitle}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Bilgi */}
            <div>
              <button
                onClick={() => setMobileBilgiOpen(!mobileBilgiOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-sm font-light uppercase tracking-wider border-b"
                style={{ color: "#000", borderColor: "#f0f0f0" }}
              >
                Bilgi
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${mobileBilgiOpen ? "rotate-180" : ""}`}>
                  <path d="M2 4l4 4 4-4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileBilgiOpen && (
                <div style={{ backgroundColor: "#f7f7f7" }}>
                  {BILGI_ITEMS.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => { setMenuOpen(false); setMobileBilgiOpen(false); }} className="flex items-center gap-4 px-8 py-3.5 border-b" style={{ borderColor: "#ececec" }}>
                      <span className="text-[10px] font-light w-5" style={{ color: "#bbb" }}>{item.no}</span>
                      <span className="text-sm font-light" style={{ color: "#222" }}>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/iletisim" onClick={() => setMenuOpen(false)} className="px-6 py-4 text-sm font-light uppercase tracking-wider border-b" style={{ color: "#000", borderColor: "#f0f0f0" }}>
              İletişim
            </Link>
          </div>
        </div>
      )}
    </header>
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
