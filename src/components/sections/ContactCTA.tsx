import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section id="iletisim-cta" className="section-y" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              İletişim
            </p>
            <h2
              className="font-light text-white uppercase leading-[1.08] tracking-wide"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Projeniz İçin<br />
              Teklif Alın.
            </h2>
            <div className="mt-8 mb-8 border-t" style={{ borderColor: "rgba(255,255,255,0.15)" }} />
            <p className="font-light leading-relaxed text-sm max-w-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Beton boru ve altyapı elemanları ihtiyaçlarınız için teknik şartname,
              fiyat teklifi ve sevkiyat bilgisi hazırlayabiliriz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/fiyat-al"
                className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-7 py-3.5 text-sm text-black transition-all duration-200 hover:opacity-80"
                style={{ backgroundColor: "#ffffff" }}
              >
                Fiyat Teklifi Al
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-7 py-3.5 text-sm transition-all duration-200 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)" }}
              >
                İletişime Geç
              </Link>
            </div>
          </div>

          {/* Right — contact details */}
          <div>
            <ContactRow
              icon={<PhoneIcon />}
              label="Telefon"
              value={
                <>
                  <a
                    href={`tel:${COMPANY.phone1.replace(/[\s()]/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY.phone1}
                  </a>
                  <span className="mx-2" style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                  <a
                    href={`tel:${COMPANY.phone2.replace(/[\s()]/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY.phone2}
                  </a>
                </>
              }
            />
            <ContactRow
              icon={<MailIcon />}
              label="E-Posta"
              value={
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              }
            />
            <ContactRow
              icon={<MapIcon />}
              label="Adres"
              value={<span>{COMPANY.address}</span>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      className="flex items-start gap-5 px-0 py-6 border-b"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div
        className="w-8 h-8 flex items-center justify-center shrink-0 mt-0.5 border"
        style={{ borderColor: "rgba(255,255,255,0.15)" }}
      >
        <span style={{ color: "rgba(255,255,255,0.5)" }}>{icon}</span>
      </div>
      <div>
        <div className="text-[10px] font-light uppercase tracking-[0.2em] mb-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</div>
        <div className="text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{value}</div>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
