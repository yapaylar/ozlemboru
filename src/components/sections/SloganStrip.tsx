"use client";

import { useLayoutEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const SLOGAN =
  "Güçlü şehirlerin güçlü alt yapılara ihtiyacı vardır. Biz bunun için varız.";

const DURATION_S = 0.85;
const EASE = "cubic-bezier(0.2, 0.62, 0.22, 1)";

export default function SloganStrip() {
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0,
    /* küçük yükseklikte bölge hemen yakala */
    rootMargin: "0px 0px 35% 0px",
  });
  const [reduced, setReduced] = useState(false);
  const [inBand, setInBand] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduced(m.matches);
    };
    apply();
    m.addEventListener("change", apply);
    return () => m.removeEventListener("change", apply);
  }, []);

  /** İlk layout’da zaten görünür bantta ise (hızlı scroll, iOS, küçük section) aç */
  useLayoutEffect(() => {
    if (reduced) return;
    let id0 = 0;
    let id1 = 0;
    id0 = requestAnimationFrame(() => {
      id1 = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const b = el.getBoundingClientRect();
        const h = document.documentElement.clientHeight;
        if (b.top < h * 0.95 && b.bottom > -0.1 * h) {
          setInBand(true);
        }
      });
    });
    return () => {
      cancelAnimationFrame(id0);
      cancelAnimationFrame(id1);
    };
  }, [reduced, ref]);

  const show = reduced || inView || inBand;

  return (
    <section
      ref={ref}
      className="w-full min-w-0 scroll-mt-2 overflow-x-clip bg-white py-10 sm:py-16 md:py-20"
    >
      <div className="container-max w-full min-w-0 text-center text-[0.95rem] font-light text-zinc-600 sm:text-base">
        <p
          className="text-pretty [text-rendering:optimizeLegibility] text-zinc-700 [letter-spacing:0.015em] leading-[1.75] antialiased sm:leading-[1.8] sm:[letter-spacing:0.02em]"
          style={
            reduced
              ? { opacity: 1 }
              : {
                  opacity: show ? 1 : 0,
                  transform: show ? "translate3d(0,0,0)" : "translate3d(0,0.4rem,0)",
                  transition: `opacity ${DURATION_S}s ${EASE}, transform ${DURATION_S}s ${EASE}`,
                }
          }
        >
          {SLOGAN}
        </p>
      </div>
    </section>
  );
}
