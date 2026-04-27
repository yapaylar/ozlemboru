"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/constants";

const WHATSAPP_NUMBER = "903123546484";
const PHONE_RAW = COMPANY.phone1.replace(/[^0-9]/g, "");

export default function FloatingButtons() {
  const [hoveredWa, setHoveredWa] = useState(false);
  const [hoveredPhone, setHoveredPhone] = useState(false);

  return (
    <div className="fixed z-40 flex flex-col gap-2.5 lg:hidden bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] sm:bottom-6 sm:right-6">

      {/* WhatsApp */}
      <div className="flex items-center justify-end gap-3">
        {hoveredWa && (
          <span
            className="text-xs font-light uppercase tracking-widest px-3 py-2 bg-white shadow-md whitespace-nowrap"
            style={{ border: "1px solid #e8e8e8", color: "#333" }}
          >
            WhatsApp ile Yaz
          </span>
        )}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile yazın"
          onMouseEnter={() => setHoveredWa(true)}
          onMouseLeave={() => setHoveredWa(false)}
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.882l6.207-1.448A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.685.861.92-3.574-.234-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center justify-end gap-3">
        {hoveredPhone && (
          <span
            className="text-xs font-light uppercase tracking-widest px-3 py-2 bg-white shadow-md whitespace-nowrap"
            style={{ border: "1px solid #e8e8e8", color: "#333" }}
          >
            {COMPANY.phone1}
          </span>
        )}
        <a
          href={`tel:${PHONE_RAW}`}
          aria-label="Hemen arayın"
          onMouseEnter={() => setHoveredPhone(true)}
          onMouseLeave={() => setHoveredPhone(false)}
          className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: "#000" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
