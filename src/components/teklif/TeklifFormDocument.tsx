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
          className={`teklif-form-doc mx-auto w-[210mm] min-w-[210mm] bg-white px-6 py-5 text-black ${sheetClassName}`}
          style={{
            fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
            pageBreakBefore: pageIndex > 0 ? "always" : "auto",
            breakBefore: pageIndex > 0 ? "page" : "auto",
          }}
        >
          {/* ── Firma başlığı ── */}
          <div className="flex items-start justify-between gap-4 border-b-[3px] border-black pb-4">
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
          <div className="mt-3 border-2 border-black">
            <div className="grid grid-cols-2 divide-x divide-black">
              <div className="divide-y divide-black text-[11px]">
                <FieldRow label="Ünvan" value={meta.unvan} />
                <FieldRow label="Yetkili" value={meta.yetkili} />
                <FieldRow label="Adres" value={meta.adres} />
                <FieldRow label="Telefon" value={meta.telefon} />
                <FieldRow label="Faks" value={meta.faks} />
              </div>
              <div className="divide-y divide-black text-[11px]">
                <FieldRow label="Teklif No" value={meta.teklifNo} alignRight />
                <FieldRow label="Teklif Tarihi" value={meta.teklifTarihi} alignRight />
                <FieldRow label="Teklif Süresi" value={meta.teklifSuresi} alignRight />
                <FieldRow label="Sevk Yeri" value={meta.sevkYeri} alignRight />
              </div>
            </div>
          </div>

          <h2 className="my-3 border-y-[3px] border-black py-2 text-center text-[13px] font-bold uppercase tracking-[0.2em]">
            Teklif Formu
          </h2>

          {/* ── Ürün tablosu ── */}
          <table className="w-full border-collapse border-2 border-black text-[10px]">
            <thead>
              <tr className="bg-neutral-100">
                <th className="border border-black px-2 py-2 text-left font-bold">Açıklama</th>
                <th className="border border-black px-2 py-2 text-right font-bold">Miktar</th>
                <th className="border border-black px-2 py-2 text-center font-bold">Birim</th>
                <th className="border border-black px-2 py-2 text-right font-bold">Birim Fiyat</th>
                <th className="border border-black px-2 py-2 text-right font-bold">İsk.</th>
                <th className="border border-black px-2 py-2 text-right font-bold">Tutar</th>
              </tr>
            </thead>
            <tbody>
              {pageLines.length === 0 ? (
                <tr>
                  <td colSpan={6} className="border border-black px-2 py-8 text-center text-neutral-400">
                    Satır eklenmedi
                  </td>
                </tr>
              ) : (
                pageLines.map((line) => (
                  <tr key={line.id}>
                    <td className="border border-black px-2 py-1.5 align-top">
                      <span className="font-medium">{line.label}</span>
                      <span className="mt-0.5 block text-[9px] text-neutral-600">{line.sectionTitle}</span>
                    </td>
                    <td className="border border-black px-2 py-1.5 text-right tabular-nums align-top">
                      {line.quantity.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
                    </td>
                    <td className="border border-black px-2 py-1.5 text-center align-top">{line.unit}</td>
                    <td className="border border-black px-2 py-1.5 text-right tabular-nums align-top">
                      {fmtTeklifMoney(line.unitPrice)}
                    </td>
                    <td className="border border-black px-2 py-1.5 text-right tabular-nums align-top">
                      {line.discountPct.toLocaleString("tr-TR")}
                    </td>
                    <td className="border border-black px-2 py-1.5 text-right tabular-nums font-semibold align-top">
                      {fmtTeklifMoney(lineTutar(line))}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* ── Toplamlar ── */}
          <div className="mt-3 flex w-full justify-end text-[10px]">
            <div className="w-full max-w-[280px] shrink-0 border-2 border-black">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border border-black px-2 py-1 font-medium">Toplam</td>
                    <td className="border border-black px-2 py-1 text-right tabular-nums">{fmtTeklifMoney(tabloToplam)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1 font-medium">Toplam İskonto</td>
                    <td className="border border-black px-2 py-1 text-right tabular-nums">{fmtTeklifMoney(meta.toplamIskontoTutar)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1 font-bold">Ara Toplam</td>
                    <td className="border border-black px-2 py-1 text-right tabular-nums font-bold">{fmtTeklifMoney(araToplam)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1 font-medium">KDV Toplam (%{meta.kdvOrani})</td>
                    <td className="border border-black px-2 py-1 text-right tabular-nums">{fmtTeklifMoney(kdvTutari)}</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1.5 text-[11px] font-bold">Genel Toplam</td>
                    <td className="border border-black px-2 py-1.5 text-right text-[11px] font-bold tabular-nums">{fmtTeklifMoney(genelToplam)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Ödeme / teslimat / nakliye ── */}
          <div className="mt-2 flex w-full flex-wrap items-center gap-x-6 gap-y-1 border border-black px-2 py-1.5 text-[9px] leading-tight">
            <span><strong>Ödeme Şekli:</strong> {meta.odemeSekli || "—"}</span>
            <span className="text-neutral-400" aria-hidden>|</span>
            <span><strong>Teslimat Süresi:</strong> {meta.teslimatSuresi || "—"}</span>
            <span className="text-neutral-400" aria-hidden>|</span>
            <span className="inline-flex flex-wrap items-center gap-2">
              <strong>Nakliye:</strong>
              <span className="inline-flex items-center gap-1 border border-black px-1.5 py-0.5">
                <span className="inline-block w-4 text-center">{meta.nakliye === "dahil" ? "✕" : ""}</span>
                DAHİL
              </span>
              <span className="inline-flex items-center gap-1 border border-black px-1.5 py-0.5">
                <span className="inline-block w-4 text-center">{meta.nakliye === "harici" ? "✕" : ""}</span>
                HARİÇ
              </span>
            </span>
            <span className="basis-auto text-[8px] italic text-neutral-700">
              * Birim fiyatlarımıza KDV dahil değildir.
            </span>
          </div>

          {/* ── Sertifika metni + imzalar ── */}
          <p className="mt-3 border-t border-black pt-2 text-[9px] leading-relaxed text-neutral-800">
            {TEKLIF_CERT_TEXT}
          </p>

          <div className="mt-3 min-h-[72px] border-2 border-black p-3 text-[10px] whitespace-pre-wrap">
            <span className="font-bold">Teklif Açıklaması</span>
            <div className="mt-1.5 text-[10px] leading-relaxed text-neutral-900">
              {meta.teklifAciklamasi || "—"}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-6 text-[10px]">
            <div className="flex min-h-[100px] flex-col border-2 border-black p-4">
              <p className="font-bold uppercase">Müşteri Onayı</p>
              <p className="mt-auto pt-8 text-[9px] text-neutral-700">Alıcı Firma Kaşe / İmza</p>
            </div>
            <div className="flex min-h-[100px] flex-col border-2 border-black p-4 text-right">
              <p className="font-bold uppercase">Onay</p>
              <p className="mt-1 font-semibold">{COMPANY.brandName}</p>
              <p className="text-[9px]">{COMPANY.gmTitle}</p>
              <p className="mt-auto pt-6 text-[9px] text-neutral-700">Kaşe / İmza</p>
            </div>
          </div>

          <p className="mt-6 text-center text-[10px] font-medium tracking-wide">
            Bizi tercih ettiğiniz için teşekkür ederiz.
          </p>
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
      <div className="flex justify-between gap-4 px-2 py-1.5 text-right">
        <span className="font-bold">{label}:</span>
        <span className="min-w-0 tabular-nums">{display}</span>
      </div>
    );
  }
  return (
    <div className="flex justify-between gap-x-3 px-2 py-1.5">
      <span className="font-bold">{label}:</span>
      <span className="min-w-0 flex-1 text-right">{display}</span>
    </div>
  );
}
