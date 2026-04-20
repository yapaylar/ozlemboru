import type { Metadata } from "next";
import HesapClient from "./HesapClient";

export const metadata: Metadata = {
  title: "Birim Fiyat Hesap | Özlem Beton Boru",
  description: "Malzeme birim fiyatlarına göre boru üretim maliyeti ve satış fiyatı hesaplama aracı.",
  robots: { index: false, follow: false },
};

export default function HesapPage() {
  return <HesapClient />;
}
