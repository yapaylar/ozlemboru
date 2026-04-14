import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";

export default function Products() {
  return (
    <section
      id="urunlerimiz"
      className="section-y"
      style={{ backgroundColor: "#f4f6fa" }}
    >
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="label-tag">Katalog</p>
            <h2 className="section-title">Ürünlerimiz</h2>
            <div className="divider-accent" />
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed sm:text-right">
            Ø150mm&rsquo;den Ø2800mm&rsquo;ye geniş çap aralığı,
            TSE standartlarına uygun üretim.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-mid">
          {PRODUCTS.map((product, i) => (
            <div key={product.id} className="bg-white flex flex-col group">
              {/* Image area */}
              <div
                className="relative h-52 flex flex-col items-center justify-center overflow-hidden"
                style={{ backgroundColor: i % 2 === 0 ? "#1b3563" : "#162d52" }}
              >
                {/* Large background text */}
                <div
                  className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                >
                  <span
                    className="font-black text-[7rem] leading-none opacity-[0.06] text-white"
                    style={{ letterSpacing: "-0.05em" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Pipe cross-section minimal */}
                <svg
                  viewBox="0 0 80 80"
                  className="w-16 h-16 opacity-30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="36" stroke="white" strokeWidth="6" />
                  <circle cx="40" cy="40" r="24" stroke="white" strokeWidth="2" />
                  <circle cx="40" cy="40" r="4" fill="white" />
                </svg>

                <div className="relative mt-3 text-white/30 text-xs tracking-widest uppercase">
                  Görsel Eklenecek
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 border-b border-r" style={{ borderColor: "#e4e9f0" }}>
                <h3 className="font-bold text-navy text-base mb-2">{product.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                  style={{ color: "#1e72ad" }}
                >
                  Detayları İncele
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between py-6 px-7 bg-white border" style={{ borderColor: "#e4e9f0" }}>
          <p className="text-sm text-slate-500">
            Teknik şartname ve fiyat teklifi için uzman ekibimizle iletişime geçin.
          </p>
          <Link
            href="#iletisim"
            className="shrink-0 inline-flex items-center gap-2 font-semibold text-sm text-white px-6 py-3 rounded-sm transition hover:opacity-90"
            style={{ backgroundColor: "#1b3563" }}
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}
