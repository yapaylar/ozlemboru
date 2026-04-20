/**
 * Birim fiyat hesap verileri.
 * Malzeme miktarlarını Excel'deki sekmelerden güncelleyin.
 */

export type ProductRecipe = {
  id: string;
  label: string;
  unit: "MT" | "ADET" | "TK";
  /** Metre fiyatı hesabı için boy (mm). 0 ise metre fiyatı gösterilmez. */
  length: number;
  cement: number;      // Çimento (kg)
  aggregate: number;   // Agrega (kg)
  steel: number;       // Demir (kg) — 0 = beton boru
  contaPrice: number;  // Conta sabit maliyet (₺/adet)
  laborPrice: number;  // İşçilik sabit maliyet (₺/adet)
};

export type PriceSection = {
  id: string;
  title: string;
  items: ProductRecipe[];
};

export type UnitPrices = {
  cement: number;       // Çimento ₺/kg
  aggregate: number;    // Agrega ₺/kg
  steel: number;        // Demir ₺/kg
  overheadRate: number; // Genel Gider % (Ara Toplamın yüzdesi)
  profitRate: number;   // Kar % (Toplam Maliyetin yüzdesi)
};

/** Varsayılan birim fiyatlar */
export const DEFAULT_UNIT_PRICES: UnitPrices = {
  cement: 4.60,
  aggregate: 0.43,
  steel: 32.50,
  overheadRate: 25,
  profitRate: 25,
};

// ─────────────────────────────────────────────────────────────────────────────
// BORULAR
// ─────────────────────────────────────────────────────────────────────────────

const BORULAR: ProductRecipe[] = [
  // Beton borular
  { id: "b200",      label: "Ø200 Beton",       unit: "MT", length: 1500, cement:   20, aggregate:   150, steel:   0, contaPrice:   36.5, laborPrice:   60 },
  { id: "b300",      label: "Ø300 Beton",       unit: "MT", length: 1500, cement:   30, aggregate:   225, steel:   0, contaPrice:   72.0, laborPrice:   90 },
  { id: "b400",      label: "Ø400 Beton",       unit: "MT", length: 1500, cement:   66, aggregate:   466, steel:   0, contaPrice:  125.0, laborPrice:  180 },
  { id: "b500",      label: "Ø500 Beton",       unit: "MT", length: 2000, cement:   70, aggregate:   750, steel:   0, contaPrice:  155.0, laborPrice:  200 },
  { id: "b600",      label: "Ø600 Beton",       unit: "MT", length: 2000, cement:   85, aggregate:   930, steel:   0, contaPrice:  182.5, laborPrice:  210 },
  // Betonarme borular
  { id: "b600ba",    label: "Ø600 Betonarme",   unit: "MT", length: 2000, cement:   85, aggregate:   930, steel:  17, contaPrice:  182.5, laborPrice:  210 },
  { id: "b800",      label: "Ø800 Betonarme",   unit: "MT", length: 2000, cement:  140, aggregate:  1500, steel:  28, contaPrice:  365.0, laborPrice:  300 },
  { id: "b1000",     label: "Ø1000 Betonarme",  unit: "MT", length: 2000, cement:  210, aggregate:  2100, steel:  35, contaPrice:  450.0, laborPrice:  330 },
  { id: "b1200",     label: "Ø1200 Betonarme",  unit: "MT", length: 2000, cement:  310, aggregate:  2500, steel:  46, contaPrice:  555.0, laborPrice:  400 },
  { id: "b1400",     label: "Ø1400 Betonarme",  unit: "MT", length: 2000, cement:  360, aggregate:  3100, steel:  74, contaPrice:  950.0, laborPrice:  480 },
  { id: "b1600",     label: "Ø1600 Betonarme",  unit: "MT", length: 2000, cement:  500, aggregate:  3700, steel: 120, contaPrice: 1550.0, laborPrice:  510 },
  { id: "b1800",     label: "Ø1800 Betonarme",  unit: "MT", length: 2000, cement:  578, aggregate:  4600, steel: 150, contaPrice: 1600.0, laborPrice:  620 },
  { id: "b2000",     label: "Ø2000 Betonarme",  unit: "MT", length: 2000, cement:  650, aggregate:  5700, steel: 220, contaPrice: 1750.0, laborPrice:  675 },
  { id: "b2200",     label: "Ø2200 Betonarme",  unit: "MT", length: 2000, cement: 1500, aggregate:  6900, steel: 250, contaPrice: 1900.0, laborPrice:  900 },
  { id: "b2400",     label: "Ø2400 Betonarme",  unit: "MT", length: 2000, cement: 1800, aggregate:  8000, steel: 310, contaPrice: 2200.0, laborPrice: 1450 },
  { id: "b2600",     label: "Ø2600 Betonarme",  unit: "MT", length: 2000, cement: 2200, aggregate: 10000, steel: 560, contaPrice: 2350.0, laborPrice: 1850 },
  { id: "b2800",     label: "Ø2800 Betonarme",  unit: "MT", length: 2000, cement: 3000, aggregate: 12000, steel: 650, contaPrice: 2600.0, laborPrice: 2100 },
];

// ─────────────────────────────────────────────────────────────────────────────
// TABANLAR
// ─────────────────────────────────────────────────────────────────────────────

const TABANLAR: ProductRecipe[] = [
  // ── 1000'lik taban elemanları (çimento: 160 kg, agrega: 1500 kg, conta: 2 adet) ──
  { id: "t1000-d200", label: "1000'lik / Ø200", unit: "ADET", length: 0, cement: 160, aggregate: 1500, steel: 0, contaPrice:  73.0, laborPrice: 320 },
  { id: "t1000-d300", label: "1000'lik / Ø300", unit: "ADET", length: 0, cement: 160, aggregate: 1500, steel: 0, contaPrice: 144.0, laborPrice: 320 },
  { id: "t1000-d400", label: "1000'lik / Ø400", unit: "ADET", length: 0, cement: 160, aggregate: 1500, steel: 0, contaPrice: 250.0, laborPrice: 320 },
  { id: "t1000-d500", label: "1000'lik / Ø500", unit: "ADET", length: 0, cement: 160, aggregate: 1500, steel: 0, contaPrice: 310.0, laborPrice: 500 },
  { id: "t1000-d600", label: "1000'lik / Ø600", unit: "ADET", length: 0, cement: 160, aggregate: 1500, steel: 0, contaPrice: 365.0, laborPrice: 500 },
  // ── 1200'lük taban elemanları ──
  { id: "t1200-d200",  label: "1200'lük / Ø200",  unit: "ADET", length: 0, cement: 230, aggregate: 2200, steel:  0, contaPrice:   73.0, laborPrice:  425 },
  { id: "t1200-d300",  label: "1200'lük / Ø300",  unit: "ADET", length: 0, cement: 230, aggregate: 2200, steel:  0, contaPrice:  144.0, laborPrice:  425 },
  { id: "t1200-d400",  label: "1200'lük / Ø400",  unit: "ADET", length: 0, cement: 230, aggregate: 2200, steel:  0, contaPrice:  250.0, laborPrice:  425 },
  { id: "t1200-d500",  label: "1200'lük / Ø500",  unit: "ADET", length: 0, cement: 260, aggregate: 2550, steel:  0, contaPrice:  310.0, laborPrice:  500 },
  { id: "t1200-d600",  label: "1200'lük / Ø600",  unit: "ADET", length: 0, cement: 260, aggregate: 2550, steel:  0, contaPrice:  365.0, laborPrice:  500 },
  { id: "t1200-d800",  label: "1200'lük / Ø800",  unit: "ADET", length: 0, cement: 330, aggregate: 3300, steel: 20, contaPrice:  730.0, laborPrice: 1250 },
  { id: "t1200-d1000", label: "1200'lük / Ø1000", unit: "ADET", length: 0, cement: 550, aggregate: 5250, steel: 42, contaPrice:  900.0, laborPrice: 1250 },
  { id: "t1200-d1200", label: "1200'lük / Ø1200", unit: "ADET", length: 0, cement: 650, aggregate: 5250, steel: 56, contaPrice: 1110.0, laborPrice: 1250 },
  // ── 1400'lük taban elemanı ──
  { id: "t1400",       label: "1400'lük",          unit: "ADET", length: 0, cement: 650, aggregate: 8000, steel: 75, contaPrice: 1900.0, laborPrice: 3500 },
];

// ─────────────────────────────────────────────────────────────────────────────
// GEÇİŞ ELEMANLARI — Excel: RED.BİL.GEÇİŞ PL. sekmesinden güncelleyin
// ─────────────────────────────────────────────────────────────────────────────

const GECIS_ELEMANLARI: ProductRecipe[] = [
  { id: "ge200-300", label: "Ø200 → Ø300", unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ge300-400", label: "Ø300 → Ø400", unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ge400-500", label: "Ø400 → Ø500", unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ge500-600", label: "Ø500 → Ø600", unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ge600-800", label: "Ø600 → Ø800", unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
];

// ─────────────────────────────────────────────────────────────────────────────
// KAPAKLAR — Excel: ilgili sekmeden güncelleyin
// ─────────────────────────────────────────────────────────────────────────────

const KAPAKLAR: ProductRecipe[] = [
  { id: "k-pb-1000x500-c", label: "1000×500 Çerçevesiz Kapak",       unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "k-pb-1000x500-p", label: "1000×500 Profil Çerçeveli Kapak", unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "k-pb-1400-red",   label: "1400 Rediksiyon Kapak",            unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "k-yuvarlak-ba",   label: "Yuvarlak BA Kapak",                unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "k-ys-500x500",    label: "500×500 YS Kare Kapak",            unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
];

// ─────────────────────────────────────────────────────────────────────────────
// EK PARÇALAR — Excel: ilgili sekmeden güncelleyin
// ─────────────────────────────────────────────────────────────────────────────

const EK_PARCALAR: ProductRecipe[] = [
  { id: "ep-150-dirsek",   label: "150×450 Dirsek",                    unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-200-150c",     label: "200×150 C Parçası",                 unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-200-dirsek",   label: "200×450 Dirsek",                    unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-300-150c",     label: "300×150 C Parçası",                 unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-300-200c",     label: "300×200 C Parçası",                 unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-400-200c",     label: "400×200 C Parçası",                 unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-bilezik-50",   label: "Yükseklik Ayar Bileziği 50 mm",    unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-bilezik-100",  label: "Yükseklik Ayar Bileziği 100 mm",   unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-bilezik-150",  label: "Yükseklik Ayar Bileziği 150 mm",   unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
  { id: "ep-bilezik-200",  label: "Yükseklik Ayar Bileziği 200 mm",   unit: "ADET", length: 0, cement: 0, aggregate: 0, steel: 0, contaPrice: 0, laborPrice: 0 },
];

// ─────────────────────────────────────────────────────────────────────────────

export const PRICE_SECTIONS: PriceSection[] = [
  { id: "borular",          title: "Borular",          items: BORULAR },
  { id: "tabanlar",         title: "Tabanlar",         items: TABANLAR },
  { id: "gecis-elemanlari", title: "Geçiş Elemanları", items: GECIS_ELEMANLARI },
  { id: "kapaklar",         title: "Kapaklar",         items: KAPAKLAR },
  { id: "ek-parcalar",      title: "Ek Parçalar",      items: EK_PARCALAR },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hesap
// ─────────────────────────────────────────────────────────────────────────────

export type CalculatedRow = ProductRecipe & {
  cementCost: number;
  aggregateCost: number;
  steelCost: number;
  araToplamCost: number;        // Ara Toplam
  genelGider: number;           // Genel Gider (araToplamCost × overheadRate%)
  toplamMaliyet: number;        // Toplam Maliyet (Ara Toplam + Genel Gider)
  kar: number;                  // Kar (toplamMaliyet × profitRate%)
  karliAdetFiyat: number;       // Karlı Adet Fiyat (Toplam Maliyet + Kar)
  karliMetreFiyat: number | null; // Karlı Metre Fiyat (Karlı Adet / boy m)
};

export function calculateRows(
  items: ProductRecipe[],
  prices: UnitPrices
): CalculatedRow[] {
  return items.map((r) => {
    const cementCost    = r.cement * prices.cement;
    const aggregateCost = r.aggregate * prices.aggregate;
    const steelCost     = r.steel * prices.steel;

    const araToplamCost = cementCost + aggregateCost + steelCost
                          + r.contaPrice + r.laborPrice;
    const genelGider    = araToplamCost * (prices.overheadRate / 100);
    const toplamMaliyet = araToplamCost + genelGider;
    const kar           = toplamMaliyet * (prices.profitRate / 100);
    const karliAdetFiyat  = toplamMaliyet + kar;
    const karliMetreFiyat = r.length > 0 ? karliAdetFiyat / (r.length / 1000) : null;

    return {
      ...r,
      cementCost, aggregateCost, steelCost,
      araToplamCost, genelGider, toplamMaliyet, kar,
      karliAdetFiyat, karliMetreFiyat,
    };
  });
}

/** Şifre — değiştirmek için bu satırı düzenleyin */
export const HESAP_PASSWORD = "ozlem2025";
