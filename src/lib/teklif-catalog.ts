/**
 * Teklif ürün kataloğu — Fiyat listesinden (Bayi Fiyat Listesi).
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
  { id: "b-150",  label: "150*1500 ENTG. C. BETON BORU",        unit: "MT", defaultPrice:  250.00 },
  { id: "b-200",  label: "200*1500 ENTG. C. BETON BORU",        unit: "MT", defaultPrice:  395.00 },
  { id: "b-300",  label: "300*1500 ENTG. C. BETON BORU",        unit: "MT", defaultPrice:  600.00 },
  { id: "b-400",  label: "400*2000 ENTG. C. BETON BORU",        unit: "MT", defaultPrice:  735.00 },
  { id: "b-500",  label: "500*2000 ENTG. C. BETON BORU",        unit: "MT", defaultPrice:  865.00 },
  { id: "b-600",  label: "600*2000 ENTG. C. BETON BORU",        unit: "MT", defaultPrice: 1275.00 },
  { id: "b-800",  label: "800*2000 ENT.CON. B.A. BORU",         unit: "MT", defaultPrice: 2125.00 },
  { id: "b-1000", label: "1000*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 2800.00 },
  { id: "b-1200", label: "1200*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 3635.00 },
  { id: "b-1400", label: "1400*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 5045.00 },
  { id: "b-1600", label: "1600*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 7275.00 },
  { id: "b-1800", label: "1800*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 11105.00 },
  { id: "b-2000", label: "2000*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 15070.00 },
  { id: "b-2200", label: "2200*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 17955.00 },
  { id: "b-2400", label: "2400*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 26135.00 },
  { id: "b-2600", label: "2600*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 32000.00 },
  { id: "b-2800", label: "2800*2000 ENTG. C. BETONARME BORU",   unit: "MT", defaultPrice: 0 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. ADAPTÖR BORULAR
// ─────────────────────────────────────────────────────────────────────────────
const ADAPTORLER: CatalogItem[] = [
  { id: "a-200",  label: "200*1000 BETON ADAPTÖR BORU",           unit: "ADET", defaultPrice:  252.00 },
  { id: "a-300",  label: "300*1000 BETON ADAPTÖR BORU",           unit: "ADET", defaultPrice:  395.00 },
  { id: "a-400",  label: "400*1500 ADAPTÖR BORU",                  unit: "ADET", defaultPrice:  900.00 },
  { id: "a-500",  label: "500*1500 ADAPTÖR B.A. BORU",             unit: "ADET", defaultPrice: 1110.00 },
  { id: "a-600",  label: "600*1500 BETON ADAPTÖR B.A. BORU",      unit: "ADET", defaultPrice: 1300.00 },
  { id: "a-800",  label: "800*1500 ADAPTÖR B.A. BORU",             unit: "ADET", defaultPrice: 3200.00 },
  { id: "a-1000", label: "1000*1500 BETON ADAPTÖR BORU",          unit: "ADET", defaultPrice: 4200.00 },
  { id: "a-1200", label: "1200*1500 BETONARME ADAPTÖR BORU",      unit: "ADET", defaultPrice: 5450.00 },
  { id: "a-1400", label: "1400*1500 BETONARME ADAPTÖR BORU",      unit: "ADET", defaultPrice: 7600.00 },
  { id: "a-1600", label: "1600*1500 B.A. ADAPTÖR BORU",           unit: "ADET", defaultPrice: 11000.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. 1000'LİK BACA ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const BACA_1000: CatalogItem[] = [
  { id: "bt1000-q200",   label: "1000 LİK ENTG. CON. BACA TABANLI (Q200 1+1)",     unit: "ADET", defaultPrice: 2600.00 },
  { id: "bt1000-q300",   label: "1000 LİK ENTG. CON. BACA TABANI (Q300 1+1)",      unit: "ADET", defaultPrice: 2700.00 },
  { id: "bt1000-q400",   label: "1000 LİK ENTG. CON. BACA TABANI (Q400 1+1)",      unit: "ADET", defaultPrice: 2870.00 },
  { id: "bt1000-q500",   label: "1000 LİK ENTG. CON. BACA TABANI (Q500 1+1)",      unit: "ADET", defaultPrice: 3730.00 },
  { id: "bt1000-std",    label: "1000 LİK ENTG. CON. BACA TABANLI",                 unit: "ADET", defaultPrice: 3800.00 },
  { id: "bt1000-konik",  label: "1000*650 ENTG. CON. MUA. B. KONİK ELEMAN",        unit: "ADET", defaultPrice: 1850.00 },
  { id: "bt1000-gov600", label: "1000*600 ENTG. CON. MUA. B.A. GÖVDE BİLEZİĞİ",   unit: "ADET", defaultPrice: 1840.00 },
  { id: "bt1000-gov350", label: "1000*350 ENTG. CON. MUA. B. GÖVDE BİLEZİĞİ",     unit: "ADET", defaultPrice: 1470.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. 1200'LÜK BACA ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const BACA_1200: CatalogItem[] = [
  { id: "bt1200-redkap",   label: "1200 LİK ENTG. CON. BA.BET. REDİKSİYON KAPAK",      unit: "ADET", defaultPrice: 1785.00 },
  { id: "bt1200-q300",     label: "1200 LİK ENTG. CON. BACA TABANI (Q300 1+1)",         unit: "ADET", defaultPrice: 3640.00 },
  { id: "bt1200-q400",     label: "1200 LİK ENTG. CON. BACA TABANI (Q400 1+1)",         unit: "ADET", defaultPrice: 3750.00 },
  { id: "bt1200-q500",     label: "1200 LİK ENTG. CON. BACA TABANI (Q500 1+1)",         unit: "ADET", defaultPrice: 3920.00 },
  { id: "bt1200-q600",     label: "1200 LİK ENTG. CON. BACA TABANI (Q600 1+1)",         unit: "ADET", defaultPrice: 4600.00 },
  { id: "bt1200-q800",     label: "1200 LİK ENTG. CON. BACA TABANI (Q800 1+1)",         unit: "ADET", defaultPrice: 4540.00 },
  { id: "bt1200-q1000",    label: "1200 LİK ENTG. CON. BACA TABANI (Q1000 1+1)",        unit: "ADET", defaultPrice: 4600.00 },
  { id: "bt1200-q1200",    label: "1200 LİK ENTG. CON. BACA TABANI (Q1200 1+1)",        unit: "ADET", defaultPrice: 8260.00 },
  { id: "bt1200-q1400",    label: "1200 LİK ENTG. CON. BACA TABANI (Q1400 1+1)",        unit: "ADET", defaultPrice: 12230.00 },
  { id: "bt1600-q1600",    label: "1600 LİK ENTG. CON. BACA TABANI (Q1600 1+1)",        unit: "ADET", defaultPrice: 13820.00 },
  { id: "bt1200-gec1600",  label: "1200*1600 M.BACASI GEÇİŞ KAPAĞL",                    unit: "ADET", defaultPrice: 25000.00 },
  { id: "bt1200-gec1400",  label: "1200*1400 M.BACASI GEÇİŞ KAPAĞL",                    unit: "ADET", defaultPrice: 5000.00 },
  { id: "bt1200-gec1000",  label: "1200*1000 M.BACASI GEÇİŞ KAPAĞL",                    unit: "ADET", defaultPrice: 4250.00 },
  { id: "bt1200-gec800",   label: "1200*800 M.BACASI GEÇİŞ KAPAĞL",                     unit: "ADET", defaultPrice: 3500.00 },
  { id: "bt1200-gec600",   label: "1200*600 M.BACASI GEÇİŞ KAPAĞL",                     unit: "ADET", defaultPrice: 3300.00 },
  { id: "bt1200-konik600", label: "1200*600 ENTG. CON. MUA. B. KONİK ELEMAN",           unit: "ADET", defaultPrice: 2800.00 },
  { id: "bt1200-gov350",   label: "1200*350 ENTG. CON. MUA. B. GÖVDE BİLEZİĞİ",        unit: "ADET", defaultPrice: 2050.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. YS (YAĞMUR SUYU) ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const YS_ELEMANLARI: CatalogItem[] = [
  { id: "ys-izgara-400",  label: "400*600*900 Y.S. IZGARA",                             unit: "ADET", defaultPrice: 3300.00 },
  { id: "ys-baca-tek",    label: "450*550*500 YS BACASI (TEK IZGARALI Q300 ÇIKIŞLI)",   unit: "ADET", defaultPrice: 2850.00 },
  { id: "ys-baca-cift",   label: "450*600*900 YS BACASI (ÇİFT IZGARALI Q300 ÇIKIŞLI)", unit: "ADET", defaultPrice: 4600.00 },
  { id: "ys-seri-izgara", label: "600*830*1500 YS SERİ IZGARA",                          unit: "ADET", defaultPrice: 5000.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. PARSEL ELEMANLARI
// ─────────────────────────────────────────────────────────────────────────────
const PARSEL_ELEMANLARI: CatalogItem[] = [
  { id: "ps-kapak-800",    label: "Q800*100 YUVARLAK BETONARME KAPAK",     unit: "ADET", defaultPrice:  800.00 },
  { id: "ps-taban-800",    label: "800 LÜK PARSEL TABAN ELEMANI (YUVARLAK)", unit: "ADET", defaultPrice: 1700.00 },
  { id: "ps-taban-kare",   label: "80*80*60 PARSEL TABAN ELEMANI (KARE)",   unit: "ADET", defaultPrice: 1750.00 },
  { id: "ps-baca-50",      label: "80*80*50 PARSEL BACASI",                  unit: "ADET", defaultPrice:  950.00 },
  { id: "ps-baca-30",      label: "80*80*30 PARSEL BACASI",                  unit: "ADET", defaultPrice:  850.00 },
  { id: "ps-kare-kapak",   label: "50*100 DEMİRLİ KARE KAPAK",              unit: "ADET", defaultPrice:  750.00 },
  { id: "ps-cerce-kapak",  label: "50*100 ÇERÇEVELİ PARSEL KAPAĞI",        unit: "ADET", defaultPrice: 2850.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. BETON BİLEZİKLER VE MAHRUT
// ─────────────────────────────────────────────────────────────────────────────
const BILEZIKLER: CatalogItem[] = [
  { id: "bb-800-50",    label: "80*50 BETON BİLEZİK",    unit: "ADET", defaultPrice:  760.00 },
  { id: "bb-800-30",    label: "80*30 BETON BİLEZİK",    unit: "ADET", defaultPrice:  700.00 },
  { id: "bb-800-mah",   label: "800 LÜK BETON MAHRUTI",  unit: "ADET", defaultPrice:  760.00 },
  { id: "bb-1000-50",   label: "1000*50 BETON BİLEZİK",  unit: "ADET", defaultPrice:  900.00 },
  { id: "bb-1000-30",   label: "1000*30 BETON BİLEZİK",  unit: "ADET", defaultPrice:  860.00 },
  { id: "bb-1000-mah",  label: "1000 LİK BETON MAHRUTI", unit: "ADET", defaultPrice:  900.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. ENTEGRE / EK PARÇALAR
// ─────────────────────────────────────────────────────────────────────────────
const EK_PARCALAR: CatalogItem[] = [
  { id: "ep-dirsek-200",    label: "200*450 ENTG. C. DİRSEK",                       unit: "ADET", defaultPrice:  560.00 },
  { id: "ep-c-200-150",     label: "200*150 ENTG. C. C PARÇASI",                    unit: "ADET", defaultPrice:  760.00 },
  { id: "ep-c-300-200",     label: "300*200 ENTG. C. C PARÇASI",                    unit: "ADET", defaultPrice:  920.00 },
  { id: "ep-c-400-200",     label: "400*200 ENTG. C. C PARÇASI",                    unit: "ADET", defaultPrice: 1800.00 },
  { id: "ep-c-500-200",     label: "500*200 ENTG. C.C PARÇASI",                     unit: "ADET", defaultPrice: 2000.00 },
  { id: "ep-boyun-bil",     label: "620*200 ENTG.CON. BOYUN BİLEZİĞİ",             unit: "ADET", defaultPrice:  875.00 },
  { id: "ep-cerceve",       label: "ÇERÇEVE MONTAJ ELEMANI (PİK HARİÇ)",           unit: "ADET", defaultPrice:  980.00 },
  { id: "ep-mb-taban",      label: "1000 LİK MB. BACA TABANI (200/300/400)",        unit: "ADET", defaultPrice: 2450.00 },
  { id: "ep-redkap-1000",   label: "1000 LİK REDİKSYON KAPAK",                     unit: "ADET", defaultPrice: 1700.00 },
  { id: "ep-taban-620",     label: "620*600-200 ENTEG.CON.TABAN ELEMANI",           unit: "ADET", defaultPrice: 1900.00 },
  { id: "ep-parsel-500",    label: "620*500 DAİRESEL PARSEL GÖVDE ELEMANI",         unit: "ADET", defaultPrice: 1150.00 },
  { id: "ep-parsel-300",    label: "620*300 DAİRESEL PARSEL GÖVDE ELEMANI",         unit: "ADET", defaultPrice:  975.00 },
  { id: "ep-reduksiyon",    label: "620*290 ENTEGRE REDÜKSOYONİ",                  unit: "ADET", defaultPrice:  975.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 9. KARE BACALAR VE KAPAKLAR
// ─────────────────────────────────────────────────────────────────────────────
const KARE_BACALAR: CatalogItem[] = [
  { id: "kb-taban",    label: "40*40 KARE TABAN ELEMANI",    unit: "ADET", defaultPrice: 1500.00 },
  { id: "kb-baca-40",  label: "40*40*40 KARE BACA",          unit: "ADET", defaultPrice:  900.00 },
  { id: "kb-baca-25",  label: "40*40*25 KARE BACA",          unit: "ADET", defaultPrice:  800.00 },
  { id: "kb-kapak",    label: "40*40 KARE KAPAK",            unit: "ADET", defaultPrice:  625.00 },
  { id: "kb-konik",    label: "80*80 KARE KONİK",            unit: "ADET", defaultPrice: 2100.00 },
  { id: "kb-baca-800", label: "600*800*500 KARE BACA",       unit: "ADET", defaultPrice: 1250.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 10. AYAR BİLEZİKLERİ
// ─────────────────────────────────────────────────────────────────────────────
const AYAR_BILEZIKLERI: CatalogItem[] = [
  { id: "ab-620-200", label: "620*200 BET. AYAR BİLEZİĞİ", unit: "ADET", defaultPrice: 825.00 },
  { id: "ab-620-150", label: "620*150 BET. AYAR BİLEZİĞİ", unit: "ADET", defaultPrice: 775.00 },
  { id: "ab-620-100", label: "620*100 BET. AYAR BİLEZİĞİ", unit: "ADET", defaultPrice: 725.00 },
  { id: "ab-620-50",  label: "620*50 BET. AYAR BİLEZİĞİ",  unit: "ADET", defaultPrice: 675.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 11. TAPUT VE DİĞER
// ─────────────────────────────────────────────────────────────────────────────
const DIGER: CatalogItem[] = [
  { id: "d-taput-85",   label: "85*85*55 IZGARA TAPUT",       unit: "ADET",  defaultPrice: 4300.00 },
  { id: "d-taput-135",  label: "135*50*60 IZGARA TAPUT",      unit: "ADET",  defaultPrice: 4750.00 },
  { id: "d-palet",      label: "PALET AHŞAP",                  unit: "ADET",  defaultPrice:  200.00 },
  { id: "d-nakliye-ic", label: "NAKLİYE TIR ŞEHİR İÇİ",      unit: "SEFER", defaultPrice: 8500.00 },
];

// ─────────────────────────────────────────────────────────────────────────────
export const TEKLIF_CATALOG: CatalogSection[] = [
  { id: "borular",        title: "Beton / Betonarme Borular",    items: BORULAR },
  { id: "adaptorler",     title: "Adaptör Borular",              items: ADAPTORLER },
  { id: "baca-1000",      title: "1000'lik Baca Elemanları",     items: BACA_1000 },
  { id: "baca-1200",      title: "1200'lük Baca Elemanları",     items: BACA_1200 },
  { id: "ys",             title: "YS Elemanları",                items: YS_ELEMANLARI },
  { id: "parsel",         title: "Parsel Elemanları",            items: PARSEL_ELEMANLARI },
  { id: "bilezikler",     title: "Beton Bilezikler ve Mahrut",   items: BILEZIKLER },
  { id: "ek-parcalar",    title: "Entegre / Ek Parçalar",        items: EK_PARCALAR },
  { id: "kare-bacalar",   title: "Kare Bacalar ve Kapaklar",     items: KARE_BACALAR },
  { id: "ayar-bilezik",   title: "Ayar Bilezikleri",             items: AYAR_BILEZIKLERI },
  { id: "diger",          title: "Diğer",                       items: DIGER },
];
