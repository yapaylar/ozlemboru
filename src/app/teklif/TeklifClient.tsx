"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Printer, Trash2, LogOut } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { HESAP_PASSWORD } from "@/lib/pricing";
import { TEKLIF_CATALOG, type CatalogSection, type CatalogItem } from "@/lib/teklif-catalog";
import {
  defaultTeklifMeta,
  fmtTeklifMoney,
  lineTutar,
  type TeklifLine,
  type TeklifMeta,
} from "@/lib/teklif-shared";
import TeklifFormDocument from "@/components/teklif/TeklifFormDocument";

export type { TeklifLine, TeklifMeta };

const SESSION_KEY = "teklif_auth";
const fmtMoney = fmtTeklifMoney;

// ─── Şifre ekranı ────────────────────────────────────────────────────────────

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
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="w-full max-w-sm px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-light uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.3)" }}>
            {COMPANY.brandName}
          </p>
          <h1 className="font-light uppercase tracking-wider text-white" style={{ fontSize: "1.4rem" }}>
            Teklif
          </h1>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="teklif-password"
              className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Şifre
            </label>
            <input
              id="teklif-password"
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="current-password"
              className="w-full border bg-transparent px-4 py-3 text-sm font-light focus:outline-none"
              style={{ borderColor: error ? "#e53e3e" : "rgba(255,255,255,0.2)", color: "#fff" }}
              placeholder="••••••••"
            />
            {error && (
              <p className="mt-2 text-xs" style={{ color: "#fc8181" }}>Yanlış şifre.</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-2 w-full bg-white py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-80"
          >
            Giriş
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Ana bileşen ──────────────────────────────────────────────────────────────

export default function TeklifClient() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [meta, setMeta] = useState<TeklifMeta>(() => defaultTeklifMeta());
  const [lines, setLines] = useState<TeklifLine[]>([]);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, false]))
  );
  const [search, setSearch] = useState("");

  const [picker, setPicker] = useState<{ section: CatalogSection; item: CatalogItem } | null>(null);
  const [draftQty, setDraftQty] = useState("1");
  const [draftPrice, setDraftPrice] = useState("");
  const [draftIsk, setDraftIsk] = useState("0");

  useEffect(() => { setAuthed(sessionStorage.getItem(SESSION_KEY) === "1"); }, []);

  const tabloToplam = useMemo(() => lines.reduce((s, l) => s + lineTutar(l), 0), [lines]);
  const araToplam   = useMemo(() => Math.max(0, tabloToplam - meta.toplamIskontoTutar), [tabloToplam, meta.toplamIskontoTutar]);
  const kdvTutari   = useMemo(() => araToplam * (meta.kdvOrani / 100), [araToplam, meta.kdvOrani]);
  const genelToplam = useMemo(() => araToplam + kdvTutari, [araToplam, kdvTutari]);

  const closePicker = useCallback(() => setPicker(null), []);

  const openPicker = useCallback((section: CatalogSection, item: CatalogItem) => {
    setPicker({ section, item });
    setDraftQty("1");
    setDraftPrice(item.defaultPrice ? String(item.defaultPrice) : "");
    setDraftIsk("0");
  }, []);

  const addLine = useCallback(() => {
    if (!picker) return;
    const qty   = parseFloat(draftQty.replace(",", "."));
    const price = parseFloat(draftPrice.replace(",", "."));
    const isk   = parseFloat(draftIsk.replace(",", "."));
    if (isNaN(qty) || qty <= 0 || isNaN(price) || price < 0) return;
    setLines((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sectionId: picker.section.id,
        sectionTitle: picker.section.title,
        productId: picker.item.id,
        label: picker.item.label,
        unit: picker.item.unit,
        quantity: qty,
        unitPrice: price,
        discountPct: !isNaN(isk) && isk >= 0 && isk <= 100 ? isk : 0,
      },
    ]);
    closePicker();
  }, [picker, draftQty, draftPrice, draftIsk, closePicker]);

  const removeLine = useCallback((id: string) => setLines((prev) => prev.filter((l) => l.id !== id)), []);

  const updateLine = useCallback(
    (id: string, patch: Partial<Pick<TeklifLine, "quantity" | "unitPrice" | "discountPct">>) =>
      setLines((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l))),
    []
  );

  const patchMeta = useCallback(<K extends keyof TeklifMeta>(key: K, value: TeklifMeta[K]) => {
    setMeta((m) => ({ ...m, [key]: value }));
  }, []);

  // ESC ile modal kapat
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closePicker(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closePicker]);

  if (authed === null) return null;
  if (!authed) return <PasswordGate onSuccess={() => setAuthed(true)} />;

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-[68px] sm:pt-[72px]">

      {/* Üst araç çubuğu */}
      <header
        className="sticky top-[68px] sm:top-[72px] z-40 border-b print:hidden"
        style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="container-max flex items-center justify-between py-2.5">
          {/* Sol: başlık */}
          <div className="flex items-center gap-3">
            <div
              className="hidden h-7 w-px sm:block"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            />
            <div>
              <span className="text-[11px] font-light tracking-widest text-white/90 uppercase">
                Teklif
              </span>
              <span
                className="ml-2 hidden text-[10px] sm:inline"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {COMPANY.brandName}
              </span>
            </div>
          </div>

          {/* Sağ: aksiyonlar */}
          <div className="flex items-center divide-x divide-white/[0.08]">
            {/* Temizle */}
            <button
              type="button"
              title="Teklifi temizle"
              onClick={() => { setLines([]); setMeta(defaultTeklifMeta()); }}
              className="group flex items-center gap-2 px-4 py-2.5 text-[11px] transition-colors hover:bg-white/5"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <Trash2 size={13} className="group-hover:text-white/70 transition-colors" />
              <span className="hidden sm:inline">Temizle</span>
            </button>

            {/* Yazdır */}
            <button
              type="button"
              title="Yazdır / PDF"
              onClick={() => window.print()}
              className="group flex items-center gap-2 px-4 py-2.5 text-[11px] font-medium transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <Printer size={13} className="transition-colors group-hover:text-white" />
              <span>Yazdır</span>
            </button>

            {/* Çıkış */}
            <button
              type="button"
              title="Çıkış"
              onClick={() => { sessionStorage.removeItem(SESSION_KEY); setAuthed(false); }}
              className="group flex items-center gap-2 px-4 py-2.5 text-[11px] transition-colors hover:bg-white/5"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              <LogOut size={13} className="transition-colors group-hover:text-white/50" />
              <span className="hidden sm:inline">Çıkış</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container-max space-y-6 py-8 print:hidden">

        {/* Müşteri ve teklif bilgileri */}
        <section className="border bg-white p-5 sm:p-6" style={{ borderColor: "#e0e0e0" }}>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
            Müşteri ve teklif bilgileri
          </h2>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <div className="space-y-3">
              {(
                [
                  ["unvan", "Ünvan"],
                  ["yetkili", "Yetkili"],
                  ["adres", "Adres"],
                  ["telefon", "Telefon"],
                  ["faks", "Faks"],
                ] as const
              ).map(([key, lab]) => (
                <label key={key} className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>{lab}</span>
                  <input
                    type="text"
                    value={meta[key]}
                    onChange={(e) => patchMeta(key, e.target.value)}
                    className="mt-1 w-full border px-3 py-2 text-sm"
                    style={{ borderColor: "#ddd" }}
                  />
                </label>
              ))}
            </div>
            <div className="space-y-3">
              {(
                [
                  ["teklifNo", "Teklif No"],
                  ["teklifTarihi", "Teklif Tarihi"],
                  ["teklifSuresi", "Teklif Süresi"],
                  ["sevkYeri", "Sevk Yeri"],
                ] as const
              ).map(([key, lab]) => (
                <label key={key} className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>{lab}</span>
                  <input
                    type="text"
                    value={meta[key]}
                    onChange={(e) => patchMeta(key, e.target.value)}
                    className="mt-1 w-full border px-3 py-2 text-sm"
                    style={{ borderColor: "#ddd" }}
                  />
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Ürün seçimi + Teklif satırları */}
        <div className="grid gap-6 lg:grid-cols-[1fr_min(420px,42%)] lg:items-start">

          {/* Sol: ürün kataloğu */}
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
                Ürün seçimi
              </h2>
              <div className="flex gap-3 text-[10px]" style={{ color: "#999" }}>
                <button type="button" className="hover:underline"
                  onClick={() => setOpenSections(Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, true])))}>
                  Tümünü aç
                </button>
                <span>·</span>
                <button type="button" className="hover:underline"
                  onClick={() => setOpenSections(Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, false])))}>
                  Kapat
                </button>
              </div>
            </div>

            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value.trim())
                  setOpenSections(Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, true])));
              }}
              placeholder="Ürün ara..."
              className="mb-3 w-full border px-3 py-2 text-sm"
              style={{ borderColor: "#ddd" }}
            />

            <div className="space-y-1.5">
              {TEKLIF_CATALOG.map((section) => {
                const q = search.trim().toLowerCase();
                const filtered = q
                  ? section.items.filter((i) => i.label.toLowerCase().includes(q))
                  : section.items;
                if (q && filtered.length === 0) return null;
                const isOpen = !!openSections[section.id];
                return (
                  <div key={section.id} className="overflow-hidden border bg-white" style={{ borderColor: "#e0e0e0" }}>
                    <button
                      type="button"
                      onClick={() => setOpenSections((prev) => ({ ...prev, [section.id]: !prev[section.id] }))}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-gray-50"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#111" }}>
                        {section.title}
                      </span>
                      <span className="text-[10px]" style={{ color: "#bbb" }}>
                        {filtered.length} {isOpen ? "▲" : "▼"}
                      </span>
                    </button>
                    {isOpen && (
                      <table className="w-full border-t text-xs" style={{ borderColor: "#eee" }}>
                        <tbody>
                          {filtered.map((item, idx) => (
                            <tr
                              key={item.id}
                              className="cursor-pointer transition-colors hover:bg-blue-50"
                              style={{ backgroundColor: idx % 2 === 0 ? "#fafafa" : "#fff" }}
                              onClick={() => openPicker(section, item)}
                            >
                              <td className="px-3 py-1.5 font-medium" style={{ color: "#111" }}>{item.label}</td>
                              <td className="w-24 px-2 py-1.5 text-right tabular-nums" style={{ color: "#555" }}>
                                {item.defaultPrice ? fmtMoney(item.defaultPrice) : "—"}
                              </td>
                              <td className="w-12 px-2 py-1.5 text-right text-[10px] uppercase tracking-wide" style={{ color: "#bbb" }}>
                                {item.unit}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Sağ: satırlar + özet + ödeme + notlar */}
          <aside className="space-y-4 lg:sticky lg:top-[152px]">

            {/* Satırlar ve özet */}
            <div className="border bg-white p-5" style={{ borderColor: "#e0e0e0" }}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
                Teklif satırları
              </h2>
              {lines.length === 0 ? (
                <p className="text-xs leading-relaxed" style={{ color: "#bbb" }}>
                  Soldaki listeden bir ürüne tıklayarak ekleyin.
                </p>
              ) : (
                <div className="max-h-[min(50vh,500px)] space-y-2 overflow-y-auto pr-1">
                  {lines.map((line) => (
                    <div key={line.id} className="border p-3 text-xs" style={{ borderColor: "#eee" }}>
                      <div className="mb-2 flex justify-between gap-2">
                        <span className="font-medium leading-snug" style={{ color: "#111" }}>{line.label}</span>
                        <button
                          type="button"
                          onClick={() => removeLine(line.id)}
                          className="shrink-0 text-[10px] opacity-40 hover:opacity-100"
                          style={{ color: "#c00" }}
                        >
                          Sil
                        </button>
                      </div>
                      <div className="mb-2 grid grid-cols-3 gap-2">
                        {([
                          ["Miktar",       "quantity",    0.01, 0.01,  99999  ],
                          ["Birim fiyat",  "unitPrice",   0,    0.01,  9999999],
                          ["İsk. %",       "discountPct", 0,    0.5,   100    ],
                        ] as [string, keyof Pick<TeklifLine,"quantity"|"unitPrice"|"discountPct">, number, number, number][]).map(
                          ([lbl, field, min, step, max]) => (
                            <label key={field} className="block">
                              <span className="text-[9px] uppercase tracking-wide" style={{ color: "#999" }}>{lbl}</span>
                              <input
                                type="number"
                                min={min} max={max} step={step}
                                value={line[field]}
                                onChange={(e) => {
                                  const v = parseFloat(e.target.value.replace(",", "."));
                                  if (!isNaN(v) && v >= min && v <= max) updateLine(line.id, { [field]: v });
                                }}
                                className="mt-1 w-full border px-2 py-1.5 text-xs"
                                style={{ borderColor: "#ddd" }}
                              />
                            </label>
                          )
                        )}
                      </div>
                      <p className="tabular-nums text-[11px]" style={{ color: "#555" }}>
                        Tutar: <strong style={{ color: "#000" }}>{fmtMoney(lineTutar(line))} ₺</strong>
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 space-y-3 border-t pt-4" style={{ borderColor: "#e8e8e8" }}>
                <div className="flex justify-between text-xs">
                  <span style={{ color: "#666" }}>Toplam</span>
                  <span className="tabular-nums font-medium">{fmtMoney(tabloToplam)} ₺</span>
                </div>
                <label className="flex items-center justify-between gap-2 text-xs">
                  <span style={{ color: "#666" }}>İskonto (₺)</span>
                  <input
                    type="number" min={0} step={0.01}
                    value={meta.toplamIskontoTutar || ""}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value.replace(",", "."));
                      patchMeta("toplamIskontoTutar", !isNaN(v) && v >= 0 ? v : 0);
                    }}
                    className="w-28 border px-2 py-1 text-right tabular-nums"
                    style={{ borderColor: "#ddd" }}
                  />
                </label>
                <div className="flex justify-between text-xs font-semibold">
                  <span style={{ color: "#333" }}>Ara Toplam</span>
                  <span className="tabular-nums" style={{ color: "#1b3563" }}>{fmtMoney(araToplam)} ₺</span>
                </div>
                <label className="flex items-center justify-between gap-2 text-xs">
                  <span style={{ color: "#666" }}>KDV %</span>
                  <input
                    type="number" min={0} max={100} step={1}
                    value={meta.kdvOrani}
                    onChange={(e) => {
                      const v = parseFloat(e.target.value.replace(",", "."));
                      patchMeta("kdvOrani", !isNaN(v) && v >= 0 ? v : 0);
                    }}
                    className="w-20 border px-2 py-1 text-right"
                    style={{ borderColor: "#ddd" }}
                  />
                </label>
                <div className="flex justify-between text-xs">
                  <span style={{ color: "#666" }}>KDV Tutarı</span>
                  <span className="tabular-nums">{fmtMoney(kdvTutari)} ₺</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-sm font-bold" style={{ borderColor: "#e8e8e8" }}>
                  <span style={{ color: "#111" }}>Genel Toplam</span>
                  <span className="tabular-nums" style={{ color: "#1b3563" }}>{fmtMoney(genelToplam)} ₺</span>
                </div>
              </div>
            </div>

            {/* Ödeme ve teslimat */}
            <div className="space-y-3 border bg-white p-5" style={{ borderColor: "#e0e0e0" }}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#888" }}>
                Ödeme ve teslimat
              </h3>
              {([["odemeSekli", "Ödeme şekli"], ["teslimatSuresi", "Teslimat süresi"]] as const).map(([key, lab]) => (
                <label key={key} className="block text-xs">
                  <span className="text-[10px] uppercase tracking-wide" style={{ color: "#999" }}>{lab}</span>
                  <input
                    type="text"
                    value={meta[key]}
                    onChange={(e) => patchMeta(key, e.target.value)}
                    className="mt-1 w-full border px-3 py-2"
                    style={{ borderColor: "#ddd" }}
                  />
                </label>
              ))}
              <div>
                <span className="mb-2 block text-[10px] uppercase tracking-wide" style={{ color: "#999" }}>Nakliye</span>
                <div className="flex gap-4">
                  {(["dahil", "harici"] as const).map((v) => (
                    <label key={v} className="flex cursor-pointer items-center gap-2 text-xs">
                      <input type="radio" name="nakliye" checked={meta.nakliye === v} onChange={() => patchMeta("nakliye", v)} />
                      {v.toUpperCase()}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Açıklama */}
            <label className="block border bg-white p-5" style={{ borderColor: "#e0e0e0" }}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>
                Teklif açıklaması
              </span>
              <textarea
                value={meta.teklifAciklamasi}
                onChange={(e) => patchMeta("teklifAciklamasi", e.target.value)}
                rows={4}
                className="mt-2 w-full resize-y border px-3 py-2 text-sm"
                style={{ borderColor: "#ddd" }}
                placeholder="Termin, notlar..."
              />
            </label>
          </aside>
        </div>

        {/* Önizleme */}
        <section className="print:hidden">
          <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
            Önizleme
          </h2>
          <p className="mb-4 text-[11px]" style={{ color: "#aaa" }}>
            Yazdır / PDF çıktısı bu düzenle üretilir. Tarayıcının üstbilgi/altbilgi seçeneğini kapatın.
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-100/90 px-3 py-8 shadow-inner sm:px-6">
            <TeklifFormDocument
              meta={meta}
              lines={lines}
              tabloToplam={tabloToplam}
              araToplam={araToplam}
              kdvTutari={kdvTutari}
              genelToplam={genelToplam}
              sheetClassName="teklif-preview-sheet mb-6 rounded-sm border border-neutral-300 bg-white px-4 py-6 shadow-lg sm:px-8"
            />
          </div>
        </section>

      </div>

      {/* Modal: ürün ekle */}
      {picker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="teklif-modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) closePicker(); }}
        >
          <div className="w-full max-w-sm border bg-white shadow-xl" style={{ borderColor: "#e0e0e0" }}>
            <div className="flex items-start justify-between gap-3 border-b px-5 py-4" style={{ borderColor: "#eee" }}>
              <div>
                <h3 id="teklif-modal-title" className="text-sm font-semibold leading-snug" style={{ color: "#111" }}>
                  {picker.item.label}
                </h3>
                <p className="mt-0.5 text-[10px] uppercase tracking-wide" style={{ color: "#999" }}>
                  {picker.section.title} · {picker.item.unit}
                </p>
              </div>
              <button type="button" onClick={closePicker} className="px-1 text-xl leading-none opacity-40 hover:opacity-100" aria-label="Kapat">
                ×
              </button>
            </div>
            <div className="space-y-4 p-5">
              <div className="grid grid-cols-3 gap-3">
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>Miktar</span>
                  <input
                    type="number" min={0.01} step={0.01}
                    value={draftQty}
                    onChange={(e) => setDraftQty(e.target.value)}
                    className="mt-2 w-full border px-3 py-2 text-sm"
                    style={{ borderColor: "#ccc" }}
                    autoFocus
                  />
                </label>
                <label className="col-span-2 block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>Birim fiyat (₺)</span>
                  <input
                    type="number" min={0} step={0.01}
                    value={draftPrice}
                    onChange={(e) => setDraftPrice(e.target.value)}
                    className="mt-2 w-full border px-3 py-2 text-sm"
                    style={{ borderColor: "#ccc" }}
                    placeholder="0,00"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>İskonto %</span>
                <input
                  type="number" min={0} max={100} step={0.5}
                  value={draftIsk}
                  onChange={(e) => setDraftIsk(e.target.value)}
                  className="mt-2 w-full border px-3 py-2 text-sm"
                  style={{ borderColor: "#ccc" }}
                />
              </label>
              <button
                type="button"
                onClick={addLine}
                className="w-full py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1b3563" }}
              >
                Teklife ekle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Yazdırma çıktısı */}
      <section className="hidden bg-white text-black print:block teklif-print-sheet">
        <TeklifFormDocument
          meta={meta}
          lines={lines}
          tabloToplam={tabloToplam}
          araToplam={araToplam}
          kdvTutari={kdvTutari}
          genelToplam={genelToplam}
        />
      </section>
    </main>
  );
}
