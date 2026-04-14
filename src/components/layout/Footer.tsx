import Link from "next/link";
import { COMPANY, NAV_LINKS, CERTIFICATES } from "@/lib/constants";

function LogoMark() {
  return (
    <svg viewBox="0 0 180 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <circle cx="22" cy="22" r="19" stroke="white" strokeWidth="2" fill="none" opacity="0.8" />
      <circle cx="22" cy="22" r="12" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="22" cy="22" r="3.5" fill="#00a8d6" />
      <circle cx="16" cy="10.5" r="2" fill="#00a8d6" opacity="0.8" />
      <circle cx="28" cy="10.5" r="2" fill="#00a8d6" opacity="0.8" />
      <text x="50" y="18" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="15" fill="white" letterSpacing="-0.3">Özlem</text>
      <text x="50" y="34" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="11.5" fill="#4caad4" letterSpacing="2">inşaat</text>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#080f1c" }}>
      <div
        className="container-max py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div className="lg:col-span-2">
          <LogoMark />
          <p className="mt-4 text-white/40 text-xs leading-relaxed max-w-xs">
            {COMPANY.founded}&rsquo;dan bu yana TS 821 EN 1916 belgeli beton boru ve
            altyapı elemanları üreticisi. ISO 9001 &amp; 14001 sertifikalı.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {CERTIFICATES.slice(0, 4).map((cert) => (
              <span
                key={cert.code}
                className="text-[10px] font-bold px-2 py-0.5 rounded-sm border border-white/10 text-white/35 tracking-wide"
              >
                {cert.code}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">
            Sayfalar
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/40 text-sm hover:text-white/80 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">
            İletişim
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-white/20 text-xs mt-0.5">📍</span>
              <span className="text-white/40 text-xs leading-relaxed">{COMPANY.address}</span>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phone1.replace(/[\s()]/g, "")}`}
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                {COMPANY.phone1}
              </a>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phone2.replace(/[\s()]/g, "")}`}
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                {COMPANY.phone2}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-white/40 text-xs hover:text-white/70 transition-colors break-all"
              >
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container-max py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">
            &copy; {year} {COMPANY.fullName}. Tüm hakları saklıdır.
          </p>
          <p className="text-white/15 text-xs">{COMPANY.website}</p>
        </div>
      </div>
    </footer>
  );
}
