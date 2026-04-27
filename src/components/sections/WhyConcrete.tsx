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
            <p className="mt-0.5 text-balance text-sm font-light text-zinc-500 sm:hidden">
              Yüzyılı aşkın süredir kanıtlanmış altyapı çözümü
            </p>
          </div>
          <p className="section-rail section-rail--right hidden text-balance sm:block sm:max-w-xs">
            Yüzyılı aşkın süredir kanıtlanmış altyapı çözümü
          </p>
        </div>

        <div ref={bodyRef} className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4" style={fadeUp(bodyInView, 0)}>
            <blockquote
              className="border-l border-zinc-200 pl-4 text-[0.95rem] font-light leading-[1.65] text-zinc-600 sm:pl-6 sm:text-base sm:leading-[1.7] md:text-[1.05rem] md:leading-[1.7]"
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
                className="flex gap-3.5 border-b border-zinc-200 py-4 first:pt-0 sm:gap-6 sm:py-5 md:py-6"
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
