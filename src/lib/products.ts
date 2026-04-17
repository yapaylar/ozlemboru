export type ProductOption = {
  id: string;
  label: string;       // "Ø150"
  length: string;      // "1500 mm"
  weight: string;      // "120 kg"
  extraLabel?: string; // ek bilgi (dirsek cinsi vs.)
};

export type Product = {
  id: string;
  categoryId: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  unit: "MT" | "ADET" | "TK";
  standard?: string;
  optionLabel: string;  // seçici başlığı: "Anma Çapı", "Boy", "Boyut"
  options: ProductOption[];
};

export type ProductCategory = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  standard?: string;
};

// ─── KATEGORİLER ───────────────────────────────────────────────────────────

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "beton-betonarme-borular",
    title: "Beton ve Betonarme Borular",
    shortTitle: "Beton Borular",
    description: "Ø150–Ø2000mm, buhar kürlü, entegre contalı muflu ve lamba zıvanalı beton-betonarme borular.",
    image: "/images/products/beton-betonarme-borular.png",
    standard: "TS 821 EN 1916",
  },
  {
    id: "muayene-bacasi-elemanlari",
    title: "Muayene Bacası Elemanları",
    shortTitle: "Muayene Bacası",
    description: "TS EN 1917 standardına uygun taban elemanları, gövde bilezikleri ve konik elemanlar.",
    image: "/images/products/muayene-bacasi-elemanlari.png",
    standard: "TS EN 1917",
  },
  {
    id: "parsel-bacasi-elemanlari",
    title: "Parsel Bacası Elemanları",
    shortTitle: "Parsel Bacası",
    description: "TS 13473 standardına uygun, konut ve sanayi parsellerinde kanalizasyon bağlantı elemanları.",
    image: "/images/products/parsel-bacasi-elemanlari.png",
    standard: "TS 13473",
  },
  {
    id: "yagmur-suyu-izgara-elemanlari",
    title: "Yağmur Suyu Izgara Elemanları",
    shortTitle: "YS Izgara",
    description: "Yol ve kaldırım yüzey sularının toplanması için yüksek taşıma kapasiteli beton ızgara elemanları.",
    image: "/images/products/yagmur-suyu-izgara-elemanlari.png",
  },
  {
    id: "kanalizasyon-beton-ek-parcalari",
    title: "Kanalizasyon Beton Ek Parçaları",
    shortTitle: "Ek Parçalar",
    description: "Hat değişimi, çap geçişi ve yön değiştirme için entegre contalı beton ek parçaları.",
    image: "/images/products/kanalizasyon-beton-ek-parcalari.png",
  },
  {
    id: "betonarme-su-depolari",
    title: "Betonarme Su Depoları",
    shortTitle: "Su Depoları",
    description: "İçme suyu ve sulama amaçlı, farklı kapasitelerde prefabrik sızdırmaz betonarme su depoları.",
    image: "/images/products/betonarme-su-depolari.png",
  },
];

// ─── ÜRÜNLER ────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [

  // ── BETON VE BETONARME BORULAR ──────────────────────────────────────────

  {
    id: "muflu-beton-boru",
    categoryId: "beton-betonarme-borular",
    title: "Buhar Kürlü Entegre Contalı Muflu Beton Boru",
    shortTitle: "Muflu Beton Boru",
    description: "Kanalizasyon ve drenaj hatlarında kullanılan, entegre kauçuk contalı, buhar kürlü muflu beton borular. TS 821 EN 1916 standardına uygundur.",
    image: "/images/products/beton-betonarme-borular.png",
    unit: "MT",
    standard: "TS 821 EN 1916",
    optionLabel: "Anma Çapı",
    options: [
      { id: "d150", label: "Ø150", length: "1500", weight: "120" },
      { id: "d200", label: "Ø200", length: "1500", weight: "155" },
      { id: "d300", label: "Ø300", length: "1500", weight: "265" },
      { id: "d400", label: "Ø400", length: "1500", weight: "425" },
      { id: "d500", label: "Ø500", length: "2000", weight: "850" },
      { id: "d600", label: "Ø600", length: "2000", weight: "1.020" },
    ],
  },
  {
    id: "muflu-betonarme-boru",
    categoryId: "beton-betonarme-borular",
    title: "Buhar Kürlü Entegre Contalı Muflu Betonarme Boru",
    shortTitle: "Muflu Betonarme Boru",
    description: "Çelik takviyeli, entegre kauçuk contalı, buhar kürlü muflu betonarme borular. Büyük çaplı kanalizasyon ve altyapı projelerinde tercih edilir.",
    image: "/images/products/beton-betonarme-borular.png",
    unit: "MT",
    standard: "TS 821 EN 1916",
    optionLabel: "Anma Çapı",
    options: [
      { id: "d800",  label: "Ø800",  length: "2000", weight: "1.780" },
      { id: "d1000", label: "Ø1000", length: "2000", weight: "2.400" },
      { id: "d1200", label: "Ø1200", length: "2000", weight: "3.400" },
      { id: "d1400", label: "Ø1400", length: "2000", weight: "4.100" },
      { id: "d1600", label: "Ø1600", length: "2000", weight: "5.850" },
    ],
  },
  {
    id: "lamba-zivanali-betonarme-boru",
    categoryId: "beton-betonarme-borular",
    title: "Buhar Kürlü Entegre Contalı Lamba Zıvanalı Betonarme Boru",
    shortTitle: "Lamba Zıvanalı Betonarme Boru",
    description: "Çok büyük çaplı altyapı projelerinde kullanılan, lamba-zıvana geçmeli, entegre contalı betonarme borular.",
    image: "/images/products/beton-betonarme-borular.png",
    unit: "MT",
    standard: "TS 821 EN 1916",
    optionLabel: "Anma Çapı",
    options: [
      { id: "d1800", label: "Ø1800", length: "2000", weight: "6.400" },
      { id: "d2000", label: "Ø2000", length: "2000", weight: "7.100" },
    ],
  },
  {
    id: "beton-adaptor-boru",
    categoryId: "beton-betonarme-borular",
    title: "Beton Adaptör Boru",
    shortTitle: "Beton Adaptör Boru",
    description: "Farklı üretici borularla uyumlu bağlantı sağlamak amacıyla üretilen, kısa boylu beton adaptör borular.",
    image: "/images/products/beton-betonarme-borular.png",
    unit: "ADET",
    standard: "TS 821 EN 1916",
    optionLabel: "Anma Çapı",
    options: [
      { id: "d200", label: "Ø200", length: "1000", weight: "107" },
      { id: "d300", label: "Ø300", length: "1000", weight: "182" },
      { id: "d400", label: "Ø400", length: "1000", weight: "300" },
      { id: "d500", label: "Ø500", length: "1650", weight: "701" },
      { id: "d600", label: "Ø600", length: "1650", weight: "948" },
    ],
  },
  {
    id: "betonarme-adaptor-boru",
    categoryId: "beton-betonarme-borular",
    title: "Betonarme Adaptör Boru",
    shortTitle: "Betonarme Adaptör Boru",
    description: "Büyük çaplı betonarme boru hatlarında farklı üretici sistemleriyle geçiş sağlamak için kullanılan adaptör borular.",
    image: "/images/products/beton-betonarme-borular.png",
    unit: "ADET",
    standard: "TS 821 EN 1916",
    optionLabel: "Anma Çapı",
    options: [
      { id: "d800",  label: "Ø800",  length: "1000", weight: "890" },
      { id: "d1000", label: "Ø1000", length: "1000", weight: "1.200" },
      { id: "d1200", label: "Ø1200", length: "1500", weight: "2.846" },
      { id: "d1400", label: "Ø1400", length: "1500", weight: "3.382" },
    ],
  },
  // ── PARSEL BACASI ELEMANLARI ────────────────────────────────────────────

  {
    id: "pb-taban-elemani",
    categoryId: "parsel-bacasi-elemanlari",
    title: "Parsel Bacası Taban Elemanı",
    shortTitle: "PB. Taban Elemanı",
    description: "Konut ve sanayi parsellerinde kanalizasyon bağlantı hatlarında kullanılan beton parsel bacası taban elemanları.",
    image: "/images/products/parsel-bacasi-elemanlari.png",
    unit: "ADET",
    standard: "TS 13473",
    optionLabel: "Anma Boyutu / Boru Çapı",
    options: [
      { id: "800x800-d150", label: "800×800 / Ø150", length: "600", weight: "850" },
      { id: "800x800-d200", label: "800×800 / Ø200", length: "600", weight: "850" },
      { id: "1000-d200",    label: "Ø1000 / Ø200",   length: "780", weight: "1.750" },
      { id: "1000-d300",    label: "Ø1000 / Ø300",   length: "780", weight: "1.750" },
    ],
  },
  {
    id: "pb-govde-elemani",
    categoryId: "parsel-bacasi-elemanlari",
    title: "Parsel Bacası Gövde Elemanı",
    shortTitle: "PB. Gövde Elemanı",
    description: "Parsel bacası derinliğini ayarlamak için kullanılan, farklı boy seçenekli beton gövde bilezikleri.",
    image: "/images/products/parsel-bacasi-elemanlari.png",
    unit: "ADET",
    standard: "TS 13473",
    optionLabel: "Anma Boyutu × Yükseklik",
    options: [
      { id: "800x800-h500", label: "800×800 / H:500", length: "500", weight: "460" },
      { id: "800x800-h250", label: "800×800 / H:250", length: "250", weight: "240" },
      { id: "1000-h600",    label: "Ø1000 / H:600",   length: "600", weight: "430" },
      { id: "1000-h350",    label: "Ø1000 / H:350",   length: "350", weight: "225" },
    ],
  },
  {
    id: "pb-kapak-elemani",
    categoryId: "parsel-bacasi-elemanlari",
    title: "Parsel Bacası Kapak Elemanı",
    shortTitle: "PB. Kapak Elemanı",
    description: "Parsel bacasını üstten kapatan, çerçevesiz, profil çerçeveli ve rediksiyon kapak seçenekleri.",
    image: "/images/products/parsel-bacasi-elemanlari.png",
    unit: "ADET",
    standard: "TS 13473",
    optionLabel: "Kapak Tipi",
    options: [
      { id: "1000x500-cercevesiz",    label: "1000×500 Çerçevesiz",      length: "100", weight: "100" },
      { id: "1000x500-profil",        label: "1000×500 Profil Çerçeveli", length: "100", weight: "114" },
      { id: "1400-rediksiyon",        label: "1400 Rediksiyon",           length: "250", weight: "750" },
      { id: "yuvarlak-ba-kapak",      label: "Yuvarlak BA Kapak",         length: "100", weight: "80" },
    ],
  },

  // ── YAĞMUR SUYU IZGARA ELEMANLARI ───────────────────────────────────────

  {
    id: "ys-kare-taban-elemani",
    categoryId: "yagmur-suyu-izgara-elemanlari",
    title: "400×400 YS Kare Taban Elemanı",
    shortTitle: "YS Kare Taban",
    description: "Yol ve kaldırım yüzey sularının toplanması için kullanılan, 400×400 mm kare beton taban elemanı.",
    image: "/images/products/yagmur-suyu-izgara-elemanlari.png",
    unit: "ADET",
    optionLabel: "Boyut",
    options: [
      { id: "400x400", label: "400×400", length: "400", weight: "280" },
    ],
  },
  {
    id: "ys-kare-govde-elemani",
    categoryId: "yagmur-suyu-izgara-elemanlari",
    title: "400×400 YS Kare Gövde Elemanı",
    shortTitle: "YS Kare Gövde",
    description: "Yağmur suyu kare ızgara sistemlerinde derinlik ayarı için kullanılan beton gövde elemanı.",
    image: "/images/products/yagmur-suyu-izgara-elemanlari.png",
    unit: "ADET",
    optionLabel: "Boyut",
    options: [
      { id: "400x400", label: "400×400", length: "400", weight: "150" },
    ],
  },
  {
    id: "ys-kare-kapak-elemani",
    categoryId: "yagmur-suyu-izgara-elemanlari",
    title: "500×500 YS Kare Kapak Elemanı",
    shortTitle: "YS Kare Kapak",
    description: "Kare beton yağmur suyu ızgara sistemlerinde kullanılan 500×500 mm beton kapak elemanı.",
    image: "/images/products/yagmur-suyu-izgara-elemanlari.png",
    unit: "ADET",
    optionLabel: "Boyut",
    options: [
      { id: "500x500", label: "500×500", length: "100", weight: "45" },
    ],
  },
  {
    id: "ys-izgara-tabani",
    categoryId: "yagmur-suyu-izgara-elemanlari",
    title: "Yağmur Suyu Izgara Tabanı",
    shortTitle: "YS Izgara Tabanı",
    description: "Yol kenarı yüzey suyu tahliyesi için tek ve çift ızgaralı, farklı boyutlarda beton ızgara taban elemanları.",
    image: "/images/products/yagmur-suyu-izgara-elemanlari.png",
    unit: "ADET",
    optionLabel: "Boyut / Tip",
    options: [
      { id: "400x600",      label: "400×600",                    length: "1000", weight: "950" },
      { id: "400x1200",     label: "400×1200",                   length: "700",  weight: "1.400" },
      { id: "450x500-tek",  label: "450×500 (Tek Izgaralı)",     length: "550",  weight: "450" },
      { id: "450x900-cift", label: "450×900 (Çift Izgaralı)",    length: "600",  weight: "400" },
    ],
  },
  {
    id: "baca-taban-ve-bilezik-1000",
    categoryId: "yagmur-suyu-izgara-elemanlari",
    title: "Ø1000 Baca Taban ve Beton Elemanları",
    shortTitle: "Ø1000 Baca Elemanları",
    description: "Ø1000 muayene ve baca sistemleri için taban elemanı, beton bilezik ve mahruti elemanlar.",
    image: "/images/products/yagmur-suyu-izgara-elemanlari.png",
    unit: "ADET",
    optionLabel: "Eleman Tipi / Boy",
    options: [
      { id: "1000-taban-et",    label: "Ø1000 Baca Taban (E.T)",   length: "900", weight: "1.440" },
      { id: "1000-bilezik-500", label: "Ø1000 Beton Bilezik 500",  length: "500", weight: "400" },
      { id: "1000-bilezik-250", label: "Ø1000 Beton Bilezik 250",  length: "250", weight: "300" },
      { id: "1000-mahruti",     label: "Ø1000 Beton Mahruti",      length: "250", weight: "370" },
    ],
  },
  {
    id: "baca-taban-ve-bilezik-800",
    categoryId: "yagmur-suyu-izgara-elemanlari",
    title: "Ø800 Baca Taban ve Beton Elemanları",
    shortTitle: "Ø800 Baca Elemanları",
    description: "Ø800 baca sistemleri için yuvarlak taban elemanı, beton bilezik ve mahruti elemanlar.",
    image: "/images/products/yagmur-suyu-izgara-elemanlari.png",
    unit: "ADET",
    optionLabel: "Eleman Tipi / Boy",
    options: [
      { id: "800-taban-yuv",    label: "Ø800 Baca Tabanı (Yuvarlak)", length: "600", weight: "650" },
      { id: "800-bilezik-500",  label: "Ø800 Beton Bilezik 500",      length: "500", weight: "280" },
      { id: "800-bilezik-250",  label: "Ø800 Beton Bilezik 250",      length: "250", weight: "180" },
      { id: "800-mahruti",      label: "Ø800 Beton Mahruti",          length: "250", weight: "250" },
    ],
  },

  // ── KANALİZASYON BETON EK PARÇALARI ────────────────────────────────────

  {
    id: "entg-c-dirsek-parca",
    categoryId: "kanalizasyon-beton-ek-parcalari",
    title: "Entegre Contalı Dirsek ve C Parçaları",
    shortTitle: "Dirsek ve C Parçaları",
    description: "Boru hatlarında yön değişimi ve T bağlantısı için kullanılan entegre contalı beton dirsek ve C parçaları.",
    image: "/images/products/kanalizasyon-beton-ek-parcalari.png",
    unit: "ADET",
    optionLabel: "Boyut",
    options: [
      { id: "150x450d", label: "150×450 Dirsek",    length: "st",  weight: "25",  extraLabel: "Dirsek" },
      { id: "200x150c", label: "200×150 C Parçası", length: "600", weight: "90",  extraLabel: "C Parçası" },
      { id: "200x450d", label: "200×450 Dirsek",    length: "st",  weight: "43",  extraLabel: "Dirsek" },
      { id: "300x150c", label: "300×150 C Parçası", length: "600", weight: "160", extraLabel: "C Parçası" },
      { id: "300x200c", label: "300×200 C Parçası", length: "600", weight: "190", extraLabel: "C Parçası" },
      { id: "400x200c", label: "400×200 C Parçası", length: "600", weight: "210", extraLabel: "C Parçası" },
    ],
  },
  {
    id: "yukseklik-ayar-bilezigi",
    categoryId: "kanalizasyon-beton-ek-parcalari",
    title: "MB. Baca Yükseklik Ayar Bileziği",
    shortTitle: "Yükseklik Ayar Bileziği",
    description: "Ø620 muayene bacalarında kapak seviyesini ayarlamak için kullanılan beton yükseklik ayar bilezikleri.",
    image: "/images/products/kanalizasyon-beton-ek-parcalari.png",
    unit: "ADET",
    optionLabel: "Boy",
    options: [
      { id: "h50",  label: "50 mm",  length: "50",  weight: "25" },
      { id: "h100", label: "100 mm", length: "100", weight: "50" },
      { id: "h150", label: "150 mm", length: "150", weight: "75" },
      { id: "h200", label: "200 mm", length: "200", weight: "100" },
      { id: "h250", label: "250 mm", length: "250", weight: "125" },
      { id: "h300", label: "300 mm", length: "300", weight: "200" },
    ],
  },

  // ── BETONARME SU DEPOLARI ────────────────────────────────────────────────

  {
    id: "betonarme-su-deposu",
    categoryId: "betonarme-su-depolari",
    title: "Prefabrik Betonarme Su Deposu",
    shortTitle: "Betonarme Su Deposu",
    description: "İçme suyu ve sulama amaçlı, sızdırmaz prefabrik betonarme su depoları. Farklı kapasite seçenekleri mevcuttur.",
    image: "/images/products/betonarme-su-depolari.png",
    unit: "ADET",
    optionLabel: "Kapasite",
    options: [
      { id: "25m3", label: "25 m³", length: "—", weight: "—" },
    ],
  },
  {
    id: "betonarme-hazne",
    categoryId: "betonarme-su-depolari",
    title: "Prefabrik Betonarme Hazne",
    shortTitle: "Betonarme Hazne",
    description: "Atık su, yağmur suyu veya sulama suyu depolamak amacıyla kullanılan prefabrik betonarme hazne elemanları.",
    image: "/images/products/betonarme-su-depolari.png",
    unit: "ADET",
    optionLabel: "Kapasite",
    options: [
      { id: "25m3", label: "25 m³", length: "—", weight: "—" },
    ],
  },

  // ── MEVCUT KATEGORİLER ───────────────────────────────────────────────────

  {
    id: "mb-taban-elemani",
    categoryId: "muayene-bacasi-elemanlari",
    title: "Entegre Contalı Muayene Bacası Taban Elemanı",
    shortTitle: "MB. Taban Elemanı",
    description: "Giriş borusu çapına göre seçilen, beton muayene bacası taban elemanları.",
    image: "/images/products/muayene-bacasi-elemanlari.png",
    unit: "ADET",
    standard: "TS EN 1917",
    optionLabel: "Baca Çapı / Giriş Çapı",
    options: [
      { id: "1000-d200", label: "1000'lik / Ø200-300-400", length: "—", weight: "—" },
      { id: "1000-d500", label: "1000'lik / Ø500-600",     length: "—", weight: "—" },
      { id: "1200-d200", label: "1200'lük / Ø200-300-400", length: "—", weight: "—" },
      { id: "1200-d500", label: "1200'lük / Ø500-600",     length: "—", weight: "—" },
    ],
  },
  {
    id: "mb-govde-bilezigi",
    categoryId: "muayene-bacasi-elemanlari",
    title: "Entegre Contalı Muayene Bacası Gövde Bileziği",
    shortTitle: "MB. Gövde Bileziği",
    description: "Muayene bacası gövdesini oluşturan, entegre contalı beton halka elemanlar.",
    image: "/images/products/muayene-bacasi-elemanlari.png",
    unit: "ADET",
    standard: "TS EN 1917",
    optionLabel: "Baca Çapı × Boy",
    options: [
      { id: "1000x600", label: "1000×600",  length: "600", weight: "—" },
      { id: "1000x350", label: "1000×350",  length: "350", weight: "—" },
      { id: "1200x600", label: "1200×600",  length: "600", weight: "—" },
      { id: "1200x350", label: "1200×350",  length: "350", weight: "—" },
    ],
  },
];

// ─── YARDIMCI FONKSİYONLAR ──────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((c) => c.id === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
}

export function getProductBySlug(categoryId: string, productId: string): Product | undefined {
  return PRODUCTS.find((p) => p.categoryId === categoryId && p.id === productId);
}
