import { COMPANY } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section id="iletisim" className="section-y" style={{ backgroundColor: "#0d1a2b" }}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="label-tag text-sky/60">İletişim</p>
            <h2
              className="font-bold text-white mt-3 leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Projeniz İçin<br />
              <span style={{ color: "#4caad4" }}>Teklif Alın.</span>
            </h2>
            <p className="mt-5 text-white/50 leading-relaxed text-sm max-w-sm">
              Beton boru ve altyapı elemanları ihtiyaçlarınız için teknik şartname,
              fiyat teklifi ve sevkiyat bilgisi hazırlayabiliriz.
            </p>

            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-8 inline-flex items-center gap-2.5 font-semibold text-white px-7 py-3.5 rounded-sm transition hover:opacity-90"
              style={{ backgroundColor: "#00a8d6" }}
            >
              Teklif Talebi Gönder
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Right — contact details */}
          <div className="space-y-px">
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
                  <span className="text-white/25 mx-2">·</span>
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
      className="flex items-start gap-5 px-6 py-5"
      style={{ backgroundColor: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: "rgba(0,168,214,0.15)" }}
      >
        <span style={{ color: "#00a8d6" }}>{icon}</span>
      </div>
      <div>
        <div className="text-xs text-white/30 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-sm text-white/65 leading-relaxed">{value}</div>
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
