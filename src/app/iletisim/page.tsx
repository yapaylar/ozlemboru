import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import ContactForm from "./ContactForm";

const ILETISIM_HERO_SRC = "/images/products/kataloghero.jpg";

export const metadata: Metadata = {
  title: "İletişim | Özlem Beton Boru",
  description:
    "Fiyat teklifi, teknik bilgi veya sevkiyat sorularınız için bizimle iletişime geçin. Çubuk/Ankara — (0312) 354 64 84",
};

type ContactBlock = {
  label: string;
  lines: string[];
  href: string | null;
  linkLabel: string | null;
};

const CONTACT_ITEMS: ContactBlock[] = [
  {
    label: "Adres",
    lines: [COMPANY.address],
    href: "https://maps.google.com/?q=Yenice+Mah.+Yolüstü+Küme+Ev.+No:6/A+Çubuk+Ankara",
    linkLabel: "Haritada gör",
  },
  {
    label: "Telefon",
    lines: [COMPANY.phone1, COMPANY.phone2],
    href: `tel:${COMPANY.phone1.replace(/[^0-9]/g, "")}`,
    linkLabel: "Hemen ara",
  },
  {
    label: "E-posta",
    lines: [COMPANY.email],
    href: `mailto:${COMPANY.email}`,
    linkLabel: "E-posta gönder",
  },
  {
    label: "Çalışma saatleri",
    lines: ["Pzt – Cum: 08:00 – 18:00", "Cumartesi: 08:00 – 13:00"],
    href: null,
    linkLabel: null,
  },
];

const linkArrow = (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
    <path
      d="M1 5h8M5 1l4 4-4 4"
      fill="none"
      className="stroke-current"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function IletisimPage() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden">
      <section className="relative min-h-[min(52vh,26rem)] overflow-hidden border-b border-zinc-200/90 sm:min-h-[min(56vh,28rem)] md:min-h-[min(58vh,30rem)]">
        <Image
          src={ILETISIM_HERO_SRC}
          alt="Özlem İnşaat iletişim"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />

        <div className="relative z-10 flex min-h-[min(52vh,26rem)] flex-col justify-end pt-[68px] sm:min-h-[min(56vh,28rem)] sm:pt-[72px] md:min-h-[min(58vh,30rem)]">
          <div className="container-max w-full pb-10 [padding-bottom:max(2.5rem,env(safe-area-inset-bottom))] sm:pb-14 md:pb-16">
            <nav aria-label="İçerik yolu" className="mb-5">
              <Link
                href="/"
                className="text-[11px] font-light tracking-[0.14em] text-white/60 transition-colors hover:text-white"
              >
                Anasayfa
              </Link>
              <span className="mx-2 text-white/35">/</span>
              <span className="text-[11px] font-light tracking-[0.14em] text-white/90">İletişim</span>
            </nav>
            <h1 className="max-w-4xl text-balance font-light leading-[1.12] tracking-[-0.02em] text-white [font-size:var(--type-hero)] sm:max-w-5xl sm:tracking-[-0.01em]">
              İletişim
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base font-light leading-[1.65] text-white/75 sm:text-[1.05rem] sm:leading-[1.7]">
              Teklif, teknik soru veya sevkiyat için ekibimize yazın veya arayın, en kısa sürede dönüş yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-max">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 xl:col-span-8">
              <ContactForm />
            </div>

            <div className="lg:col-span-5 xl:col-span-4">
              <div className="divide-y divide-zinc-200 border-y border-zinc-200">
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className="py-6 sm:py-7">
                    <p className="mb-3 text-[11px] font-light uppercase tracking-[0.14em] text-zinc-500">
                      {item.label}
                    </p>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm font-light leading-relaxed text-zinc-800 sm:text-[0.95rem] sm:leading-[1.65]"
                      >
                        {line}
                      </p>
                    ))}
                    {item.href && item.linkLabel ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-light text-zinc-600 transition-colors hover:text-navy"
                      >
                        <span className="border-b border-zinc-300/90 pb-px hover:border-navy/50">{item.linkLabel}</span>
                        {linkArrow}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50/80 pb-0">
        <div className="relative min-h-[min(22rem,55vh)] w-full overflow-hidden sm:min-h-[26rem] md:min-h-[28rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.987!2d33.0481!3d40.0887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA1JzE5LjMiTiAzM8KwMDInNTMuMiJF!5e0!3m2!1str!2str!4v1"
            width="100%"
            height="100%"
            className="absolute inset-0 min-h-[22rem] border-0 grayscale contrast-[0.92] sm:min-h-[26rem] md:min-h-[28rem]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Özlem İnşaat konum"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/[0.06] to-transparent sm:bg-none" aria-hidden />

          <div className="relative z-10 mx-auto flex max-w-7xl justify-center px-4 pb-10 pt-8 sm:justify-end sm:px-8 lg:px-12">
            <div className="pointer-events-auto w-full max-w-sm border border-zinc-200/90 bg-white p-6 shadow-sm sm:p-7">
              <p className="mb-3 text-[11px] font-light uppercase tracking-[0.14em] text-zinc-500">
                Fabrika ve ofis
              </p>
              <p className="text-base font-light text-zinc-900">{COMPANY.name}</p>
              <p className="section-body mt-2 text-zinc-600">{COMPANY.address}</p>
              <a
                href="https://maps.google.com/?q=Yenice+Mah.+Yolüstü+Küme+Ev.+No:6/A+Çubuk+Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta--primary mt-5 w-full sm:w-auto"
              >
                Yol tarifi al
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
