/** Teklif sayfası ortak tipler ve hesaplar */

export type TeklifLine = {
  id: string;
  sectionId: string;
  sectionTitle: string;
  productId: string;
  label: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  discountPct: number;
};

export type TeklifMeta = {
  unvan: string;
  yetkili: string;
  adres: string;
  telefon: string;
  faks: string;
  teklifNo: string;
  teklifTarihi: string;
  teklifSuresi: string;
  sevkYeri: string;
  odemeSekli: string;
  teslimatSuresi: string;
  nakliye: "dahil" | "harici";
  toplamIskontoTutar: number;
  kdvOrani: number;
  teklifAciklamasi: string;
};

export function defaultTeklifMeta(): TeklifMeta {
  const d = new Date();
  const tr = d.toLocaleDateString("tr-TR");
  return {
    unvan: "",
    yetkili: "",
    adres: "",
    telefon: "",
    faks: "",
    teklifNo: "",
    teklifTarihi: tr,
    teklifSuresi: "15 Gün",
    sevkYeri: "",
    odemeSekli: "NAKİT",
    teslimatSuresi: "",
    nakliye: "harici",
    toplamIskontoTutar: 0,
    kdvOrani: 20,
    teklifAciklamasi: "",
  };
}

export const TEKLIF_CERT_TEXT =
  "Ürünlerimiz TS 821 EN 1916, İller Bankası A.Ş. Şartnamesi, ISO 9001 Kalite Yönetim Sistemi ve ilgili standartlara uygundur.";

export function fmtTeklifMoney(n: number): string {
  return n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function lineBrut(l: TeklifLine): number {
  return l.quantity * l.unitPrice;
}

export function lineIskontoTutari(l: TeklifLine): number {
  return lineBrut(l) * (l.discountPct / 100);
}

export function lineTutar(l: TeklifLine): number {
  return lineBrut(l) - lineIskontoTutari(l);
}
