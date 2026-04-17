import type { Metadata } from "next";
import PriceRequestClient from "./PriceRequestClient";

export const metadata: Metadata = {
  title: "Fiyat Al | Özlem Beton Boru",
  description:
    "Seçtiğiniz ürünler için dakikalar içinde fiyat teklifi alın. Telefon veya e-posta ile hızlı yanıt.",
  robots: { index: false, follow: false },
};

export default function FiyatAlPage() {
  return (
    <main>

        {/* ── HEADER ───────────────────────────────────────────────── */}
        <div
          className="bg-white border-b"
          style={{ paddingTop: "calc(80px + 40px)", paddingBottom: "40px", borderColor: "#e8e8e8" }}
        >
          <div className="container-max flex items-end justify-between">
            <p className="text-xs font-light uppercase tracking-[0.2em]" style={{ color: "#bbb" }}>
              Sepetim / Fiyat Al
            </p>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 flex items-center justify-center text-[10px] font-medium"
                    style={{
                      backgroundColor: n <= 2 ? "#000" : "#f0f0f0",
                      color: n <= 2 ? "#fff" : "#bbb",
                    }}
                  >
                    {n < 2 ? (
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2.5 2.5 3.5-4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : n}
                  </div>
                  {n < 3 && <div className="w-6 h-px" style={{ backgroundColor: n < 2 ? "#000" : "#e0e0e0" }} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN ─────────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="container-max">
            <PriceRequestClient />
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#0a0a0a" }}>
          <div className="container-max py-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-[rgba(255,255,255,0.08)]">
              {[
                {
                  stat: "35+",
                  label: "Yıldır Sektörde",
                  note: "1989'dan bu yana altyapı çözümleri",
                },
                {
                  stat: "60+",
                  label: "Referans Proje",
                  note: "Kamu ve özel sektör işbirlikleri",
                },
                {
                  stat: "ISO 9001",
                  label: "Belgeli Üretim",
                  note: "TSE ve uluslararası kalite standartları",
                },
              ].map((item) => (
                <div key={item.stat} className="sm:px-10 first:pl-0 last:pr-0">
                  <p
                    className="font-light mb-1"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", color: "#fff" }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.label}
                  </p>
                  <p className="text-xs font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

    </main>
  );
}
