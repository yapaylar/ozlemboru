"use client";

import { useInView, fadeUp } from "@/hooks/useInView";
import { CERTIFICATES } from "@/lib/constants";

export default function Certificates() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="sertifikalar" className="section-y bg-zinc-50/80">
      <div className="container-max">
        <div
          ref={headerRef}
          className="section-header-row"
          style={fadeUp(headerInView, 0)}
        >
          <div>
            <p className="section-eyebrow">Belgelerimiz</p>
            <h2 className="section-h2">Sertifikalar</h2>
            <p className="mt-0.5 text-balance text-sm font-light text-zinc-500 sm:hidden">
              Ulusal ve uluslararası bağımsız belgelendirme
            </p>
          </div>
          <p className="section-rail section-rail--right hidden sm:block sm:max-w-xs">
            <span className="text-balance">Ulusal ve uluslararası bağımsız belgelendirme</span>
          </p>
        </div>

        <div
          ref={gridRef}
          className="mt-0 grid grid-cols-1 gap-px overflow-hidden border border-zinc-200/80 bg-zinc-200/50 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICATES.map((cert, i) => (
            <div
              key={cert.code}
              className="flex min-h-0 flex-col gap-3 bg-zinc-50/90 p-5 sm:gap-4 sm:p-7"
              style={fadeUp(gridInView, i * 90)}
            >
              <span className="self-start border border-zinc-200/90 bg-white px-2.5 py-1 text-[10px] font-light uppercase tracking-[0.14em] text-zinc-600">
                {cert.issuer}
              </span>

              <div>
                <p className="mb-1.5 text-xs font-light tracking-wide text-zinc-500">{cert.code}</p>
                <h3 className="text-sm font-light leading-snug text-zinc-900 sm:text-base">
                  {cert.title}
                </h3>
              </div>

              <p className="text-sm font-light leading-relaxed text-zinc-600 sm:text-[0.95rem] sm:leading-[1.65]">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[10px] font-light uppercase tracking-[0.18em] text-zinc-400 sm:text-xs sm:tracking-[0.14em]">
          Tüm sertifikalar güncel olup talep halinde iletilmektedir.
        </p>
      </div>
    </section>
  );
}
