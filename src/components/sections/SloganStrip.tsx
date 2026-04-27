"use client";

import { useInView } from "@/hooks/useInView";

const SLOGAN =
  "Güçlü şehirlerin güçlü alt yapılara ihtiyacı vardır. Biz bunun için varız.";

const CHAR_DELAY_MS = 40;
const FADE_DUR = "0.3s";
const EASE = "ease";

export default function SloganStrip() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2, rootMargin: "0px 0px -5% 0px" });
  return (
    <section ref={ref} className="w-full min-w-0 overflow-x-clip bg-white py-10 sm:py-16 md:py-20">
      <div className="container-max w-full min-w-0 text-center text-[0.95rem] font-light leading-[1.65] text-zinc-600 [letter-spacing:0] sm:tracking-[0.04em] sm:text-base sm:leading-[1.7]">
        <p className="mx-auto w-full min-w-0 max-w-4xl break-words sm:text-pretty">
          {SLOGAN.split("").map((char, i) => (
            <span
              key={i}
              className="text-zinc-700"
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity ${FADE_DUR} ${EASE} ${i * CHAR_DELAY_MS}ms`,
                whiteSpace: char === " " ? "pre" : "normal",
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
