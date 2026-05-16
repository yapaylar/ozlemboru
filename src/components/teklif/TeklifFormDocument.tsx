import { COMPANY, SITE_LOGO } from "@/lib/constants";
import type { TeklifLine, TeklifMeta } from "@/lib/teklif-shared";
import {
  TEKLIF_CERT_TEXT,
  fmtTeklifMoney,
  lineTutar,
} from "@/lib/teklif-shared";

type Props = {
  meta: TeklifMeta;
  lines: TeklifLine[];
  tabloToplam: number;
  araToplam: number;
  kdvTutari: number;
  genelToplam: number;
  sheetClassName?: string;
};

/**
 * Her sayfada tam şablon tekrarlanır.
 * min-w-[210mm] ile her zaman A4 genişliğinde — mobilde de masaüstü formatı.
 */
// Sayfa div'i h-[297mm] overflow-hidden ile kilitli — taşma yok.
const ROWS_PER_PAGE = 18;

export default function TeklifFormDocument({
  meta,
  lines,
  tabloToplam,
  araToplam,
  kdvTutari,
  genelToplam,
  sheetClassName = "",
}: Props) {
  const pages: TeklifLine[][] =
    lines.length === 0
      ? [[]]
      : Array.from({ length: Math.ceil(lines.length / ROWS_PER_PAGE) }, (_, i) =>
          lines.slice(i * ROWS_PER_PAGE, (i + 1) * ROWS_PER_PAGE)
        );

  return (
    <>
      {pages.map((pageLines, pageIndex) => (
        <div
          key={pageIndex}
          className={`teklif-form-doc mx-auto flex h-[297mm] w-[210mm] min-w-[210mm] flex-col overflow-hidden bg-white px-6 py-4 text-black ${sheetClassName}`}
          style={{
            fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
            pageBreakAfter: pageIndex < pages.length - 1 ? "always" : "auto",
            breakAfter: pageIndex < pages.length - 1 ? "page" : "auto",
          }}
        >
          {/* ── Firma başlığı ── */}
          <div className="flex items-start justify-between gap-4 border-b-2 border-black pb-3">
            <div className="flex min-w-0 flex-1 items-start gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SITE_LOGO.src}
                alt=""
                className="h-[84px] w-auto shrink-0 object-contain"
              />
              <div className="min-w-0 text-[11px] leading-snug">
                <p className="text-[14px] font-bold tracking-tight">{COMPANY.name}</p>
                <p className="mt-0.5 text-[10px] font-normal text-neutral-700">{COMPANY.tagline}</p>
                <p className="mt-2 text-[11px] font-bold uppercase leading-tight">{COMPANY.fullName}</p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-neutral-800">
                  Beton Boru ve Beton Elemanları Sanayi
                </p>
                <p className="mt-1.5 text-[10px] font-medium">{COMPANY.website}</p>
              </div>
            </div>
            <div className="w-[230px] shrink-0 text-right text-[10px] leading-relaxed">
              <p className="border-b border-black pb-0.5 text-[10px] font-bold uppercase tracking-wide">İletişim</p>
              <p className="mt-2 whitespace-pre-line">{COMPANY.address}</p>
              <p className="mt-1"><span className="font-semibold">Tel:</span> {COMPANY.phone1}</p>
              <p className="mt-0.5"><span className="font-semibold">Cep:</span> {COMPANY.mobile}</p>
              <p className="mt-0.5"><span className="font-semibold">E-posta:</span> {COMPANY.email}</p>
            </div>
          </div>

          {/* ── Müşteri / teklif kutusu ── */}
          <div className="mt-2 border border-black text-[10px]">
            <div className="grid grid-cols-2 divide-x divide-black">
              <div>
                <FieldRow label="Ünvan" value={meta.unvan} />
                <FieldRow label="Yetkili" value={meta.yetkili} />
                <FieldRow label="Adres" value={meta.adres} />
                <FieldRow label="Telefon" value={meta.telefon} />
              </div>
              <div>
                <FieldRow label="Teklif No" value={meta.teklifNo} alignRight />
                <FieldRow label="Teklif Tarihi" value={meta.teklifTarihi} alignRight />
                <FieldRow label="Teklif Süresi" value={meta.teklifSuresi} alignRight />
                <FieldRow label="Sevk Yeri" value={meta.sevkYeri} alignRight />
              </div>
            </div>
          </div>

          <h2 className="my-2 text-center text-[12px] font-bold uppercase tracking-[0.2em]">
            Teklif Formu
          </h2>

          {/* ── Ürün tablosu ── */}
          <table className="w-full border-collapse border-2 border-black text-[10px]">
            <thead>
              <tr className="divide-x divide-black border-b-2 border-black bg-neutral-100">
                <th className="px-2 py-1.5 text-left font-bold">Açıklama</th>
                <th className="px-2 py-1.5 text-right font-bold">Miktar</th>
                <th className="px-2 py-1.5 text-center font-bold">Birim</th>
                <th className="px-2 py-1.5 text-right font-bold">Birim Fiyat</th>
                <th className="px-2 py-1.5 text-right font-bold">İsk.</th>
                <th className="px-2 py-1.5 text-right font-bold">Tutar</th>
              </tr>
            </thead>
            <tbody>
              {pageLines.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-2 py-8 text-center text-neutral-400">
                    Satır eklenmedi
                  </td>
                </tr>
              ) : (
                pageLines.map((line) => (
                  <tr key={line.id} className="divide-x divide-black">
                    <td className="px-2 py-1 align-top">
                      <span className="font-medium">{line.label}</span>
                    </td>
                    <td className="px-2 py-1 text-right tabular-nums align-top">
                      {line.quantity.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-2 py-1 text-center align-top">{line.unit}</td>
                    <td className="px-2 py-1 text-right tabular-nums align-top">
                      {fmtTeklifMoney(line.unitPrice)}
                    </td>
                    <td className="px-2 py-1 text-right tabular-nums align-top">
                      {line.discountPct.toLocaleString("tr-TR")}
                    </td>
                    <td className="px-2 py-1 text-right tabular-nums font-semibold align-top">
                      {fmtTeklifMoney(lineTutar(line))}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* ── Alt bölüm ── */}
          <div style={{ breakInside: "avoid", pageBreakInside: "avoid" }}>

            {/* Satır 1: Ödeme bilgileri (sol) + Toplamlar (sağ) */}
            <div className="mt-2 flex items-start gap-3 text-[9px]">
              {/* Sol: ödeme/nakliye — alta hizalı */}
              <div className="flex-1 self-end leading-relaxed">
                <p><strong>Ödeme Şekli:</strong> {meta.odemeSekli || "—"}</p>
                <p className="mt-0.5"><strong>Teslimat Süresi:</strong> {meta.teslimatSuresi || "—"}</p>
                <p className="mt-0.5 flex flex-wrap items-center gap-1">
                  <strong>Nakliye:</strong>
                  <span className="inline-flex items-center gap-0.5 border border-black px-1 py-0.5">
                    <span className="inline-block w-3 text-center">{meta.nakliye === "dahil" ? "✕" : ""}</span>
                    DAHİL
                  </span>
                  <span className="inline-flex items-center gap-0.5 border border-black px-1 py-0.5">
                    <span className="inline-block w-3 text-center">{meta.nakliye === "harici" ? "✕" : ""}</span>
                    HARİÇ
                  </span>
                </p>
                <p className="mt-1 text-[8px] italic text-neutral-600">* Birim fiyatlarımıza KDV dahil değildir.</p>
              </div>
              {/* Sağ: toplamlar */}
              <div className="w-[260px] shrink-0 border border-black text-[9px]">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="divide-x divide-black">
                      <td className="px-2 py-0.5 font-medium">Toplam</td>
                      <td className="px-2 py-0.5 text-right tabular-nums">{fmtTeklifMoney(tabloToplam)}</td>
                    </tr>
                    <tr className="divide-x divide-black border-t border-black">
                      <td className="px-2 py-0.5 font-medium">Toplam İskonto</td>
                      <td className="px-2 py-0.5 text-right tabular-nums">{fmtTeklifMoney(meta.toplamIskontoTutar)}</td>
                    </tr>
                    <tr className="divide-x divide-black border-t border-black">
                      <td className="px-2 py-0.5 font-bold">Ara Toplam</td>
                      <td className="px-2 py-0.5 text-right tabular-nums font-bold">{fmtTeklifMoney(araToplam)}</td>
                    </tr>
                    <tr className="divide-x divide-black border-t border-black">
                      <td className="px-2 py-0.5">KDV (%{meta.kdvOrani})</td>
                      <td className="px-2 py-0.5 text-right tabular-nums">{fmtTeklifMoney(kdvTutari)}</td>
                    </tr>
                    <tr className="divide-x divide-black border-t-2 border-black bg-neutral-50">
                      <td className="px-2 py-1 text-[10px] font-bold">Genel Toplam</td>
                      <td className="px-2 py-1 text-right text-[10px] font-bold tabular-nums">{fmtTeklifMoney(genelToplam)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Satır 2: Teklif açıklaması (sol) + İmzalar (sağ) — tek uzun üst çizgi */}
            <div className="mt-2 grid grid-cols-3 gap-4 border-t-2 border-black pt-2 text-[9px]">
              {/* Sol: açıklama */}
              <div>
                <p className="font-bold">Teklif Açıklaması</p>
                <p className="mt-1 leading-relaxed text-neutral-800 whitespace-pre-wrap">
                  {meta.teklifAciklamasi || "—"}
                </p>
              </div>
              {/* Orta: müşteri onayı */}
              <div>
                <p className="font-bold uppercase">Müşteri Onayı</p>
                <p className="text-[8px] text-neutral-600">Alıcı Firma Kaşe / İmza</p>
                <p className="mt-8 text-[8px] text-neutral-600">Kaşe / İmza</p>
              </div>
              {/* Sağ: firma onayı */}
              <div>
                <p className="font-bold uppercase">Onay</p>
                <p className="mt-0.5 text-[8px] font-semibold leading-snug">{COMPANY.fullName}</p>
                <p className="text-[8px] text-neutral-600">{COMPANY.gmTitle}</p>
                <p className="mt-8 text-[8px] text-neutral-600">Kaşe / İmza</p>
              </div>
            </div>

            <p className="mt-2 text-center text-[9px] text-neutral-500 tracking-wide">
              Bizi tercih ettiğiniz için teşekkür ederiz.
            </p>
          </div> {/* end break-inside:avoid wrapper */}
        </div>
      ))}
    </>
  );
}

function FieldRow({
  label,
  value,
  alignRight,
}: {
  label: string;
  value: string;
  alignRight?: boolean;
}) {
  const display = value?.trim() ? value : "…………………………";
  if (alignRight) {
    return (
      <div className="flex justify-between gap-4 px-2 py-1 text-right">
        <span className="font-bold">{label}:</span>
        <span className="min-w-0 tabular-nums">{display}</span>
      </div>
    );
  }
  return (
    <div className="flex gap-x-3 px-2 py-1">
      <span className="font-bold shrink-0">{label}:</span>
      <span className="min-w-0">{display}</span>
    </div>
  );
}
