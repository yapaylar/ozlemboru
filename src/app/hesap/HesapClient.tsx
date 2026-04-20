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

const fmtKg = (n: number) =>
  n > 0 ? n.toLocaleString("tr-TR") : "—";

const SESSION_KEY = "hesap_auth";

// ─── password gate ───────────────────────────────────────────────────────────

function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

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
              style={{ borderColor: error ? "#e53e3e" : "rgba(255,255,255,0.2)", color: "#fff" }}
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

  const hasMeter = rows.some((r) => r.karliMetreFiyat !== null);
  const hasSteel = rows.some((r) => r.steel > 0);
  const hasConta = rows.some((r) => r.contaPrice > 0);
  const hasLabor = rows.some((r) => r.laborPrice > 0);

  return (
    <section className="bg-white border print:break-inside-avoid" style={{ borderColor: "#e0e0e0" }}>
      {/* accordion header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 border-b text-left hover:bg-gray-50 print:hidden"
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
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: "#888" }}
        >
          <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* print-only heading */}
      <div className="hidden print:block px-4 py-2 border-b" style={{ borderColor: "#e0e0e0" }}>
        <h2 className="text-sm font-semibold uppercase tracking-wide">{section.title}</h2>
      </div>

      {isOpen && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse" style={{ minWidth: "860px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8f8f8", borderBottom: "1px solid #e4e4e4" }}>
                {([
                  { label: "Ürün",             note: "",     show: true },
                  { label: "Boy",              note: "mm",   show: hasMeter },
                  { label: "Çimento",          note: "kg",   show: true },
                  { label: "Agrega",           note: "kg",   show: true },
                  { label: "Demir",            note: "kg",   show: hasSteel },
                  { label: "Conta",            note: "₺",    show: hasConta },
                  { label: "İşçilik",          note: "₺",    show: hasLabor },
                  { label: "Ara Toplam",       note: "₺",    show: true },
                  { label: "Genel Gider",      note: "₺",    show: true },
                  { label: "Toplam Maliyet",   note: "₺",    show: true },
                  { label: "Kar",              note: "₺",    show: true },
                  { label: "Karlı Adet Fiyat", note: "₺",    show: true },
                  { label: "Karlı Metre Fiyat", note: "₺/m", show: hasMeter },
                ] as { label: string; note: string; show: boolean }[])
                  .filter((c) => c.show)
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
                  <td className="px-4 py-2.5 text-xs font-semibold tracking-wide whitespace-nowrap" style={{ color: "#000" }}>
                    {row.label}
                  </td>

                  {hasMeter && (
                    <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#777" }}>
                      {row.length > 0 ? row.length.toLocaleString("tr-TR") : <span style={{ color: "#ccc" }}>—</span>}
                    </td>
                  )}

                  <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                    {fmtKg(row.cement)}
                  </td>
                  <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                    {fmtKg(row.aggregate)}
                  </td>

                  {hasSteel && (
                    <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                      {fmtKg(row.steel)}
                    </td>
                  )}

                  {hasConta && (
                    <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                      {row.contaPrice > 0 ? fmt(row.contaPrice) : <span style={{ color: "#ccc" }}>—</span>}
                    </td>
                  )}

                  {hasLabor && (
                    <td className="px-4 py-2.5 text-xs font-light tabular-nums" style={{ color: "#555" }}>
                      {row.laborPrice > 0 ? fmt(row.laborPrice) : <span style={{ color: "#ccc" }}>—</span>}
                    </td>
                  )}

                  <td className="px-4 py-2.5 text-xs tabular-nums font-medium" style={{ color: "#555" }}>
                    {fmt(row.araToplamCost)}
                  </td>
                  <td className="px-4 py-2.5 text-xs tabular-nums font-medium" style={{ color: "#555" }}>
                    {fmt(row.genelGider)}
                  </td>
                  <td className="px-4 py-2.5 text-xs tabular-nums font-medium" style={{ color: "#333" }}>
                    {fmt(row.toplamMaliyet)}
                  </td>
                  <td className="px-4 py-2.5 text-xs tabular-nums font-medium" style={{ color: "#1b3563" }}>
                    {fmt(row.kar)}
                  </td>
                  <td className="px-4 py-2.5 text-xs tabular-nums font-bold" style={{ color: "#000" }}>
                    {fmt(row.karliAdetFiyat)}
                  </td>

                  {hasMeter && (
                    <td className="px-4 py-2.5 text-xs tabular-nums font-semibold" style={{ color: "#1e72ad" }}>
                      {row.karliMetreFiyat !== null ? fmt(row.karliMetreFiyat) : <span style={{ color: "#ccc" }}>—</span>}
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

// ─── unit price inputs ───────────────────────────────────────────────────────

type InputDef = { key: keyof UnitPrices; label: string; unit: string };

const INPUTS: InputDef[] = [
  { key: "cement",       label: "Çimento",      unit: "₺/kg" },
  { key: "aggregate",    label: "Agrega",        unit: "₺/kg" },
  { key: "steel",        label: "Demir",         unit: "₺/kg" },
  { key: "overheadRate", label: "Genel Gider",   unit: "%" },
  { key: "profitRate",   label: "Kar",           unit: "%" },
];

// ─── main ─────────────────────────────────────────────────────────────────────

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

  if (authed === null) return null;
  if (!authed) return <PasswordGate onSuccess={() => setAuthed(true)} />;

  return (
    <main className="min-h-screen bg-[#f5f5f5]">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
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

      {/* ── PRINT HEADER ────────────────────────────────────────────── */}
      <div className="hidden print:block mb-6 px-4">
        <h1 className="text-xl font-semibold uppercase tracking-wide">
          Özlem Beton Boru — Birim Fiyat Hesap
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          {new Date().toLocaleDateString("tr-TR")}
          {" | "}
          Çimento: {fmt(prices.cement)} ₺/kg · Agrega: {fmt(prices.aggregate)} ₺/kg
          {" · "}Demir: {fmt(prices.steel)} ₺/kg
          {" | "}Genel Gider: %{prices.overheadRate} · Kar: %{prices.profitRate}
        </p>
      </div>

      <div className="container-max py-10 print:py-4 print:px-0">

        {/* ── BİRİM FİYAT PANELİ ─────────────────────────────────────── */}
        <section className="bg-white border mb-6 print:hidden" style={{ borderColor: "#e0e0e0" }}>
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "#e0e0e0" }}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
              Malzeme Birim Fiyatları
            </h2>
            <p className="text-xs" style={{ color: "#aaa" }}>
              Değiştirin — tüm tablolar anlık güncellenir
            </p>
          </div>

          <div className="px-6 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
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
                  step={key === "profitRate" || key === "overheadRate" ? 1 : 0.01}
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
            Ara Toplam = Çim + Agr + Dem + Conta + İşçilik
            &nbsp;|&nbsp; Genel Gider = Ara × %GG &nbsp;|&nbsp; Toplam Maliyet = Ara + GG
            &nbsp;|&nbsp; Kar = Toplam × %Kar &nbsp;|&nbsp; Karlı Adet = Toplam + Kar &nbsp;|&nbsp; Karlı Metre = Karlı Adet / boy(m)
          </div>
        </section>

        {/* ── BÖLÜM KONTROLLERİ ──────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-4 print:hidden">
          <p className="text-xs font-light" style={{ color: "#888" }}>
            {PRICE_SECTIONS.length} kategori
          </p>
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => setOpenSections(Object.fromEntries(PRICE_SECTIONS.map((s) => [s.id, true])))}
              className="text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "#555" }}
            >
              Tümünü Aç
            </button>
            <span style={{ color: "#ccc" }}>·</span>
            <button
              onClick={() => setOpenSections(Object.fromEntries(PRICE_SECTIONS.map((s) => [s.id, false])))}
              className="text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
              style={{ color: "#555" }}
            >
              Tümünü Kapat
            </button>
          </div>
        </div>

        {/* ── BÖLÜMLER ────────────────────────────────────────────────── */}
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
