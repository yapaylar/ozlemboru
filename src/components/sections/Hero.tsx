import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-16"
        style={{ backgroundColor: "#0d1a2b", minHeight: "560px" }}
      >
        <div className="flex flex-col lg:flex-row" style={{ minHeight: "calc(560px - 64px)" }}>

          {/* LEFT — Text block */}
          <div className="flex-1 flex flex-col justify-center px-5 sm:px-12 lg:px-20 pt-12 pb-14 lg:pt-0 lg:pb-0">
            <p className="label-tag text-sky/70 mb-5">
              1989&rsquo;dan Bu Yana · Çubuk, Ankara
            </p>

            <h1
              className="font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)" }}
            >
              Altyapı Projeleriniz<br />
              İçin{" "}
              <span style={{ color: "#4caad4" }}>Güvenilir Çözüm:</span><br />
              Beton Boru ve<br />
              Altyapı Elemanları
            </h1>

            <p
              className="mt-6 text-white/55 max-w-md leading-relaxed"
              style={{ fontSize: "1rem" }}
            >
              TSE &amp; ISO 9001 belgeli üretim. Ø150mm&rsquo;den Ø2800mm&rsquo;ye kadar
              Buhar Kürlü Betonarme Boru ve Muayene Bacası.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#urunlerimiz"
                className="inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 text-white rounded-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#00a8d6" }}
              >
                Ürünleri Görüntüle
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="#iletisim"
                className="inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                İletişime Geçin
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex items-center gap-8 flex-wrap">
              {[
                { label: "Yıl Deneyim", value: "35+" },
                { label: "Max Çap", value: "Ø2800mm" },
                { label: "Sertifika", value: "TSE · ISO" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: "#4caad4" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-white/35 mt-0.5 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual panel */}
          <div
            className="hidden lg:flex w-[44%] xl:w-[46%] flex-col items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: "#0e2038" }}
          >
            {/* Subtle grid background */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#4caad4 1px, transparent 1px), linear-gradient(90deg, #4caad4 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Pipe cross-section graphic */}
            <div className="relative flex items-center justify-center z-10">
              <svg
                viewBox="0 0 360 360"
                className="w-64 xl:w-72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="180" cy="180" r="170" stroke="#1e72ad" strokeWidth="1.5" opacity="0.4" />
                <circle cx="180" cy="180" r="155" stroke="#4caad4" strokeWidth="14" opacity="0.12" />
                <circle cx="180" cy="180" r="140" stroke="#4caad4" strokeWidth="1.5" opacity="0.55" />
                <circle cx="180" cy="180" r="6" fill="#00a8d6" />
                <line x1="180" y1="28" x2="180" y2="8"  stroke="#4caad4" strokeWidth="1" opacity="0.35" />
                <line x1="8"   y1="180" x2="28" y2="180" stroke="#4caad4" strokeWidth="1" opacity="0.35" />
                {[30, 90, 150, 210, 270, 330].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 148;
                  return (
                    <circle
                      key={angle}
                      cx={180 + r * Math.cos(rad)}
                      cy={180 + r * Math.sin(rad)}
                      r="5"
                      fill="#1e72ad"
                      opacity="0.8"
                    />
                  );
                })}
              </svg>

              <div className="absolute bottom-[-2.5rem] text-center">
                <p className="text-xs uppercase tracking-widest text-white/20">
                  Betonarme Kesit Görünümü
                </p>
              </div>
            </div>

            {/* Diameter label */}
            <div className="absolute top-8 right-8 text-right z-10">
              <div
                className="text-4xl xl:text-5xl font-bold tracking-tight"
                style={{ color: "#1e72ad" }}
              >
                Ø2800
              </div>
              <div className="text-xs text-white/25 mt-1 uppercase tracking-widest">
                mm max çap
              </div>
            </div>

            {/* Standard label */}
            <div className="absolute bottom-8 left-8 z-10">
              <div className="text-xs text-white/20 uppercase tracking-widest">
                TS 821 EN 1916 · TS EN 1917
              </div>
            </div>
          </div>
        </div>

        {/* Slogan strip */}
        <div style={{ backgroundColor: "#00a8d6" }}>
          <div className="container-max py-3.5">
            <p className="text-white text-sm sm:text-base font-semibold tracking-wide text-center">
              &ldquo;Modern şehirlerin güçlü alt yapılara ihtiyacı vardır. Biz bunun için varız...&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── QUICK QUOTE STRIP ───────────────────────────────────── */}
      <div
        className="border-b"
        style={{ backgroundColor: "#f0f6fb", borderColor: "#d0e4f0" }}
      >
        <div className="container-max py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 justify-between">

          {/* Left */}
          <div className="flex items-start sm:items-center gap-5">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-sm flex items-center justify-center"
              style={{ backgroundColor: "#d0eaf7" }}
            >
              <CartIcon className="w-7 h-7" style={{ color: "#00a8d6" }} />
            </div>
            <div>
              <p className="font-bold text-[1.0625rem] sm:text-lg leading-snug" style={{ color: "#0d1a2b" }}>
                Ürünlerinizi Sepete Ekleyin, Hızlı Fiyat Teklifi Alın
              </p>
              <p className="text-sm sm:text-[0.9375rem] mt-1 leading-relaxed" style={{ color: "#4b6280" }}>
                İhtiyacınız olan ürün ve miktarları belirtin — size en kısa sürede fiyat teklifi ulaştıralım.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 sm:pl-6 flex-shrink-0">
            <span className="text-sm hidden md:block" style={{ color: "#6b7a90" }}>
              Daha önce çalıştınız mı?&nbsp;
              <Link href="#iletisim" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#1e72ad" }}>
                Bize Yazın
              </Link>
            </span>
            <Link
              href="#iletisim"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 text-base text-white rounded-sm transition-all duration-200 hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: "#1b3563" }}
            >
              Teklif İste
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function CartIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
}
