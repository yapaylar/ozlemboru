/**
 * Teklif ürün görselleri — dosyaları şu yapıda ekleyin:
 *   public/images/teklif/<sectionId>/<productId>.png
 * Örnek: public/images/teklif/borular/b400.png
 *
 * İstisna için `OVERRIDES` kullanın.
 */

export const TEKLIF_IMAGE_OVERRIDES: Record<string, string> = {
  // "b400": "/images/custom/b400.png",
};

/** Ürün kartında kullanılacak görsel URL'i */
export function getTeklifProductImageSrc(sectionId: string, productId: string): string {
  const key = `${sectionId}/${productId}`;
  return TEKLIF_IMAGE_OVERRIDES[key] ?? `/images/teklif/${sectionId}/${productId}.png`;
}
