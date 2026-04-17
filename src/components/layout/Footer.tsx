import Link from "next/link";
import { COMPANY, NAV_LINKS, CERTIFICATES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0a0a0a" }}>

      {/* Main grid */}
      <div className="container-max pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>

        {/* Brand — wide column */}
        <div className="lg:col-span-5">
          {/* C-mark logo */}
          <div className="flex items-center gap-3 mb-5">
            <svg width="36" height="36" viewBox="0 0 56 56" fill="none">
              <g transform="rotate(-20, 28, 28)">
                <path d="M 47,39 A 22,22 0 1,1 47,17" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                <path d="M 41,35.5 A 15,15 0 1,1 41,20.5" stroke="rgba(255,255,255,0.7)" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                <path d="M 35.8,32.5 A 9,9 0 1,1 35.8,23.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                <circle cx="41" cy="20.5" r="2.6" fill="#00a8d6" />
                <circle cx="41" cy="35.5" r="2.6" fill="#00a8d6" />
              </g>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-medium uppercase tracking-[0.18em]" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.85)" }}>
                Özlem İnşaat
              </span>
              <span className="font-light uppercase tracking-[0.13em]" style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>
                Beton Boru ve Beton Elemanları Sanayi
              </span>
            </div>
          </div>

          <p className="mt-6 text-xs font-light leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.8" }}>
            {COMPANY.founded}&rsquo;dan bu yana Ankara&rsquo;da üretim yapan firmamız;
            ISO 9001 belgeli beton boru, betonarme boru, muayene bacası ve
            altyapı elemanları üretmektedir.
          </p>

          {/* Certificate tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {CERTIFICATES.slice(0, 4).map((cert) => (
              <span
                key={cert.code}
                className="text-[10px] font-light uppercase tracking-wider px-2.5 py-1 border"
                style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.5)" }}
              >
                {cert.code}
              </span>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Nav links */}
        <div className="lg:col-span-3">
          <p className="text-[10px] font-light uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
            Sayfalar
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-light uppercase tracking-wider text-white/60 hover:text-white/90 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/iletisim"
                className="text-xs font-light uppercase tracking-wider text-white/60 hover:text-white/90 transition-colors duration-150"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <p className="text-[10px] font-light uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
            İletişim
          </p>
          <ul className="space-y-3">
            <li className="text-xs font-light leading-relaxed text-white/55" style={{ lineHeight: "1.7" }}>
              {COMPANY.address}
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phone1.replace(/[\s()]/g, "")}`}
                className="text-xs font-light uppercase tracking-wider text-white/60 hover:text-white/90 transition-colors duration-150"
              >
                {COMPANY.phone1}
              </a>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phone2.replace(/[\s()]/g, "")}`}
                className="text-xs font-light uppercase tracking-wider text-white/60 hover:text-white/90 transition-colors duration-150"
              >
                {COMPANY.phone2}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-xs font-light tracking-wider text-white/60 hover:text-white/90 transition-colors duration-150 break-all"
              >
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-max py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[10px] font-light uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
          &copy; {year} {COMPANY.fullName}
        </p>
        <p className="text-[10px] font-light uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
          {COMPANY.website}
        </p>
      </div>

    </footer>
  );
}
