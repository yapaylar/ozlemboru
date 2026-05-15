import type { Metadata } from "next";
import TeklifClient from "./TeklifClient";

export const metadata: Metadata = {
  title: "Teklif | Özlem Beton Boru",
  description: "Ürün seçimi ve teklif oluşturma (dahili).",
  robots: { index: false, follow: false },
};

export default function TeklifPage() {
  return <TeklifClient />;
}
