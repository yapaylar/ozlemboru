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

/** Referans teklif formu — çok sayfalı yazdırmada thead her sayfada tekrarlanır */
export default function TeklifFormDocument({
  meta,
  lines,
  tabloToplam,
  araToplam,
  kdvTutari,
  genelToplam,
  sheetClassName = "",
}: Props) {
  return (
    <div
      className={`teklif-form-doc mx-auto max-w-[210mm] bg-white px-1 py-2 text-black sm:px-3 ${sheetClassName}`}
      style={{ fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif" }}
    >
      {/*
        Tek table yapısı:
        - <thead>: firma başlığı + müşteri kutusu + sütun başlıkları → her sayfada tekrarlanır
        - <tbody>: yalnızca ürün satırları → sayfalara bölünür
        Toplamlar + imzalar tablo dışında → yalnızca son sayfada görünür
      */}
      <table className="w-full border-collapse text-[9px] sm:text-[10px]">
        <thead>
          {/* ── Firma başlığı ── */}
          <tr>
            <td colSpan={6} className="pb-3">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b-[3px] border-black pb-4">
                <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SITE_LOGO.src}
                    alt=""
                    className="h-[72px] w-auto shrink-0 object-contain sm:h-[84px]"
                  />
                  <div className="min-w-0 text-[10px] leading-snug sm:text-[11px]">
                    <p className="text-[13px] font-bold tracking-tight sm:text-[14px]">{COMPANY.name}</p>
                    <p className="mt-0.5 text-[9px] font-normal text-neutral-700 sm:text-[10px]">{COMPANY.tagline}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase leading-tight sm:text-[11px]">{COMPANY.fullName}</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-neutral-800">
                      Beton Boru ve Beton Elemanları Sanayi
                    </p>
                    <p className="mt-1.5 text-[10px] font-medium">{COMPANY.website}</p>
                  </div>
                </div>
                <div className="w-full shrink-0 text-[9px] leading-relaxed sm:w-[230px] sm:text-right sm:text-[10px]">
                  <p className="border-b border-black pb-0.5 text-[10px] font-bold uppercase tracking-wide">İletişim</p>
                  <p className="mt-2 whitespace-pre-line">{COMPANY.address}</p>
                  <p className="mt-1"><span className="font-semibold">Tel:</span> {COMPANY.phone1}</p>
                  <p className="mt-0.5"><span className="font-semibold">Cep:</span> {COMPANY.mobile}</p>
                  <p className="mt-0.5"><span className="font-semibold">E-posta:</span> {COMPANY.email}</p>
                </div>
              </div>
            </td>
          </tr>

          {/* ── Müşteri / teklif kutusu ── */}
          <tr>
            <td colSpan={6} className="pb-3">
              <div className="mt-4 border-2 border-black">
                <div className="grid divide-y divide-black sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="divide-y divide-black text-[10px] sm:text-[11px]">
                    <FieldRow label="Ünvan" value={meta.unvan} />
                    <FieldRow label="Yetkili" value={meta.yetkili} />
                    <FieldRow label="Adres" value={meta.adres} />
                    <FieldRow label="Telefon" value={meta.telefon} />
                    <FieldRow label="Faks" value={meta.faks} />
                  </div>
                  <div className="divide-y divide-black text-[10px] sm:text-[11px]">
                    <FieldRow label="Teklif No" value={meta.teklifNo} alignRight />
                    <FieldRow label="Teklif Tarihi" value={meta.teklifTarihi} alignRight />
                    <FieldRow label="Teklif Süresi" value={meta.teklifSuresi} alignRight />
                    <FieldRow label="Sevk Yeri" value={meta.sevkYeri} alignRight />
                  </div>
                </div>
              </div>

              <h2 className="my-4 border-y-[3px] border-black py-2.5 text-center text-[12px] font-bold uppercase tracking-[0.2em] sm:text-[13px]">
                Teklif Formu
              </h2>
            </td>
          </tr>

          {/* ── Ürün tablosu sütun başlıkları ── */}
          <tr className="bg-neutral-100">
            <th className="border-2 border-black px-1.5 py-2 text-left font-bold sm:px-2">Açıklama</th>
            <th className="border-2 border-black px-1 py-2 text-right font-bold sm:px-2">Miktar</th>
            <th className="border-2 border-black px-1 py-2 text-center font-bold sm:px-2">Birim</th>
            <th className="border-2 border-black px-1 py-2 text-right font-bold sm:px-2">Birim Fiyat</th>
            <th className="border-2 border-black px-1 py-2 text-right font-bold sm:px-2">İsk.</th>
            <th className="border-2 border-black px-1 py-2 text-right font-bold sm:px-2">Tutar</th>
          </tr>
        </thead>

        {/* ── Ürün satırları — sayfalara bölünür ── */}
        <tbody>
          {lines.length === 0 ? (
            <tr>
              <td colSpan={6} className="border border-black px-2 py-8 text-center text-neutral-400">
                Satır eklenmedi
              </td>
            </tr>
          ) : (
            lines.map((line) => (
              <tr key={line.id}>
                <td className="border border-black px-1.5 py-1.5 align-top sm:px-2">
                  <span className="font-medium">{line.label}</span>
                  <span className="mt-0.5 block text-[8px] text-neutral-600 sm:text-[9px]">{line.sectionTitle}</span>
                </td>
                <td className="border border-black px-1 py-1.5 text-right tabular-nums align-top">
                  {line.quantity.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
                </td>
                <td className="border border-black px-1 py-1.5 text-center align-top">{line.unit}</td>
                <td className="border border-black px-1 py-1.5 text-right tabular-nums align-top">
                  {fmtTeklifMoney(line.unitPrice)}
                </td>
                <td className="border border-black px-1 py-1.5 text-right tabular-nums align-top">
                  {line.discountPct.toLocaleString("tr-TR")}
                </td>
                <td className="border border-black px-1 py-1.5 text-right tabular-nums font-semibold align-top">
                  {fmtTeklifMoney(lineTutar(line))}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* ── Toplamlar + ödeme + imzalar — yalnızca son sayfada ── */}
      <div className="mt-4 w-full text-[9px] sm:text-[10px]" style={{ pageBreakInside: "avoid", breakInside: "avoid" }}>
        <div className="flex w-full justify-end">
          <div className="w-full max-w-[280px] shrink-0 border-2 border-black">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-black px-2 py-1 font-medium">Toplam</td>
                  <td className="border border-black px-2 py-1 text-right tabular-nums">{fmtTeklifMoney(tabloToplam)}</td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 font-medium">Toplam İskonto</td>
                  <td className="border border-black px-2 py-1 text-right tabular-nums">
                    {fmtTeklifMoney(meta.toplamIskontoTutar)}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 font-bold">Ara Toplam</td>
                  <td className="border border-black px-2 py-1 text-right tabular-nums font-bold">
                    {fmtTeklifMoney(araToplam)}
                  </td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1 font-medium">KDV Toplam (%{meta.kdvOrani})</td>
                  <td className="border border-black px-2 py-1 text-right tabular-nums">{fmtTeklifMoney(kdvTutari)}</td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-1.5 text-[10px] font-bold sm:text-[11px]">Genel Toplam</td>
                  <td className="border border-black px-2 py-1.5 text-right text-[10px] font-bold tabular-nums sm:text-[11px]">
                    {fmtTeklifMoney(genelToplam)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-2 flex w-full flex-wrap items-center gap-x-4 gap-y-1 border border-black px-2 py-1.5 text-[8px] leading-tight sm:gap-x-6 sm:text-[9px]">
          <span><strong>Ödeme Şekli:</strong> {meta.odemeSekli || "—"}</span>
          <span className="hidden sm:inline text-neutral-400" aria-hidden>|</span>
          <span><strong>Teslimat Süresi:</strong> {meta.teslimatSuresi || "—"}</span>
          <span className="hidden sm:inline text-neutral-400" aria-hidden>|</span>
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
          <span className="basis-full text-[7px] italic text-neutral-700 sm:basis-auto sm:text-[8px]">
            * Birim fiyatlarımıza KDV dahil değildir.
          </span>
        </div>
      </div>

      <p className="mt-4 border-t border-black pt-3 text-[8px] leading-relaxed text-neutral-800 sm:text-[9px]" style={{ pageBreakBefore: "avoid", breakBefore: "avoid" }}>
        {TEKLIF_CERT_TEXT}
      </p>

      <div className="mt-4 min-h-[88px] border-2 border-black p-3 text-[10px] whitespace-pre-wrap" style={{ pageBreakInside: "avoid", breakInside: "avoid" }}>
        <span className="font-bold">Teklif Açıklaması</span>
        <div className="mt-2 text-[9px] leading-relaxed text-neutral-900 sm:text-[10px]">
          {meta.teklifAciklamasi || "—"}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 text-[10px] sm:grid-cols-2" style={{ pageBreakInside: "avoid", breakInside: "avoid" }}>
        <div className="flex min-h-[120px] flex-col border-2 border-black p-4">
          <p className="font-bold uppercase">Müşteri Onayı</p>
          <p className="mt-auto pt-10 text-[9px] text-neutral-700">Alıcı Firma Kaşe / İmza</p>
        </div>
        <div className="flex min-h-[120px] flex-col border-2 border-black p-4 text-right">
          <p className="font-bold uppercase">Onay</p>
          <p className="mt-1 font-semibold">{COMPANY.brandName}</p>
          <p className="text-[9px]">{COMPANY.gmTitle}</p>
          <p className="mt-auto pt-6 text-[9px] text-neutral-700">Kaşe / İmza</p>
        </div>
      </div>

      <p className="mt-10 text-center text-[10px] font-medium tracking-wide">
        Bizi tercih ettiğiniz için teşekkür ederiz.
      </p>
    </div>
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
      <div className="flex justify-between gap-4 px-2 py-2 text-right">
        <span className="font-bold">{label}:</span>
        <span className="min-w-0 tabular-nums">{display}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-between gap-x-3 px-2 py-2">
      <span className="font-bold">{label}:</span>
      <span className="min-w-0 flex-1 text-right">{display}</span>
    </div>
  );
}
