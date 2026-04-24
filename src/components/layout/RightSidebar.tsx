"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const BG = "#023da6";
const WHATSAPP_NUMBER = "903123546484";
const PHONE_RAW = COMPANY.phone1.replace(/[^0-9]/g, "");

export default function RightSidebar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      className="fixed top-0 right-0 h-screen z-40 hidden lg:flex flex-col items-center transition-all duration-700"
      style={{ width: scrolled ? "64px" : "80px", backgroundColor: BG }}
    >
      {/* ── E-Katalog — header yüksekliğiyle hizalı ── */}
      <div
        className="w-full flex items-center justify-center shrink-0 border-b transition-all duration-700"
        style={{ height: scrolled ? "56px" : "72px", borderColor: "#e4e9f0", backgroundColor: "#6db0e0" }}
      >
        <Link
          href="/urunler"
          className="flex flex-col items-center gap-1.5 text-white transition-opacity hover:opacity-60"
          aria-label="e-Katalog"
        >
          <CatalogIcon className="w-6 h-6" />
          <span className="text-[8px] font-light tracking-[0.12em]" style={{ color: "#fff" }}>
            e-Katalog
          </span>
        </Link>
      </div>

      {/* ── Dikey etiket ── */}
      <div className="flex-1 flex items-center justify-center">
        <span
          className="text-[9px] font-light uppercase tracking-[0.3em] select-none"
          style={{ color: "rgba(255,255,255,0.18)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Özlem İnşaat
        </span>
      </div>

      {/* ── WhatsApp + Telefon (altta, daire içinde) ── */}
      <div className="w-full flex flex-col items-center gap-3 pb-8">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile yazın"
          className="w-10 h-10 flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
        </a>
        <a
          href={`tel:${PHONE_RAW}`}
          aria-label="Hemen arayın"
          className="w-10 h-10 flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <PhoneIcon className="w-4 h-4 text-white" />
        </a>
      </div>
    </aside>
  );
}

function CatalogIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.882l6.207-1.448A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.685.861.92-3.574-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
    </svg>
  );
}
