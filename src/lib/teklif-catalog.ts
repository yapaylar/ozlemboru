/**
 * Teklif ürün kataloğu — Güncel bayi fiyat listesi.
 * defaultPrice: teklife eklerken otomatik doldurulan liste fiyatı (değiştirilebilir).
 */

export type CatalogItem = {
  id: string;
  label: string;
  unit: "MT" | "ADET" | "SEFER";
  defaultPrice: number;
};

export type CatalogSection = {
  id: string;
  title: string;
  items: CatalogItem[];
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. BETON / BETONARME BORULAR
// ─────────────────────────────────────────────────────────────────────────────
const BORULAR: CatalogItem[] = [
  { id: "b-150",    label: "150*1500 ENTG. C. Beton Boru",         unit: "MT", defaultPrice:   267.00 },
  { id: "b-200",    label: "200*1500 ENTG. C. Beton Boru",         unit: "MT", defaultPrice:   267.00 },
  { id: "b-300",    label: "300*1500 ENTG. C. Beton Boru",         unit: "MT", defaultPrice:   415.00 },
  { id: "b-400",    label: "400*2000 ENTG. C. Beton Boru",         unit: "MT", defaultPrice:   635.00 },
  { id: "b-500",    label: "500*2000 ENTG. C. Beton Boru",         unit: "MT", defaultPrice:   778.00 },
  { id: "b-600",    label: "600*2000 ENTG. C. Beton Boru",         unit: "MT", defaultPrice:   923.00 },
  { id: "b-600ba",  label: "600*2000 ENT. CON. B.A. Boru",         unit: "MT", defaultPrice:  1340.00 },
  { id: "b-800",    label: "800*2000 ENTG. C. Betonarme Boru",     unit: "MT", defaultPrice:  2235.00 },
  { id: "b-1000",   label: "1000*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice:  2955.00 },
  { id: "b-1200",   label: "1200*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice:  3855.00 },
  { id: "b-1400",   label: "1400*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice:  5305.00 },
  { id: "b-1600",   label: "1600*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice:  7650.00 },
  { id: "b-1800",   label: "1800*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice:  9120.00 },
  { id: "b-2000",   label: "2000*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice: 11645.00 },
  { id: "b-2200",   label: "2200*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice: 15990.00 },
  { id: "b-2400",   label: "2400*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice: 19740.00 },
  { id: "b-2600",   label: "2600*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice: 27705.00 },
  { id: "b-2800",   label: "2800*2000 ENTG. C. Betonarme Boru",   unit: "MT", defaultPrice: 33910.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. ADAPTÖR BORULAR
// ─────────────────────────────────────────────────────────────────────────────
const ADAPTORLER: CatalogItem[] = [
  { id: "a-200",  label: "200*1000 Beton Adaptör Boru",       unit: "ADET", defaultPrice:   267.00 },
  { id: "a-300",  label: "300*1000 Beton Adaptör Boru",       unit: "ADET", defaultPrice:   415.00 },
  { id: "a-400",  label: "400*1500 Adaptör",                   unit: "ADET", defaultPrice:   953.00 },
  { id: "a-500",  label: "500*1500 Adaptör B. Boru",           unit: "ADET", defaultPrice:  1167.00 },
  { id: "a-600",  label: "600*1500 Beton Adaptör B.A. Boru",  unit: "ADET", defaultPrice:  1385.00 },
  { id: "a-800",  label: "800*1500 Adaptör B.A. Boru",         unit: "ADET", defaultPrice:  3353.00 },
  { id: "a-1000", label: "1000*1500 Beton Adaptör Boru",      unit: "ADET", defaultPrice:  4433.00 },
  { id: "a-1200", label: "1200*1500 Betonarme Adaptör Boru",  unit: "ADET", defaultPrice:  5785.00 },
  { id: "a-1400", label: "1400*1500 Betonarme Adaptör Boru",  unit: "ADET", defaultPrice:  7960.00 },
  { id: "a-1600", label: "1600*1500 B.A. Adaptör Boru",       unit: "ADET", defaultPrice: 11475.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. 1000'LİK BACA ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const BACA_1000: CatalogItem[] = [
  { id: "bt1000-q200",   label: "1000'lik ENTG. CON. Baca Tabanı Q200 1+1",    unit: "ADET", defaultPrice: 2780.00 },
  { id: "bt1000-q300",   label: "1000'lik ENTG. CON. Baca Tabanı Q300 1+1",    unit: "ADET", defaultPrice: 2880.00 },
  { id: "bt1000-q400",   label: "1000'lik ENTG. CON. Baca Tabanı Q400 1+1",    unit: "ADET", defaultPrice: 3055.00 },
  { id: "bt1000-q500",   label: "1000'lik ENTG. CON. Baca Tabanı Q500 1+1",    unit: "ADET", defaultPrice: 3980.00 },
  { id: "bt1000-q600",   label: "1000'lik ENTG. CON. Baca Tabanı Q600 1+1",    unit: "ADET", defaultPrice: 4060.00 },
  { id: "bt1000-konik",  label: "1000*650 ENTG. CON. Mua. B. Konik Elemanı",   unit: "ADET", defaultPrice: 1915.00 },
  { id: "bt1000-gov600", label: "1000*600 ENTG. CON. Mua. B.A. Gövde Bileziği", unit: "ADET", defaultPrice: 1900.00 },
  { id: "bt1000-gov350", label: "1000*350 ENTG. CON. Mua. B. Gövde Bileziği",  unit: "ADET", defaultPrice: 1545.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. 1200'LÜK / 1400'LÜK / 1600'LÜK BACA ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const BACA_1200: CatalogItem[] = [
  { id: "bt1400-redkap",   label: "1400'lük ENTG. BA. BET. Redüksiyon Kapak",      unit: "ADET", defaultPrice:  1885.00 },
  { id: "bt1600-redkap",   label: "1600'lük ENTG. BA. BET. Redüksiyon Kapak",      unit: "ADET", defaultPrice:  2175.00 },
  { id: "bt1200-q200",     label: "1200'lük ENTG. CON. Baca Tabanı Q200 1+1",      unit: "ADET", defaultPrice:  3905.00 },
  { id: "bt1200-q300",     label: "1200'lük ENTG. CON. Baca Tabanı Q300 1+1",      unit: "ADET", defaultPrice:  4015.00 },
  { id: "bt1200-q400",     label: "1200'lük ENTG. CON. Baca Tabanı Q400 1+1",      unit: "ADET", defaultPrice:  4185.00 },
  { id: "bt1200-q500",     label: "1200'lük ENTG. CON. Baca Tabanı Q500 1+1",      unit: "ADET", defaultPrice:  4855.00 },
  { id: "bt1200-q600",     label: "1200'lük ENTG. CON. Baca Tabanı Q600 1+1",      unit: "ADET", defaultPrice:  4930.00 },
  { id: "bt1200-q800",     label: "1200'lük ENTG. CON. Baca Tabanı Q800 1+1",      unit: "ADET", defaultPrice:  8700.00 },
  { id: "bt1200-q1000",    label: "1200'lük ENTG. CON. Baca Tabanı Q1000 1+1",     unit: "ADET", defaultPrice: 12930.00 },
  { id: "bt1200-q1200",    label: "1200'lük ENTG. CON. Baca Tabanı Q1200 1+1",     unit: "ADET", defaultPrice: 14700.00 },
  { id: "bt1200-q1400",    label: "1200'lük ENTG. CON. Baca Tabanı Q1400 1+1",     unit: "ADET", defaultPrice: 22250.00 },
  { id: "bt1600-q1600",    label: "1600'lük ENTG. CON. Baca Tabanı Q1600 1+1",     unit: "ADET", defaultPrice: 26000.00 },
  { id: "bt1600-gec1600",  label: "1600*1600 M. Bacası Geçiş Kapağı",               unit: "ADET", defaultPrice:  5500.00 },
  { id: "bt1200-gec1400",  label: "1200*1400 M. Bacası Geçiş Kapağı",               unit: "ADET", defaultPrice:  4500.00 },
  { id: "bt1200-gec1200",  label: "1200*1200 M. Bacası Geçiş Kapağı",               unit: "ADET", defaultPrice:  3750.00 },
  { id: "bt1200-gec1000",  label: "1200*1000 M. Bacası Geçiş Kapağı",               unit: "ADET", defaultPrice:  3500.00 },
  { id: "bt1200-gec800",   label: "1200*800 M. Bacası Geçiş Kapağı",                unit: "ADET", defaultPrice:  3000.00 },
  { id: "bt1200-konik780", label: "1200*780 ENTG. CON. Mua. B. Konik Elemanı",      unit: "ADET", defaultPrice:  2550.00 },
  { id: "bt1200-gov600",   label: "1200*600 ENTG. CON. Mua. B. Gövde Bileziği",     unit: "ADET", defaultPrice:  2500.00 },
  { id: "bt1200-gov350",   label: "1200*350 ENTG. CON. Mua. B. Gövde Bileziği",     unit: "ADET", defaultPrice:  1860.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. YS (YAĞMUR SUYU) ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const YS_ELEMANLARI: CatalogItem[] = [
  { id: "ys-izgara-400",  label: "400*600*900 Y.S. Izgarası",                            unit: "ADET", defaultPrice: 1950.00 },
  { id: "ys-baca-tek",    label: "450*550*500 YS Bacası (Tek Izgaralı Q300 Çıkışlı)",   unit: "ADET", defaultPrice: 3000.00 },
  { id: "ys-baca-cift",   label: "450*600*900 YS Bacası (Çift Izgaralı Q300 Çıkışlı)", unit: "ADET", defaultPrice: 4750.00 },
  { id: "ys-seri-izgara", label: "600*830*1500 YS Seri Izgara",                          unit: "ADET", defaultPrice: 5500.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. PARSEL ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const PARSEL_ELEMANLARI: CatalogItem[] = [
  { id: "ps-kapak-800",   label: "Q800*100 Yuvarlak Betonarme Kapak",       unit: "ADET", defaultPrice:  850.00 },
  { id: "ps-taban-800",   label: "800'lük Parsel Taban Elemanı (Yuvarlak)", unit: "ADET", defaultPrice: 1800.00 },
  { id: "ps-taban-kare",  label: "80*80*60 Parsel Taban Elemanı (Kare)",    unit: "ADET", defaultPrice: 1850.00 },
  { id: "ps-baca-50",     label: "80*80*50 Parsel Bacası",                   unit: "ADET", defaultPrice: 1040.00 },
  { id: "ps-baca-30",     label: "80*80*30 Parsel Bacası",                   unit: "ADET", defaultPrice:  900.00 },
  { id: "ps-kare-kapak",  label: "50*100 Demirli Kare Kapak",               unit: "ADET", defaultPrice:  800.00 },
  { id: "ps-cerce-kapak", label: "50*100 Çerçeveli Parsel Kapağı",         unit: "ADET", defaultPrice: 3150.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. BETON BİLEZİKLER VE MAHRUT
// ─────────────────────────────────────────────────────────────────────────────
const BILEZIKLER: CatalogItem[] = [
  { id: "bb-800-50",   label: "80*50 Beton Bilezik",    unit: "ADET", defaultPrice: 800.00 },
  { id: "bb-800-30",   label: "80*30 Beton Bilezik",    unit: "ADET", defaultPrice: 750.00 },
  { id: "bb-800-mah",  label: "800'lük Beton Mahruti",  unit: "ADET", defaultPrice: 800.00 },
  { id: "bb-1000-50",  label: "1000*50 Beton Bilezik",  unit: "ADET", defaultPrice: 950.00 },
  { id: "bb-1000-30",  label: "1000*30 Beton Bilezik",  unit: "ADET", defaultPrice: 900.00 },
  { id: "bb-1000-mah", label: "1000'lik Beton Mahruti", unit: "ADET", defaultPrice: 950.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. ENTEGRE / EK PARÇALAR
// ─────────────────────────────────────────────────────────────────────────────
const EK_PARCALAR: CatalogItem[] = [
  { id: "ep-dirsek-200",  label: "200*450 ENTG. C. Dirsek",                      unit: "ADET", defaultPrice:  600.00 },
  { id: "ep-c-200-150",   label: "200*150 ENTG. C. C Parçası",                   unit: "ADET", defaultPrice:  810.00 },
  { id: "ep-c-300-200",   label: "300*200 ENTG. C. C Parçası",                   unit: "ADET", defaultPrice:  990.00 },
  { id: "ep-c-400-200",   label: "400*200 ENTG. C. C Parçası",                   unit: "ADET", defaultPrice: 1920.00 },
  { id: "ep-c-500-200",   label: "500*200 ENTG. C. C Parçası",                   unit: "ADET", defaultPrice: 2140.00 },
  { id: "ep-boyun-bil",   label: "620*200 ENTG. CON. Boyun Bileziği",            unit: "ADET", defaultPrice:  915.00 },
  { id: "ep-cerceve",     label: "Çerçeve Montaj Elemanı (Pik Hariç)",          unit: "ADET", defaultPrice: 1050.00 },
  { id: "ep-mb-taban",    label: "1000'lik M. Baca Tabanı (200/300/400)",        unit: "ADET", defaultPrice: 2550.00 },
  { id: "ep-redkap-1000", label: "1000'lik Redüksiyon Kapak",                    unit: "ADET", defaultPrice: 1800.00 },
  { id: "ep-taban-620",   label: "620*600-200 Enteg. CON. Taban Elemanı",        unit: "ADET", defaultPrice: 2000.00 },
  { id: "ep-parsel-500",  label: "620*500 Dairesel Parsel Gövde Elemanı",        unit: "ADET", defaultPrice: 1300.00 },
  { id: "ep-parsel-300",  label: "620*300 Dairesel Parsel Gövde Elemanı",        unit: "ADET", defaultPrice: 1000.00 },
  { id: "ep-reduksiyon",  label: "620*290 Entegre Redüksiyon",                   unit: "ADET", defaultPrice: 1000.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 9. KARE BACALAR VE KAPAKLAR
// ─────────────────────────────────────────────────────────────────────────────
const KARE_BACALAR: CatalogItem[] = [
  { id: "kb-taban",    label: "40*40 Kare Taban Elemanı",  unit: "ADET", defaultPrice: 1600.00 },
  { id: "kb-baca-40",  label: "40*40*40 Kare Baca",        unit: "ADET", defaultPrice:  950.00 },
  { id: "kb-baca-25",  label: "40*40*25 Kare Baca",        unit: "ADET", defaultPrice:  850.00 },
  { id: "kb-kapak",    label: "40*40 Kare Kapak",          unit: "ADET", defaultPrice:  660.00 },
  { id: "kb-konik",    label: "80*80 Kare Konik",          unit: "ADET", defaultPrice: 2250.00 },
  { id: "kb-baca-800", label: "600*800*500 Kare Baca",     unit: "ADET", defaultPrice: 1500.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 10. AYAR BİLEZİKLERİ
// ─────────────────────────────────────────────────────────────────────────────
const AYAR_BILEZIKLERI: CatalogItem[] = [
  { id: "ab-620-200", label: "620*200 Bet. Ayar Bileziği", unit: "ADET", defaultPrice: 860.00 },
  { id: "ab-620-150", label: "620*150 Bet. Ayar Bileziği", unit: "ADET", defaultPrice: 810.00 },
  { id: "ab-620-100", label: "620*100 Bet. Ayar Bileziği", unit: "ADET", defaultPrice: 760.00 },
  { id: "ab-620-50",  label: "620*50 Bet. Ayar Bileziği",  unit: "ADET", defaultPrice: 710.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 11. TAPUT VE DİĞER
// ─────────────────────────────────────────────────────────────────────────────
const DIGER: CatalogItem[] = [
  { id: "d-taput-85",   label: "85*85*55 Izgara Taput",        unit: "ADET",  defaultPrice: 4750.00 },
  { id: "d-taput-135",  label: "135*50*60 Izgara Taput",       unit: "ADET",  defaultPrice: 5225.00 },
  { id: "d-palet",      label: "Palet Ahşap",                   unit: "ADET",  defaultPrice:  275.00 },
  { id: "d-nakliye-ic", label: "Nakliye Tır Şehir İçi 50 km", unit: "SEFER", defaultPrice: 9000.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
export const TEKLIF_CATALOG: CatalogSection[] = [
  { id: "borular",      title: "Beton / Betonarme Borular",    items: BORULAR },
  { id: "adaptorler",   title: "Adaptör Borular",              items: ADAPTORLER },
  { id: "baca-1000",    title: "1000'lik Baca Elemanları",     items: BACA_1000 },
  { id: "baca-1200",    title: "1200–1600'lük Baca Elemanları", items: BACA_1200 },
  { id: "ys",           title: "YS Elemanları",                items: YS_ELEMANLARI },
  { id: "parsel",       title: "Parsel Elemanları",            items: PARSEL_ELEMANLARI },
  { id: "bilezikler",   title: "Beton Bilezikler ve Mahrut",   items: BILEZIKLER },
  { id: "ek-parcalar",  title: "Entegre / Ek Parçalar",        items: EK_PARCALAR },
  { id: "kare-bacalar", title: "Kare Bacalar ve Kapaklar",     items: KARE_BACALAR },
  { id: "ayar-bilezik", title: "Ayar Bilezikleri",             items: AYAR_BILEZIKLERI },
  { id: "diger",        title: "Diğer",                       items: DIGER },
];
