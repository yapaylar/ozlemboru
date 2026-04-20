/**
 * Birim fiyat hesap verileri.
 * Malzeme miktarlarını (kg) Excel'deki sekmelerden güncelleyin.
 */

export type ProductRecipe = {
  id: string;
  label: string;
  unit: "MT" | "ADET" | "TK";
  /** Metre fiyatı hesabı için boru/eleman boyu (mm). 0 ise metre fiyatı gösterilmez. */
  length: number;
  cement: number;    // Çimento (kg)
  aggregate: number; // Agrega — kum (kg)
  gravel: number;    // Çakıl (kg)
  water: number;     // Su (kg)
  steel: number;     // Demir büklüsü (kg)
};

export type PriceSection = {
  id: string;
  title: string;
  items: ProductRecipe[];
};

export type UnitPrices = {
  cement: number;      // ₺/kg
  aggregate: number;   // ₺/kg
  gravel: number;      // ₺/kg
  water: number;       // ₺/kg
  steel: number;       // ₺/kg
  profitRate: number;  // KAR %
  vatRate: number;     // KDV %
};

/** Varsayılan birim fiyatlar — BİRİM FİYAT sekmesinden güncelleyin */
export const DEFAULT_UNIT_PRICES: UnitPrices = {
  cement: 3.50,
  aggregate: 0.80,
  gravel: 0.90,
  water: 0.05,
  steel: 25.00,
  profitRate: 20,
  vatRate: 20,
};

// ─────────────────────────────────────────────────────────────────────────────
// BORULAR — Excel: BORULAR sekmesi (Ø200 → Ø2800)
// ─────────────────────────────────────────────────────────────────────────────

const BORULAR: ProductRecipe[] = [
  { id: "b200",  label: "Ø200",  unit: "MT",   length: 1500, cement:  57.70, aggregate:  20.70, gravel:   42.00, water:  1.74, steel:   0.00 },
  { id: "b300",  label: "Ø300",  unit: "MT",   length: 1500, cement:  87.40, aggregate:  37.20, gravel:   73.50, water:  2.62, steel:   0.00 },
  { id: "b400",  label: "Ø400",  unit: "MT",   length: 1500, cement: 120.00, aggregate:  51.00, gravel:  100.00, water:  3.60, steel:   0.00 },
  { id: "b500",  label: "Ø500",  unit: "MT",   length: 2000, cement: 210.00, aggregate:  90.00, gravel:  178.00, water:  6.30, steel:   0.00 },
  { id: "b600",  label: "Ø600",  unit: "MT",   length: 2000, cement: 265.00, aggregate: 113.00, gravel:  225.00, water:  7.95, steel:   0.00 },
  { id: "b800",  label: "Ø800",  unit: "MT",   length: 2000, cement: 390.00, aggregate: 167.00, gravel:  330.00, water: 11.70, steel:  29.40 },
  { id: "b1000", label: "Ø1000", unit: "MT",   length: 2000, cement: 520.00, aggregate: 222.00, gravel:  440.00, water: 15.60, steel:  49.20 },
  { id: "b1200", label: "Ø1200", unit: "MT",   length: 2000, cement: 700.00, aggregate: 299.00, gravel:  593.00, water: 21.00, steel:  81.00 },
  { id: "b1400", label: "Ø1400", unit: "MT",   length: 2000, cement: 850.00, aggregate: 363.00, gravel:  720.00, water: 25.50, steel: 120.00 },
  { id: "b1600", label: "Ø1600", unit: "MT",   length: 2000, cement: 1100.00, aggregate: 470.00, gravel:  932.00, water: 33.00, steel: 182.00 },
  { id: "b1800", label: "Ø1800", unit: "MT",   length: 2000, cement: 1300.00, aggregate: 556.00, gravel: 1102.00, water: 39.00, steel: 240.00 },
  { id: "b2000", label: "Ø2000", unit: "MT",   length: 2000, cement: 1550.00, aggregate: 662.00, gravel: 1313.00, water: 46.50, steel: 310.00 },
  { id: "b2200", label: "Ø2200", unit: "MT",   length: 2000, cement: 1800.00, aggregate: 769.00, gravel: 1525.00, water: 54.00, steel: 385.00 },
  { id: "b2400", label: "Ø2400", unit: "MT",   length: 2000, cement: 2100.00, aggregate: 897.00, gravel: 1779.00, water: 63.00, steel: 468.00 },
  { id: "b2600", label: "Ø2600", unit: "MT",   length: 2000, cement: 2400.00, aggregate: 1025.00, gravel: 2033.00, water: 72.00, steel: 559.00 },
  { id: "b2800", label: "Ø2800", unit: "MT",   length: 2000, cement: 2750.00, aggregate: 1174.00, gravel: 2329.00, water: 82.50, steel: 660.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// TABANLAR — Excel: TABANLAR sekmesi
// ─────────────────────────────────────────────────────────────────────────────

const TABANLAR: ProductRecipe[] = [
  { id: "t1000-d200", label: "1000'lik / Ø200-300-400", unit: "ADET", length: 0, cement: 150.00, aggregate: 64.00, gravel: 127.00, water: 4.50, steel: 18.00 },
  { id: "t1000-d500", label: "1000'lik / Ø500-600",     unit: "ADET", length: 0, cement: 175.00, aggregate: 75.00, gravel: 148.00, water: 5.25, steel: 22.00 },
  { id: "t1200-d200", label: "1200'lük / Ø200-300-400", unit: "ADET", length: 0, cement: 210.00, aggregate: 90.00, gravel: 178.00, water: 6.30, steel: 26.00 },
  { id: "t1200-d500", label: "1200'lük / Ø500-600",     unit: "ADET", length: 0, cement: 240.00, aggregate: 103.00, gravel: 203.00, water: 7.20, steel: 30.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// GEÇİŞ ELEMANLARI — Excel: RED.BİL.GEÇİŞ PL. sekmesi
// ─────────────────────────────────────────────────────────────────────────────

const GECIS_ELEMANLARI: ProductRecipe[] = [
  { id: "ge200-300", label: "Ø200 → Ø300", unit: "ADET", length: 0, cement:  80.00, aggregate: 34.00, gravel:  68.00, water: 2.40, steel: 0.00 },
  { id: "ge300-400", label: "Ø300 → Ø400", unit: "ADET", length: 0, cement: 100.00, aggregate: 43.00, gravel:  85.00, water: 3.00, steel: 0.00 },
  { id: "ge400-500", label: "Ø400 → Ø500", unit: "ADET", length: 0, cement: 130.00, aggregate: 56.00, gravel: 110.00, water: 3.90, steel: 0.00 },
  { id: "ge500-600", label: "Ø500 → Ø600", unit: "ADET", length: 0, cement: 160.00, aggregate: 68.00, gravel: 136.00, water: 4.80, steel: 0.00 },
  { id: "ge600-800", label: "Ø600 → Ø800", unit: "ADET", length: 0, cement: 210.00, aggregate: 90.00, gravel: 178.00, water: 6.30, steel: 8.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// KAPAKLAR — Excel: ilgili sekme
// ─────────────────────────────────────────────────────────────────────────────

const KAPAKLAR: ProductRecipe[] = [
  { id: "k-pb-1000x500-c", label: "1000×500 Çerçevesiz Kapak",      unit: "ADET", length: 0, cement: 30.00, aggregate: 13.00, gravel: 25.00, water: 0.90, steel: 0.00 },
  { id: "k-pb-1000x500-p", label: "1000×500 Profil Çerçeveli Kapak", unit: "ADET", length: 0, cement: 34.00, aggregate: 15.00, gravel: 29.00, water: 1.02, steel: 0.00 },
  { id: "k-pb-1400-red",   label: "1400 Rediksiyon Kapak",           unit: "ADET", length: 0, cement: 95.00, aggregate: 41.00, gravel: 80.00, water: 2.85, steel: 6.00 },
  { id: "k-yuvarlak-ba",   label: "Yuvarlak BA Kapak",               unit: "ADET", length: 0, cement: 25.00, aggregate: 11.00, gravel: 21.00, water: 0.75, steel: 3.50 },
  { id: "k-ys-500x500",    label: "500×500 YS Kare Kapak",           unit: "ADET", length: 0, cement: 14.00, aggregate:  6.00, gravel: 12.00, water: 0.42, steel: 0.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// EK PARÇALAR — Excel: ilgili sekme
// ─────────────────────────────────────────────────────────────────────────────

const EK_PARCALAR: ProductRecipe[] = [
  { id: "ep-150-dirsek",  label: "150×450 Dirsek",           unit: "ADET", length: 0, cement:  8.00, aggregate:  3.40, gravel:  6.80, water: 0.24, steel: 0.00 },
  { id: "ep-200-150c",   label: "200×150 C Parçası",         unit: "ADET", length: 0, cement: 27.00, aggregate: 11.60, gravel: 22.90, water: 0.81, steel: 0.00 },
  { id: "ep-200-dirsek", label: "200×450 Dirsek",            unit: "ADET", length: 0, cement: 13.00, aggregate:  5.60, gravel: 11.00, water: 0.39, steel: 0.00 },
  { id: "ep-300-150c",   label: "300×150 C Parçası",         unit: "ADET", length: 0, cement: 48.00, aggregate: 20.50, gravel: 40.70, water: 1.44, steel: 0.00 },
  { id: "ep-300-200c",   label: "300×200 C Parçası",         unit: "ADET", length: 0, cement: 57.00, aggregate: 24.40, gravel: 48.30, water: 1.71, steel: 0.00 },
  { id: "ep-400-200c",   label: "400×200 C Parçası",         unit: "ADET", length: 0, cement: 63.00, aggregate: 26.90, gravel: 53.40, water: 1.89, steel: 0.00 },
  { id: "ep-bilezik-50", label: "Yükseklik Ayar Bileziği 50 mm",  unit: "ADET", length: 0, cement:  7.50, aggregate:  3.20, gravel:  6.40, water: 0.23, steel: 0.00 },
  { id: "ep-bilezik-100", label: "Yükseklik Ayar Bileziği 100 mm", unit: "ADET", length: 0, cement: 15.00, aggregate:  6.40, gravel: 12.70, water: 0.45, steel: 0.00 },
  { id: "ep-bilezik-150", label: "Yükseklik Ayar Bileziği 150 mm", unit: "ADET", length: 0, cement: 22.50, aggregate:  9.60, gravel: 19.10, water: 0.68, steel: 0.00 },
  { id: "ep-bilezik-200", label: "Yükseklik Ayar Bileziği 200 mm", unit: "ADET", length: 0, cement: 30.00, aggregate: 12.80, gravel: 25.40, water: 0.90, steel: 0.00 },
];

// ─────────────────────────────────────────────────────────────────────────────

export const PRICE_SECTIONS: PriceSection[] = [
  { id: "borular",          title: "Borular",           items: BORULAR },
  { id: "tabanlar",         title: "Tabanlar",          items: TABANLAR },
  { id: "gecis-elemanlari", title: "Geçiş Elemanları",  items: GECIS_ELEMANLARI },
  { id: "kapaklar",         title: "Kapaklar",          items: KAPAKLAR },
  { id: "ek-parcalar",      title: "Ek Parçalar",       items: EK_PARCALAR },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hesap
// ─────────────────────────────────────────────────────────────────────────────

export type CalculatedRow = ProductRecipe & {
  materialCost: number;
  salePrice: number;
  unitPriceWithVat: number;
  pricePerMeter: number | null;
};

export function calculateRows(
  items: ProductRecipe[],
  prices: UnitPrices
): CalculatedRow[] {
  return items.map((r) => {
    const materialCost =
      r.cement * prices.cement +
      r.aggregate * prices.aggregate +
      r.gravel * prices.gravel +
      r.water * prices.water +
      r.steel * prices.steel;

    const salePrice = materialCost * (1 + prices.profitRate / 100);
    const unitPriceWithVat = salePrice * (1 + prices.vatRate / 100);
    const pricePerMeter =
      r.length > 0 ? unitPriceWithVat / (r.length / 1000) : null;

    return { ...r, materialCost, salePrice, unitPriceWithVat, pricePerMeter };
  });
}

/** Şifre — değiştirmek için bu satırı düzenleyin */
export const HESAP_PASSWORD = "ozlem2025";
