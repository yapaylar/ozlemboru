"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

function Logo({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "#0d1a2b" : "#ffffff";
  const subColor = dark ? "#1e72ad" : "#4caad4";
  const strokeColor = dark ? "#1b3563" : "#ffffff";

  return (
    <svg
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-auto"
      aria-label="Özlem İnşaat"
    >
      {/* Pipe cross-section — clean geometric */}
      <circle cx="24" cy="24" r="21" stroke={strokeColor} strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="13.5" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="24" cy="24" r="3.5" fill="#00a8d6" />
      {/* Two rebar dots top */}
      <circle cx="17" cy="11" r="2.2" fill="#00a8d6" opacity="0.8" />
      <circle cx="31" cy="11" r="2.2" fill="#00a8d6" opacity="0.8" />

      {/* "Özlem" — bold */}
      <text
        x="54"
        y="21"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="17"
        fill={textColor}
        letterSpacing="-0.4"
      >
        Özlem
      </text>
      {/* "inşaat" — light */}
      <text
        x="54"
        y="38"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        fontSize="12.5"
        fill={subColor}
        letterSpacing="2"
      >
        inşaat
      </text>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #e4e9f0" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container-max h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Logo dark={scrolled} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{
                color: scrolled ? "#374151" : "rgba(255,255,255,0.75)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Phone — desktop */}
          <a
            href={`tel:${COMPANY.phone1.replace(/[\s()]/g, "")}`}
            className="hidden xl:flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: scrolled ? "#1b3563" : "rgba(255,255,255,0.7)" }}
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            {COMPANY.phone1}
          </a>

          {/* CTA */}
          <Link
            href="#iletisim"
            className="hidden sm:inline-flex items-center text-sm font-semibold px-5 py-2 text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "#00a8d6" }}
          >
            Teklif Al
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded transition-colors"
            style={{ color: scrolled ? "#1b3563" : "white" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            {menuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t" style={{ borderColor: "#e4e9f0" }}>
          <div className="container-max py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-3.5 text-sm font-medium text-slate-700 border-b hover:text-navy transition-colors"
                style={{ borderColor: "#f4f6fa" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 flex gap-3">
              <a
                href={`tel:${COMPANY.phone1.replace(/[\s()]/g, "")}`}
                className="flex-1 text-center py-2.5 text-sm font-medium border rounded-sm"
                style={{ borderColor: "#1b3563", color: "#1b3563" }}
              >
                {COMPANY.phone1}
              </a>
              <Link
                href="#iletisim"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-2.5 text-sm font-semibold text-white rounded-sm"
                style={{ backgroundColor: "#00a8d6" }}
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
