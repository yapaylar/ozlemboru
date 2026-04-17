import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sevkiyat Bilgileri | Özlem Beton Boru",
  description:
    "Özlem Beton Boru ürünleri için 1 tırda gidecek miktar ve birim bilgileri. Beton boru, muayene bacası ve altyapı elemanları lojistik tablosu.",
};

type Row = { name: string; miktar: number; birim: "MT" | "ADET" | "TK" };
type Group = { title: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    title: "Entegre Contalı Beton ve Betonarme Borular",
    rows: [
      { name: "150×1500 Entg.C. Beton Boru",       miktar: 300, birim: "MT" },
      { name: "200×1500 Entg.C. Beton Boru",       miktar: 255, birim: "MT" },
      { name: "300×1500 Entg.C. Beton Boru",       miktar: 150, birim: "MT" },
      { name: "400×1500 Entg.C. Beton Boru",       miktar: 87,  birim: "MT" },
      { name: "500×2000 Entg.C. Beton Boru",       miktar: 60,  birim: "MT" },
      { name: "600×2000 Entg.C. Beton Boru",       miktar: 50,  birim: "MT" },
      { name: "800×2000 Entg.C. Betonarme Boru",   miktar: 30,  birim: "MT" },
      { name: "1000×2000 Entg.C. Betonarme Boru",  miktar: 22,  birim: "MT" },
      { name: "1200×2000 Entg.C. Betonarme Boru",  miktar: 14,  birim: "MT" },
      { name: "1400×2000 Entg.C. Betonarme Boru",  miktar: 12,  birim: "MT" },
      { name: "1600×2000 Entg.C. Betonarme Boru",  miktar: 10,  birim: "MT" },
      { name: "1800×2000 Entg.C. Betonarme Boru",  miktar: 8,   birim: "MT" },
      { name: "2000×2000 Entg.C. Betonarme Boru",  miktar: 6,   birim: "MT" },
    ],
  },
  {
    title: "Muayene Bacası Taban Elemanları",
    rows: [
      { name: "1000'lik Entg.Con. MB. Baca Tabanı (Ø200/300/400)",         miktar: 14, birim: "ADET" },
      { name: "1000'lik Entg.Con. MB. Baca Tabanı (Ø500/600)",             miktar: 12, birim: "ADET" },
      { name: "1200'lük Entg.Con. MB. Baca Tabanı (Ø200/300/400)",         miktar: 10, birim: "ADET" },
      { name: "1200'lük Entg.Con. MB. Baca Tabanı (Ø500/600)",             miktar: 10, birim: "ADET" },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø800) + Geçiş Plağı",      miktar: 5,  birim: "TK"   },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø1000) + Geçiş Plağı",     miktar: 4,  birim: "TK"   },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø1200) + Geçiş Plağı",     miktar: 3,  birim: "TK"   },
      { name: "1200'lük Entg.Con. Baca Tabanı (Ø1400) + Geçiş Plağı",     miktar: 3,  birim: "TK"   },
    ],
  },
  {
    title: "Muayene Bacası Gövde Bilezikleri ve Konik Elemanlar",
    rows: [
      { name: "1000×600 Entg.C. MB. Gövde Bileziği",      miktar: 30,  birim: "ADET" },
      { name: "1000×350 Entg.C. MB. Gövde Bileziği",      miktar: 50,  birim: "ADET" },
      { name: "1000×650 Entg.C. MB. Konik Elemanı",       miktar: 30,  birim: "ADET" },
      { name: "1200×600 Entg.C. MB. Ba. Gövde Bileziği",  miktar: 24,  birim: "ADET" },
      { name: "1200×350 Entg.C. MB. Ba. Gövde Bileziği",  miktar: 45,  birim: "ADET" },
      { name: "1200×780 Entg.C. MB. Ba. Konik Elemanı",   miktar: 24,  birim: "ADET" },
      { name: "1600'lük Entg. Ba. Bet. Rediksiyon Kapak",  miktar: 24,  birim: "ADET" },
      { name: "1400'lük Entg. Ba. Bet. Rediksiyon Kapak",  miktar: 34,  birim: "ADET" },
      { name: "Ø620 Entg.C. Mua.B. Gövde Boyun Bileziği",  miktar: 140, birim: "ADET" },
      { name: "Ø620 Entg.C. Mua.B. Çerçeve Montaj Elemanı",miktar: 90,  birim: "ADET" },
    ],
  },
  {
    title: "Parsel Bacası Elemanları",
    rows: [
      { name: "Ø800×800×600 Parsel Taban Elemanı (Kare)",      miktar: 32,  birim: "ADET" },
      { name: "Ø800×600'lük Parsel Taban Elemanı (Yuvarlak)",  miktar: 44,  birim: "ADET" },
      { name: "Ø800×800×500 Parsel Bacası",                    miktar: 55,  birim: "ADET" },
      { name: "Ø800×800×250 Parsel Bacası",                    miktar: 80,  birim: "ADET" },
      { name: "Ø800×500 Parsel Bacası (Yuvarlak)",             miktar: 70,  birim: "ADET" },
      { name: "Ø800×250 Parsel Bacası (Yuvarlak)",             miktar: 90,  birim: "ADET" },
      { name: "500×1000×1000 Çerçeveli Parsel Kapağı",         miktar: 200, birim: "ADET" },
      { name: "500×1000×1000 Çerçevesiz Parsel Kapağı",        miktar: 200, birim: "ADET" },
      { name: "Ø800×250 Parsel Bacası Mahruti",                miktar: 100, birim: "ADET" },
    ],
  },
  {
    title: "Beton Bilezik, Baca ve Diğer Elemanlar",
    rows: [
      { name: "Ø1000×900 Baca Taban Elemanı (E.T.)",  miktar: 18,  birim: "ADET" },
      { name: "Ø1000×500 Beton Bilezik",              miktar: 55,  birim: "ADET" },
      { name: "Ø1000×250 Beton Bilezik",              miktar: 77,  birim: "ADET" },
      { name: "Ø1000×250 Beton Mahruti",              miktar: 70,  birim: "ADET" },
      { name: "Yuvarlak Ba. Beton Kapak",             miktar: 250, birim: "ADET" },
      { name: "400×600×1000 YS Bacası",               miktar: 27,  birim: "ADET" },
      { name: "400×400×400 YS Baca Tabanı",           miktar: 90,  birim: "ADET" },
      { name: "400×400×400 YS Bacası",                miktar: 170, birim: "ADET" },
    ],
  },
];

const BIRIM_LABEL: Record<string, string> = {
  MT: "Metre",
  ADET: "Adet",
  TK: "Takım",
};

export default function SevkiyatBilgileriPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── PAGE HEADER ─────────────────────────────────────────── */}
        <section
          className="relative pt-[80px]"
          style={{ backgroundColor: "#0a0a0a", minHeight: "280px" }}
        >
          <div
            className="relative z-10 flex items-end container-max pb-14"
            style={{ minHeight: "calc(280px - 80px)" }}
          >
            <div>
              <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Anasayfa / Bilgi / Sevkiyat Bilgileri
              </p>
              <h1
                className="font-light uppercase tracking-wide text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Sevkiyat Bilgileri
              </h1>
            </div>
          </div>
        </section>

        {/* ── INFO STRIP ───────────────────────────────────────────── */}
        <div className="border-b" style={{ backgroundColor: "#f7f7f7", borderColor: "#e8e8e8" }}>
          <div className="container-max py-5 flex flex-wrap items-center gap-8">
            {[
              { label: "Araç Tipi", value: "Standart Tır (13,6 m dorse)" },
              { label: "Bölge", value: "Tüm Türkiye" },
              { label: "Sevkiyat", value: "Proje bazlı planlama ile" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-xs font-light uppercase tracking-[0.15em]" style={{ color: "#aaa" }}>
                  {item.label}
                </span>
                <span className="text-sm font-light" style={{ color: "#222" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── TABLES ───────────────────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Lojistik
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#000" }}
                >
                  1 Tırda Gidecek Miktar
                </h2>
              </div>
              <p className="hidden sm:block text-sm font-light text-right" style={{ color: "#888" }}>
                Standart tır kapasitesine<br />göre hesaplanmıştır
              </p>
            </div>

            <div className="space-y-14">
              {GROUPS.map((group) => (
                <div key={group.title}>

                  {/* Group header */}
                  <div className="flex items-center gap-4 mb-0">
                    <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: "#888" }}>
                      {group.title}
                    </p>
                    <div className="flex-1 border-t" style={{ borderColor: "#e8e8e8" }} />
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <table className="w-full border-collapse" style={{ minWidth: "480px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#0a0a0a" }}>
                          <th className="py-3.5 px-4 text-left text-[11px] font-medium uppercase tracking-wide w-[70%]" style={{ color: "#fff" }}>
                            Ürün Adı
                          </th>
                          <th className="py-3.5 px-4 text-center text-[11px] font-medium uppercase tracking-wide" style={{ color: "#fff" }}>
                            Miktar
                          </th>
                          <th className="py-3.5 px-4 text-center text-[11px] font-medium uppercase tracking-wide" style={{ color: "#fff" }}>
                            Birimi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row, i) => (
                          <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                            <td
                              className="py-3.5 px-4 text-sm font-light border-b"
                              style={{ borderColor: "#ececec", color: "#222" }}
                            >
                              {row.name}
                            </td>
                            <td
                              className="py-3.5 px-4 text-sm font-medium text-center border-b tabular-nums"
                              style={{ borderColor: "#ececec", color: "#000" }}
                            >
                              {row.miktar}
                            </td>
                            <td
                              className="py-3.5 px-4 text-center border-b"
                              style={{ borderColor: "#ececec" }}
                            >
                              <span
                                className="inline-block text-[10px] font-light uppercase tracking-[0.15em] px-2.5 py-1 border"
                                style={{
                                  borderColor: row.birim === "MT" ? "#000" : "#ddd",
                                  color: row.birim === "MT" ? "#000" : "#666",
                                  backgroundColor: row.birim === "MT" ? "#f7f7f7" : "transparent",
                                }}
                              >
                                {BIRIM_LABEL[row.birim]}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-14 pt-8 border-t" style={{ borderColor: "#e8e8e8" }}>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
                {[
                  "Tablodaki miktarlar standart 13,6 m dorseli tıra göre hesaplanmıştır.",
                  "Belirtilen miktarlar yaklaşık değer olup ürün boyutuna ve yükleme koşullarına göre değişebilir.",
                  "Özel proje sevkiyatları için ayrıca planlama yapılmaktadır.",
                  "Fiyat teklifi ve sevkiyat takvimi için lütfen bizimle iletişime geçin.",
                ].map((note) => (
                  <div key={note} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1 h-1 rounded-full shrink-0 bg-black" />
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#444" }}>
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
