"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import {
  PRICE_SECTIONS,
  DEFAULT_UNIT_PRICES,
  calculateRows,
  HESAP_PASSWORD,
  type UnitPrices,
  type PriceSection,
  type CalculatedRow,
} from "@/lib/pricing";

// ─── helpers ─────────────────────────────────────────────────────────────────

const fmt = (n: number) =>
  n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const SESSION_KEY = "hesap_auth";

// ─── password gate ───────────────────────────────────────────────────────────

function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === HESAP_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onSuccess();
    } else {
      setError(true);
      setValue("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="w-full max-w-sm px-8">
        {/* Logo area */}
        <div className="mb-10 text-center">
          <p className="text-xs font-light uppercase tracking-[0.25em] mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
            Özlem Beton Boru
          </p>
          <h1 className="text-white font-light uppercase tracking-wider" style={{ fontSize: "1.4rem" }}>
            Birim Fiyat Hesap
          </h1>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-[10px] font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Şifre
            </label>
            <input
              id="password"
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="current-password"
              className="w-full px-4 py-3 text-sm font-light bg-transparent border focus:outline-none transition-colors"
              style={{
                borderColor: error ? "#e53e3e" : "rgba(255,255,255,0.2)",
                color: "#fff",
              }}
              placeholder="••••••••"
            />
            {error && (
              <p className="mt-2 text-xs" style={{ color: "#fc8181" }}>
                Yanlış şifre, tekrar deneyin.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-xs font-semibold uppercase tracking-[0.2em] bg-white text-black transition-opacity hover:opacity-80 mt-2"
          >
            Giriş
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] font-light" style={{ color: "rgba(255,255,255,0.2)" }}>
          Bu sayfa yalnızca yetkili kullanıcılara açıktır.
        </p>
      </div>
    </div>
  );
}

// ─── section accordion ───────────────────────────────────────────────────────

type SectionPanelProps = {
  section: PriceSection;
  prices: UnitPrices;
  isOpen: boolean;
  onToggle: () => void;
};

function SectionPanel({ section, prices, isOpen, onToggle }: SectionPanelProps) {
  const rows: CalculatedRow[] = useMemo(
    () => calculateRows(section.items, prices),
    [section.items, prices]
  );

  const hasMeter = rows.some((r) => r.pricePerMeter !== null);
  const hasSteel = rows.some((r) => r.steel > 0);

  return (
    <section className="bg-white border print:break-inside-avoid" style={{ borderColor: "#e0e0e0" }}>
      {/* accordion header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 border-b text-left transition-colors hover:bg-gray-50 print:hidden"
        style={{ borderColor: "#e0e0e0" }}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#111" }}>
            {section.title}
          </h2>
          <span
            className="text-[10px] font-light px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "#f0f0f0", color: "#888" }}
          >
            {section.items.length} kalem
          </span>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: "#888",
          }}
        >
          <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* print-only heading */}
      <div className="hidden print:block px-4 py-2 border-b" style={{ borderColor: "#e0e0e0" }}>
        <h2 className="text-sm font-semibold uppercase tracking-wide">{section.title}</h2>
      </div>

      {/* table */}
      {(isOpen) && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse" style={{ minWidth: hasSteel ? "940px" : "820px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8f8f8", borderBottom: "1px solid #e4e4e4" }}>
                {[
                  { label: "Ürün / Boyut",      note: "",      always: true },
                  { label: "Boy",                note: "mm",    always: hasMeter },
                  { label: "Çimento",            note: "kg",    always: true },
                  { label: "Agrega",             note: "kg",    always: true },
                  { label: "Çakıl",              note: "kg",    always: true },
                  { label: "Su",                 note: "kg",    always: true },
                  { label: "Demir",              note: "kg",    always: hasSteel },
                  { label: "Toplam Maliyet",     note: "₺",     always: true },
                  { label: "Satış Fiyatı",       note: "₺",     always: true },
                  { label: "Adet (KDV'li)",      note: "₺",     always: true },
                  { label: "Metre Fiyatı",       note: "₺/m",   always: hasMeter },
                ]
                  .filter((col) => col.always)
                  .map(({ label, note }) => (
                    <th
                      key={label}
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap"
                      style={{ color: "#666" }}
                    >
                      {label}
                      {note && (
                        <span className="ml-1 font-light normal-case tracking-normal" style={{ color: "#bbb" }}>
                          {note}
                        </span>
                      )}
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.id}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa",
                    borderBottom: "1px solid #f2f2f2",
                  }}
                >
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide" style={{ color: "#000" }}>
                    {row.label}
                  </td>
                  {hasMeter && (
                    <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#777" }}>
                      {row.length > 0 ? row.length.toLocaleString("tr-TR") : <span style={{ color: "#ccc" }}>—</span>}
                    </td>
                  )}
                  <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                    {row.cement.toLocaleString("tr-TR")}
                  </td>
                  <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                    {row.aggregate.toLocaleString("tr-TR")}
                  </td>
                  <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                    {row.gravel.toLocaleString("tr-TR")}
                  </td>
                  <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                    {row.water.toLocaleString("tr-TR")}
                  </td>
                  {hasSteel && (
                    <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                      {row.steel > 0 ? row.steel.toLocaleString("tr-TR") : <span style={{ color: "#ccc" }}>—</span>}
                    </td>
                  )}
                  <td className="px-4 py-2.5 text-xs tabular-nums font-medium" style={{ color: "#333" }}>
                    {fmt(row.materialCost)}
                  </td>
                  <td className="px-4 py-2.5 text-xs tabular-nums font-medium" style={{ color: "#1b3563" }}>
                    {fmt(row.salePrice)}
                  </td>
                  <td className="px-4 py-2.5 text-xs tabular-nums font-bold" style={{ color: "#000" }}>
                    {fmt(row.unitPriceWithVat)}
                  </td>
                  {hasMeter && (
                    <td className="px-4 py-2.5 text-xs tabular-nums font-semibold" style={{ color: "#1e72ad" }}>
                      {row.pricePerMeter !== null ? fmt(row.pricePerMeter) : <span style={{ color: "#ccc" }}>—</span>}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

// ─── input field ─────────────────────────────────────────────────────────────

type InputRow = { key: keyof UnitPrices; label: string; unit: string };

const INPUTS: InputRow[] = [
  { key: "cement",     label: "Çimento",  unit: "₺/kg" },
  { key: "aggregate",  label: "Agrega",   unit: "₺/kg" },
  { key: "gravel",     label: "Çakıl",    unit: "₺/kg" },
  { key: "water",      label: "Su",       unit: "₺/kg" },
  { key: "steel",      label: "Demir",    unit: "₺/kg" },
  { key: "profitRate", label: "KAR",      unit: "%" },
  { key: "vatRate",    label: "KDV",      unit: "%" },
];

// ─── main component ───────────────────────────────────────────────────────────

export default function HesapClient() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [prices, setPrices] = useState<UnitPrices>(DEFAULT_UNIT_PRICES);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => Object.fromEntries(PRICE_SECTIONS.map((s) => [s.id, true]))
  );

  useEffect(() => {
    setAuthed(sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  const handleChange = useCallback((key: keyof UnitPrices, raw: string) => {
    const value = parseFloat(raw.replace(",", "."));
    if (!isNaN(value) && value >= 0) {
      setPrices((prev) => ({ ...prev, [key]: value }));
    }
  }, []);

  const toggleSection = useCallback((id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const expandAll = () =>
    setOpenSections(Object.fromEntries(PRICE_SECTIONS.map((s) => [s.id, true])));
  const collapseAll = () =>
    setOpenSections(Object.fromEntries(PRICE_SECTIONS.map((s) => [s.id, false])));

  // Loading (hydration)
  if (authed === null) return null;

  if (!authed) {
    return <PasswordGate onSuccess={() => setAuthed(true)} />;
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5]">

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <header
        className="relative pt-[80px] print:hidden"
        style={{ backgroundColor: "#0a0a0a", minHeight: "220px" }}
      >
        <div
          className="relative z-10 flex items-end justify-between container-max pb-10"
          style={{ minHeight: "calc(220px - 80px)" }}
        >
          <div>
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Dahili Araç
            </p>
            <h1
              className="font-light uppercase tracking-wide text-white leading-none"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
            >
              Birim Fiyat Hesap
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { sessionStorage.removeItem(SESSION_KEY); setAuthed(false); }}
              className="px-4 py-2 text-xs font-light uppercase tracking-widest border transition-opacity hover:opacity-60"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.4)" }}
            >
              Çıkış
            </button>
            <button
              onClick={() => setPrices(DEFAULT_UNIT_PRICES)}
              className="px-4 py-2 text-xs font-light uppercase tracking-widest border transition-opacity hover:opacity-60"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.6)" }}
            >
              Sıfırla
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-light uppercase tracking-widest bg-white text-black transition-opacity hover:opacity-80"
            >
              Yazdır / PDF
            </button>
          </div>
        </div>
      </header>

      {/* ── PRINT HEADER ──────────────────────────────────────────── */}
      <div className="hidden print:block mb-6 px-4">
        <h1 className="text-xl font-semibold uppercase tracking-wide">
          Özlem Beton Boru — Birim Fiyat Hesap
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          {new Date().toLocaleDateString("tr-TR")}
          {" | "}
          Çimento: {fmt(prices.cement)} ₺/kg · Agrega: {fmt(prices.aggregate)} ₺/kg · Çakıl: {fmt(prices.gravel)} ₺/kg
          {" · "}Su: {fmt(prices.water)} ₺/kg · Demir: {fmt(prices.steel)} ₺/kg
          {" | "}KAR: %{prices.profitRate} · KDV: %{prices.vatRate}
        </p>
      </div>

      <div className="container-max py-10 print:py-4 print:px-0">

        {/* ── BİRİM FİYAT GİRDİ PANELİ ─────────────────────────── */}
        <section className="bg-white border mb-6 print:hidden" style={{ borderColor: "#e0e0e0" }}>
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "#e0e0e0" }}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
              Malzeme Birim Fiyatları
            </h2>
            <p className="text-xs" style={{ color: "#aaa" }}>
              Değiştirin — tüm tablolar anlık güncellenir
            </p>
          </div>

          <div className="px-6 py-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5">
            {INPUTS.map(({ key, label, unit }) => (
              <div key={key}>
                <label
                  className="block text-[10px] font-semibold uppercase tracking-[0.15em] mb-2"
                  style={{ color: "#888" }}
                >
                  {label}
                  <span className="ml-1 font-light normal-case tracking-normal" style={{ color: "#bbb" }}>
                    {unit}
                  </span>
                </label>
                <input
                  type="number"
                  min={0}
                  step={key === "profitRate" || key === "vatRate" ? 1 : 0.01}
                  defaultValue={DEFAULT_UNIT_PRICES[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="w-full border px-3 py-2 text-sm font-light focus:outline-none focus:border-black transition-colors"
                  style={{ borderColor: "#d0d0d0", color: "#000", backgroundColor: "#fafafa" }}
                />
              </div>
            ))}
          </div>

          <div
            className="px-6 py-3 border-t text-[11px] font-light"
            style={{ borderColor: "#f0f0f0", color: "#aaa", backgroundColor: "#fafafa" }}
          >
            Maliyet = (Çimento + Agrega + Çakıl + Su + Demir) × birim fiyat &nbsp;|&nbsp;
            Satış = Maliyet × (1 + KAR%) &nbsp;|&nbsp;
            Adet (KDV&apos;li) = Satış × (1 + KDV%) &nbsp;|&nbsp;
            Metre Fiyatı = Adet / boy(m)
          </div>
        </section>

        {/* ── BÖLÜM KONTROLLERI ────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-4 print:hidden">
          <p className="text-xs font-light" style={{ color: "#888" }}>
            {PRICE_SECTIONS.length} kategori
          </p>
          <div className="flex gap-2 ml-auto">
            <button
              onClick={expandAll}
              className="text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "#555" }}
            >
              Tümünü Aç
            </button>
            <span style={{ color: "#ccc" }}>·</span>
            <button
              onClick={collapseAll}
              className="text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "#555" }}
            >
              Tümünü Kapat
            </button>
          </div>
        </div>

        {/* ── KATEGORİ BÖLÜMLER ────────────────────────────────────── */}
        <div className="space-y-3">
          {PRICE_SECTIONS.map((section) => (
            <SectionPanel
              key={section.id}
              section={section}
              prices={prices}
              isOpen={openSections[section.id] ?? true}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </div>

        {/* ── ALT NOT ───────────────────────────────────────────────── */}
        <p className="mt-6 text-xs font-light print:hidden" style={{ color: "#aaa" }}>
          Malzeme miktarları{" "}
          <code className="font-mono text-[11px]">src/lib/pricing.ts</code> dosyasından,
          şifre{" "}
          <code className="font-mono text-[11px]">HESAP_PASSWORD</code> sabitinden güncellenir.
        </p>
      </div>
    </main>
  );
}
