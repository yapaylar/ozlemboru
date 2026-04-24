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
    <section
      ref={ref}
      className="bg-white"
      style={{
        paddingTop: "clamp(5rem, 8vw, 6.5rem)",
        paddingBottom: "clamp(4rem, 6.5vw, 5.5rem)",
      }}
    >
      <div className="container-max text-center text-sm sm:text-base font-light tracking-[0.12em]">
        <p>
          {SLOGAN.split("").map((char, i) => (
            <span
              key={i}
              className="text-black"
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity ${FADE_DUR} ${EASE} ${i * CHAR_DELAY_MS}ms`,
                whiteSpace: char === " " ? "pre" : undefined,
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
