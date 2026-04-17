import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Özlem Beton Boru",
  description:
    "Fiyat teklifi, teknik bilgi veya sevkiyat sorularınız için bizimle iletişime geçin. Çubuk/Ankara — (0312) 354 64 84",
};

const CONTACT_ITEMS = [
  {
    label: "Adres",
    lines: [COMPANY.address],
    href: "https://maps.google.com/?q=Yenice+Mah.+Yolüstü+Küme+Ev.+No:6/A+Çubuk+Ankara",
    linkLabel: "Haritada Gör",
  },
  {
    label: "Telefon",
    lines: [COMPANY.phone1, COMPANY.phone2],
    href: `tel:${COMPANY.phone1.replace(/[^0-9]/g, "")}`,
    linkLabel: "Hemen Ara",
  },
  {
    label: "E-posta",
    lines: [COMPANY.email],
    href: `mailto:${COMPANY.email}`,
    linkLabel: "E-posta Gönder",
  },
  {
    label: "Çalışma Saatleri",
    lines: ["Pzt – Cum: 08:00 – 18:00", "Cumartesi: 08:00 – 13:00"],
    href: null,
    linkLabel: null,
  },
];

export default function IletisimPage() {
  return (
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
                Anasayfa / İletişim
              </p>
              <h1
                className="font-light uppercase tracking-wide text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                İletişim
              </h1>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTACT SECTION ────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Bize Ulaşın
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
                >
                  Konuşalım
                </h2>
              </div>
              <p className="hidden sm:block text-sm font-light text-right" style={{ color: "#888" }}>
                En kısa sürede<br />yanıt veriyoruz
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

              {/* Sol — form */}
              <div className="lg:col-span-8">
                <ContactForm />
              </div>

              {/* Sağ — iletişim bilgileri */}
              <div className="lg:col-span-4 space-y-0">
                {CONTACT_ITEMS.map((item, i) => (
                  <div
                    key={item.label}
                    className="py-7 border-b"
                    style={{
                      borderColor: "#e8e8e8",
                      borderTopColor: i === 0 ? "#e8e8e8" : undefined,
                      borderTop: i === 0 ? "1px solid #e8e8e8" : undefined,
                    }}
                  >
                    <p className="text-xs font-light uppercase tracking-[0.15em] mb-3" style={{ color: "#bbb" }}>
                      {item.label}
                    </p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm font-light leading-relaxed" style={{ color: "#000" }}>
                        {line}
                      </p>
                    ))}
                    {item.href && item.linkLabel && (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 mt-3 text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
                        style={{ color: "#000" }}
                      >
                        {item.linkLabel}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 5h8M5 1l4 4-4 4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}

                {/* Sosyal / ek not */}
                <div className="pt-8">
                  <p className="text-xs font-light leading-relaxed" style={{ color: "#aaa" }}>
                    Fiyat teklifi için ürün türü, çap ve miktarı belirtirseniz<br className="hidden sm:block" />
                    en hızlı yanıtı alırsınız.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* ── HARİTA PLACEHOLDER ──────────────────────────────────── */}
        <section className="bg-white pb-0">
          <div className="container-max">
            <div className="border-t" style={{ borderColor: "#e8e8e8" }} />
          </div>
          <div
            className="w-full relative overflow-hidden"
            style={{ height: "400px", backgroundColor: "#f2f2f2" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.987!2d33.0481!3d40.0887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA1JzE5LjMiTiAzM8KwMDInNTMuMiJF!5e0!3m2!1str!2str!4v1"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(100%) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Özlem İnşaat Konum"
            />
            {/* Overlay card */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 lg:bottom-0 bg-white p-6 lg:p-8"
              style={{ minWidth: "280px" }}
            >
              <p className="text-xs font-light uppercase tracking-[0.15em] mb-3" style={{ color: "#888" }}>
                Fabrika & Ofis
              </p>
              <p className="text-sm font-medium uppercase tracking-wide mb-1" style={{ color: "#000" }}>
                {COMPANY.name}
              </p>
              <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
                {COMPANY.address}
              </p>
              <a
                href="https://maps.google.com/?q=Yenice+Mah.+Yolüstü+Küme+Ev.+No:6/A+Çubuk+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs font-light uppercase tracking-widest transition-opacity hover:opacity-60"
                style={{ color: "#000" }}
              >
                Yol Tarifi Al
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5 1l4 4-4 4" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

    </main>
  );
}
