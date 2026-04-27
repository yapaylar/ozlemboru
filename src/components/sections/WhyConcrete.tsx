"use client";

import { useInView, fadeUp } from "@/hooks/useInView";
import { WHY_CONCRETE } from "@/lib/constants";

export default function WhyConcrete() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="neden-beton-boru" className="section-y bg-white">
      <div className="container-max">
        <div
          ref={headerRef}
          className="section-header-row"
          style={fadeUp(headerInView, 0)}
        >
          <div>
            <p className="section-eyebrow">Teknik üstünlük</p>
            <h2 className="section-h2">Neden beton boru?</h2>
          </div>
          <p className="section-rail section-rail--right hidden sm:block text-balance sm:max-w-xs">
            Yüzyılı aşkın süredir kanıtlanmış altyapı çözümü
          </p>
        </div>

        <div ref={bodyRef} className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4" style={fadeUp(bodyInView, 0)}>
            <blockquote
              className="border-l border-zinc-200 pl-5 text-base font-light leading-[1.65] text-zinc-600 sm:pl-6 sm:text-[1.05rem] sm:leading-[1.7]"
            >
              Beton boru üretimi için sadece kum, çimento ve su ihtiyaç duyulmaktadır. Ülkemizin
              doğal hammaddeleri ile üretilen, milli sermayenin ülke içinde kalmasını sağlayan
              yerli bir üründür.
            </blockquote>
          </div>

          <div className="space-y-0 border-t border-zinc-200 lg:col-span-8">
            {WHY_CONCRETE.map((item, i) => (
              <div
                key={item.icon}
                className="flex gap-4 border-b border-zinc-200 py-5 sm:gap-6 sm:py-6"
                style={fadeUp(bodyInView, i * 60)}
              >
                <span className="w-6 shrink-0 pt-0.5 text-right text-[11px] font-light tabular-nums text-zinc-400 sm:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-light text-zinc-900 sm:text-base sm:leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-[1.65] text-zinc-600 sm:text-[0.95rem] sm:leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
