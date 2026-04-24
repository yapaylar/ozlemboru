"use client";

import { useInView, fadeUp } from "@/hooks/useInView";
import { WHY_CONCRETE } from "@/lib/constants";

export default function WhyConcrete() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="neden-beton-boru" className="section-y bg-white">
      <div className="container-max">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex items-end justify-between mb-12 pb-6 border-b"
          style={{ borderColor: "#000", ...fadeUp(headerInView, 0) }}
        >
          <div>
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
              Teknik Üstünlük
            </p>
            <h2
              className="font-light uppercase leading-none tracking-wide"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
            >
              Neden Beton Boru?
            </h2>
          </div>
          <p className="hidden sm:block text-sm font-light text-right max-w-xs" style={{ color: "#888" }}>
            Yüzyılı aşkın süredir kanıtlanmış<br />altyapı çözümü
          </p>
        </div>

        <div ref={bodyRef} className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — pull quote */}
          <div className="lg:col-span-4" style={fadeUp(bodyInView, 0)}>
            <blockquote
              className="border-l pl-6 font-light leading-relaxed text-base italic"
              style={{ borderColor: "#000", borderLeftWidth: "1px", color: "#333" }}
            >
              Beton boru üretimi için sadece kum, çimento ve su ihtiyaç duyulmaktadır.
              Ülkemizin doğal hammaddeleri ile üretilen, milli sermayenin ülke içinde kalmasını
              sağlayan yerli bir üründür.
            </blockquote>
          </div>

          {/* Right — numbered list */}
          <div className="lg:col-span-8">
            {WHY_CONCRETE.map((item, i) => (
              <div
                key={item.icon}
                className="flex gap-6 py-6 border-b group transition-colors duration-150"
                style={{ borderColor: "#e8e8e8", ...fadeUp(bodyInView, i * 70) }}
              >
                <span
                  className="text-xs font-light shrink-0 pt-0.5 w-6 text-right"
                  style={{ color: "#bbb" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3
                    className="font-medium uppercase tracking-wide text-sm mb-2"
                    style={{ color: "#000" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
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
