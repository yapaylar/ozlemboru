"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

function fmtDefaultPrice(n: number) {
  if (!n) return "";
  return n.toLocaleString("tr-TR", { minimumFractionDigits: 2 });
}

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
        <div className="mb-10 text-center">
          <p className="text-xs font-light uppercase tracking-[0.25em] mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
            {COMPANY.brandName}
          </p>
          <h1 className="text-white font-light uppercase tracking-wider" style={{ fontSize: "1.4rem" }}>
            Teklif
          </h1>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="teklif-password"
              className="block text-[10px] font-semibold uppercase tracking-[0.2em] mb-2"
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
              className="w-full px-4 py-3 text-sm font-light bg-transparent border focus:outline-none transition-colors"
              style={{ borderColor: error ? "#e53e3e" : "rgba(255,255,255,0.2)", color: "#fff" }}
              placeholder="••••••••"
            />
            {error && (
              <p className="mt-2 text-xs" style={{ color: "#fc8181" }}>
                Yanlış şifre.
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
      </div>
    </div>
  );
}

export default function TeklifClient() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [meta, setMeta] = useState<TeklifMeta>(() => defaultTeklifMeta());
  const [lines, setLines] = useState<TeklifLine[]>([]);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, false]))
  );
  const [search, setSearch] = useState("");

  const [picker, setPicker] = useState<{
    section: CatalogSection;
    item: CatalogItem;
  } | null>(null);
  const [draftQty, setDraftQty] = useState("1");
  const [draftPrice, setDraftPrice] = useState("");
  const [draftIsk, setDraftIsk] = useState("0");

  useEffect(() => {
    setAuthed(sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  const tabloToplam = useMemo(() => lines.reduce((s, l) => s + lineTutar(l), 0), [lines]);

  const araToplam = useMemo(
    () => Math.max(0, tabloToplam - meta.toplamIskontoTutar),
    [tabloToplam, meta.toplamIskontoTutar]
  );

  const kdvTutari = useMemo(() => araToplam * (meta.kdvOrani / 100), [araToplam, meta.kdvOrani]);

  const genelToplam = useMemo(() => araToplam + kdvTutari, [araToplam, kdvTutari]);

  const openPicker = useCallback((section: CatalogSection, item: CatalogItem) => {
    setPicker({ section, item });
    setDraftQty("1");
    setDraftPrice(item.defaultPrice ? String(item.defaultPrice) : "");
    setDraftIsk("0");
  }, []);

  const closePicker = useCallback(() => setPicker(null), []);

  const addLine = useCallback(() => {
    if (!picker) return;
    const qty = parseFloat(draftQty.replace(",", "."));
    const price = parseFloat(draftPrice.replace(",", "."));
    const isk = parseFloat(draftIsk.replace(",", "."));
    if (isNaN(qty) || qty <= 0 || isNaN(price) || price < 0) return;
    const discountPct = !isNaN(isk) && isk >= 0 && isk <= 100 ? isk : 0;

    const line: TeklifLine = {
      id: crypto.randomUUID(),
      sectionId: picker.section.id,
      sectionTitle: picker.section.title,
      productId: picker.item.id,
      label: picker.item.label,
      unit: picker.item.unit,
      quantity: qty,
      unitPrice: price,
      discountPct,
    };
    setLines((prev) => [...prev, line]);
    closePicker();
  }, [picker, draftQty, draftPrice, draftIsk, closePicker]);

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const updateLine = useCallback(
    (
      id: string,
      patch: Partial<Pick<TeklifLine, "quantity" | "unitPrice" | "discountPct">>
    ) => {
      setLines((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
    },
    []
  );

  const patchMeta = useCallback(<K extends keyof TeklifMeta>(key: K, value: TeklifMeta[K]) => {
    setMeta((m) => ({ ...m, [key]: value }));
  }, []);

  const handlePrint = () => window.print();

  if (authed === null) return null;
  if (!authed) return <PasswordGate onSuccess={() => setAuthed(true)} />;

  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-[68px] sm:pt-[72px]">
      {/*
        Navbar layout’ta fixed (z-50, ~68–72px). Teklif çubuğu onun altında kalmalı;
        sticky iken top-0 yapılırsa site menüsünün altına kayıyor — top ile hizala.
      */}
      <header
        className="sticky top-[68px] sm:top-[72px] z-40 border-b print:hidden"
        style={{ backgroundColor: "#0a0a0a", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-max flex flex-col gap-2 py-3 sm:py-4">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <div>
              <p className="text-[10px] font-light uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Dahili — Teklif oluştur
              </p>
              <h1 className="text-lg font-light uppercase tracking-wide text-white mt-1">Teklif</h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  sessionStorage.removeItem(SESSION_KEY);
                  setAuthed(false);
                }}
                className="px-3 py-2 text-[10px] font-light uppercase tracking-widest border transition-opacity hover:opacity-60"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.45)" }}
              >
                Çıkış
              </button>
              <button
                type="button"
                onClick={() => {
                  setLines([]);
                  setMeta(defaultTeklifMeta());
                }}
                className="px-3 py-2 text-[10px] font-light uppercase tracking-widest border transition-opacity hover:opacity-60"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.65)" }}
              >
                Teklifi Temizle
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 text-[10px] font-semibold uppercase tracking-widest bg-white text-black transition-opacity hover:opacity-85"
              >
                Yazdır / PDF
              </button>
            </div>
          </div>
          <p className="max-w-3xl text-[9px] font-light leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>
            PDF üstündeki tarih / başlık / adres / sayfa satırları tarayıcıya aittir; kapatmak için yazdırma penceresinde «Üstbilgi ve altbilgiler» seçeneğini kapatın (Chrome / Edge).
          </p>
        </div>
      </header>

      <div className="container-max py-8 print:hidden space-y-6">
        {/* ── Müşteri & teklif bilgileri ───────────────────── */}
        <section className="bg-white border p-5 sm:p-6" style={{ borderColor: "#e0e0e0" }}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#333" }}>
            Müşteri ve teklif bilgileri
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
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
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>
                    {lab}
                  </span>
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
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>
                    {lab}
                  </span>
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

        {/* ── Kağıt önizleme (referans form düzeni) ───────── */}
        <section className="print:hidden">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
            Teklif önizlemesi
          </h2>
          <p className="mb-4 text-[11px] font-light" style={{ color: "#888" }}>
            Yazdır / PDF çıktısı bu düzenle üretilir. Verileri sol üstteki alanlardan ve satırlardan düzenleyin.
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-100/90 px-3 py-8 shadow-inner sm:px-6">
            <TeklifFormDocument
              meta={meta}
              lines={lines}
              tabloToplam={tabloToplam}
              araToplam={araToplam}
              kdvTutari={kdvTutari}
              genelToplam={genelToplam}
              sheetClassName="teklif-preview-sheet rounded-sm border border-neutral-400 bg-white px-4 py-6 shadow-xl sm:px-8"
            />
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[1fr_min(440px,42%)] lg:items-start">
          {/* ── Ürün kataloğu ─────────────────────────────── */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#333" }}>
                Ürün seçimi
              </h2>
              <div className="flex gap-2 text-[10px] uppercase tracking-widest">
                <button
                  type="button"
                  className="opacity-60 hover:opacity-100"
                  style={{ color: "#555" }}
                  onClick={() =>
                    setOpenSections(Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, true])))
                  }
                >
                  Tümünü Aç
                </button>
                <span style={{ color: "#ccc" }}>·</span>
                <button
                  type="button"
                  className="opacity-60 hover:opacity-100"
                  style={{ color: "#555" }}
                  onClick={() =>
                    setOpenSections(Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, false])))
                  }
                >
                  Kapat
                </button>
              </div>
            </div>

            {/* Arama */}
            <div className="mb-3">
              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (e.target.value.trim()) {
                    setOpenSections(Object.fromEntries(TEKLIF_CATALOG.map((s) => [s.id, true])));
                  }
                }}
                placeholder="Ürün ara..."
                className="w-full border px-3 py-2 text-sm"
                style={{ borderColor: "#ddd" }}
              />
            </div>

            <div className="space-y-2">
              {TEKLIF_CATALOG.map((section) => {
                const q = search.trim().toLowerCase();
                const filtered = q
                  ? section.items.filter((i) => i.label.toLowerCase().includes(q))
                  : section.items;
                if (q && filtered.length === 0) return null;
                return (
                  <div key={section.id} className="bg-white border overflow-hidden" style={{ borderColor: "#e0e0e0" }}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSections((prev) => ({ ...prev, [section.id]: !prev[section.id] }))
                      }
                      className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-gray-50"
                      style={{ borderColor: "#eee" }}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#111" }}>
                        {section.title}
                      </span>
                      <span className="text-[10px]" style={{ color: "#aaa" }}>
                        {filtered.length} {openSections[section.id] ? "▲" : "▼"}
                      </span>
                    </button>
                    {openSections[section.id] && (
                      <table className="w-full border-t text-xs" style={{ borderColor: "#eee" }}>
                        <tbody>
                          {filtered.map((item, idx) => (
                            <tr
                              key={item.id}
                              className="cursor-pointer hover:bg-blue-50 transition-colors"
                              style={{ backgroundColor: idx % 2 === 0 ? "#fafafa" : "#fff" }}
                              onClick={() => openPicker(section, item)}
                            >
                              <td className="px-3 py-2 font-medium" style={{ color: "#111" }}>
                                {item.label}
                              </td>
                              <td className="px-2 py-2 text-right tabular-nums whitespace-nowrap" style={{ color: "#555", width: "90px" }}>
                                {item.defaultPrice ? fmtMoney(item.defaultPrice) : "—"}
                              </td>
                              <td className="px-2 py-2 text-right whitespace-nowrap text-[10px] uppercase tracking-wide" style={{ color: "#aaa", width: "50px" }}>
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

          {/* ── Teklif satırları & özet ───────────────────── */}
          <aside className="lg:sticky lg:top-[calc(72px+5.75rem)] space-y-4">
            <div className="bg-white border p-5" style={{ borderColor: "#e0e0e0" }}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#333" }}>
                Teklif satırları
              </h2>

              {lines.length === 0 ? (
                <p className="text-xs font-light leading-relaxed" style={{ color: "#aaa" }}>
                  Soldan ürün seçin; adet, birim fiyat ve isteğe bağlı iskonto girin.
                </p>
              ) : (
                <div className="space-y-3 max-h-[min(50vh,480px)] overflow-y-auto pr-1">
                  {lines.map((line) => (
                    <div key={line.id} className="border p-3 text-xs" style={{ borderColor: "#eee" }}>
                      <div className="flex justify-between gap-2 mb-2">
                        <span className="font-medium leading-snug" style={{ color: "#111" }}>
                          {line.label}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeLine(line.id)}
                          className="shrink-0 text-[10px] uppercase tracking-wide opacity-50 hover:opacity-100"
                          style={{ color: "#c00" }}
                        >
                          Sil
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <label className="block">
                          <span className="text-[9px] uppercase tracking-wide" style={{ color: "#999" }}>
                            Miktar
                          </span>
                          <input
                            type="number"
                            min={0.01}
                            step={0.01}
                            value={line.quantity}
                            onChange={(e) => {
                              const v = parseFloat(e.target.value.replace(",", "."));
                              if (!isNaN(v) && v > 0) updateLine(line.id, { quantity: v });
                            }}
                            className="mt-1 w-full border px-2 py-1.5 text-xs"
                            style={{ borderColor: "#ddd" }}
                          />
                        </label>
                        <label className="block">
                          <span className="text-[9px] uppercase tracking-wide" style={{ color: "#999" }}>
                            Birim fiyat
                          </span>
                          <input
                            type="number"
                            min={0}
                            step={0.01}
                            value={line.unitPrice}
                            onChange={(e) => {
                              const v = parseFloat(e.target.value.replace(",", "."));
                              if (!isNaN(v) && v >= 0) updateLine(line.id, { unitPrice: v });
                            }}
                            className="mt-1 w-full border px-2 py-1.5 text-xs"
                            style={{ borderColor: "#ddd" }}
                          />
                        </label>
                        <label className="block">
                          <span className="text-[9px] uppercase tracking-wide" style={{ color: "#999" }}>
                            İsk. %
                          </span>
                          <input
                            type="number"
                            min={0}
                            max={100}
                            step={0.5}
                            value={line.discountPct}
                            onChange={(e) => {
                              const v = parseFloat(e.target.value.replace(",", "."));
                              if (!isNaN(v) && v >= 0 && v <= 100) updateLine(line.id, { discountPct: v });
                            }}
                            className="mt-1 w-full border px-2 py-1.5 text-xs"
                            style={{ borderColor: "#ddd" }}
                          />
                        </label>
                      </div>
                      <p className="text-[11px] tabular-nums" style={{ color: "#555" }}>
                        Tutar: <strong style={{ color: "#000" }}>{fmtMoney(lineTutar(line))} ₺</strong>
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-5 pt-4 border-t space-y-3" style={{ borderColor: "#e8e8e8" }}>
                <div className="flex justify-between text-xs">
                  <span style={{ color: "#666" }}>Toplam</span>
                  <span className="tabular-nums font-medium">{fmtMoney(tabloToplam)} ₺</span>
                </div>
                <label className="flex justify-between items-center gap-2 text-xs">
                  <span style={{ color: "#666" }}>Toplam İskonto (₺)</span>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
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
                  <span className="tabular-nums" style={{ color: "#1b3563" }}>
                    {fmtMoney(araToplam)} ₺
                  </span>
                </div>
                <label className="flex justify-between items-center gap-2 text-xs">
                  <span style={{ color: "#666" }}>KDV %</span>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step={1}
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
                <div className="flex justify-between text-sm font-bold pt-2 border-t" style={{ borderColor: "#e8e8e8" }}>
                  <span style={{ color: "#111" }}>Genel Toplam</span>
                  <span className="tabular-nums" style={{ color: "#1b3563" }}>
                    {fmtMoney(genelToplam)} ₺
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border p-5 space-y-3" style={{ borderColor: "#e0e0e0" }}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "#888" }}>
                Ödeme ve teslimat
              </h3>
              <label className="block text-xs">
                <span className="text-[10px] uppercase tracking-wide" style={{ color: "#999" }}>
                  Ödeme şekli
                </span>
                <input
                  type="text"
                  value={meta.odemeSekli}
                  onChange={(e) => patchMeta("odemeSekli", e.target.value)}
                  className="mt-1 w-full border px-3 py-2"
                  style={{ borderColor: "#ddd" }}
                />
              </label>
              <label className="block text-xs">
                <span className="text-[10px] uppercase tracking-wide" style={{ color: "#999" }}>
                  Teslimat süresi
                </span>
                <input
                  type="text"
                  value={meta.teslimatSuresi}
                  onChange={(e) => patchMeta("teslimatSuresi", e.target.value)}
                  className="mt-1 w-full border px-3 py-2"
                  style={{ borderColor: "#ddd" }}
                />
              </label>
              <div>
                <span className="text-[10px] uppercase tracking-wide block mb-2" style={{ color: "#999" }}>
                  Nakliye
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="nakliye"
                      checked={meta.nakliye === "dahil"}
                      onChange={() => patchMeta("nakliye", "dahil")}
                    />
                    DAHİL
                  </label>
                  <label className="flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="radio"
                      name="nakliye"
                      checked={meta.nakliye === "harici"}
                      onChange={() => patchMeta("nakliye", "harici")}
                    />
                    HARİÇ
                  </label>
                </div>
              </div>
              <p className="text-[10px] italic" style={{ color: "#888" }}>
                * Birim fiyatlarımıza KDV dahil değildir.
              </p>
            </div>

            <label className="block bg-white border p-5" style={{ borderColor: "#e0e0e0" }}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>
                Teklif açıklaması
              </span>
              <textarea
                value={meta.teklifAciklamasi}
                onChange={(e) => patchMeta("teklifAciklamasi", e.target.value)}
                rows={4}
                className="mt-2 w-full border px-3 py-2 text-sm resize-y"
                style={{ borderColor: "#ddd" }}
                placeholder="Termin, görüşülecek kişi, notlar..."
              />
            </label>

          </aside>
        </div>
      </div>

      {/* Modal */}
      {picker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="teklif-modal-title"
        >
          <div className="bg-white w-full max-w-md border shadow-xl" style={{ borderColor: "#e0e0e0" }}>
            <div className="px-5 py-4 border-b flex justify-between items-start gap-3" style={{ borderColor: "#eee" }}>
              <div>
                <h3 id="teklif-modal-title" className="text-sm font-semibold" style={{ color: "#111" }}>
                  {picker.item.label}
                </h3>
                <p className="text-[10px] uppercase tracking-wide mt-1" style={{ color: "#999" }}>
                  {picker.section.title} · {picker.item.unit}
                </p>
              </div>
              <button
                type="button"
                onClick={closePicker}
                className="text-xl leading-none px-1 opacity-40 hover:opacity-100"
                aria-label="Kapat"
              >
                ×
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>
                    Miktar
                  </span>
                  <input
                    type="number"
                    min={0.01}
                    step={0.01}
                    value={draftQty}
                    onChange={(e) => setDraftQty(e.target.value)}
                    className="mt-2 w-full border px-3 py-2 text-sm"
                    style={{ borderColor: "#ccc" }}
                  />
                </label>
                <label className="block col-span-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>
                    Birim fiyat (₺)
                  </span>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    value={draftPrice}
                    onChange={(e) => setDraftPrice(e.target.value)}
                    className="mt-2 w-full border px-3 py-2 text-sm"
                    style={{ borderColor: "#ccc" }}
                    placeholder="0,00"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#888" }}>
                  İskonto %
                </span>
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={0.5}
                  value={draftIsk}
                  onChange={(e) => setDraftIsk(e.target.value)}
                  className="mt-2 w-full border px-3 py-2 text-sm"
                  style={{ borderColor: "#ccc" }}
                />
              </label>
              <button
                type="button"
                onClick={addLine}
                className="w-full py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
                style={{ backgroundColor: "#1b3563" }}
              >
                Teklife ekle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Yazdırma: @page teklif-doc margin 0; iç padding kağıt boşluğu */}
      <section className="hidden print:block bg-white text-black teklif-print-sheet">
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
