import type { Metadata } from "next";
import CartPageClient from "./CartPageClient";

export const metadata: Metadata = {
  title: "Sepetim | Özlem Beton Boru",
  description: "Seçtiğiniz ürünleri görüntüleyin ve fiyat teklifi isteyin.",
};

export default function SepetPage() {
  return (
    <main>
        <section className="relative pt-[80px]" style={{ backgroundColor: "#0a0a0a", minHeight: "280px" }}>
          <div className="relative z-10 flex items-end container-max pb-10"
            style={{ minHeight: "calc(280px - 80px)" }}>
            <div>
              <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Anasayfa / Sepetim
              </p>
              <h1 className="font-light uppercase tracking-wide text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Sepetim
              </h1>
            </div>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-max">
            <CartPageClient />
          </div>
        </section>
    </main>
  );
}
