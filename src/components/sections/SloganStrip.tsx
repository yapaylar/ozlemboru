"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const SLOGAN =
  "Güçlü şehirlerin güçlü alt yapılara ihtiyacı vardır. Biz bunun için varız.";

const CHARS = Array.from(SLOGAN);

const CHAR_DELAY_MS = 22;
const FADE_MS = 420;
const EASE = "cubic-bezier(0.33, 0, 0.2, 1)";

export default function SloganStrip() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, rootMargin: "0px 0px -5% 0px" });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  return (
    <section ref={ref} className="w-full min-w-0 overflow-x-clip bg-white py-10 sm:py-16 md:py-20">
      <div className="container-max w-full min-w-0 text-center text-[0.95rem] font-light leading-[1.75] text-zinc-600 [letter-spacing:0.01em] sm:leading-[1.8] sm:[letter-spacing:0.03em] sm:text-base">
        <p className="mx-auto w-full min-w-0 max-w-4xl text-balance sm:text-pretty">
          <span className="sr-only">{SLOGAN}</span>
          <span className="text-zinc-700" aria-hidden="true">
            {CHARS.map((ch, i) => {
              const isSpace = ch === " ";
              const delay = reduced || !inView ? 0 : i * CHAR_DELAY_MS;
              return (
                <span
                  key={i}
                  className="inline text-inherit"
                  style={{
                    opacity: reduced ? 1 : inView ? 1 : 0,
                    transition: `opacity ${FADE_MS}ms ${EASE} ${delay}ms`,
                    whiteSpace: isSpace ? "pre" : "normal",
                  }}
                >
                  {isSpace ? " " : ch}
                </span>
              );
            })}
          </span>
        </p>
      </div>
    </section>
  );
}
