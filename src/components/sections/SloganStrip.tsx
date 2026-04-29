"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const SLOGAN =
  "Güçlü şehirlerin güçlü alt yapılara ihtiyacı vardır. Biz bunun için varız.";

/** sm+ görünürken tek blok soldan sağa wipe; mobilde CSS ile animasyon kapalı. */
export default function SloganStrip() {
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.08,
    rootMargin: "0px 0px 100px 0px",
  });

  return (
    <section
      ref={ref}
      className={cn(
        "w-full min-w-0 scroll-mt-2 overflow-x-clip bg-white py-10 sm:py-16 md:py-20",
        inView && "slogan-lr-visible"
      )}
    >
      <div className="container-max w-full min-w-0 text-center text-[0.95rem] font-light text-zinc-600 sm:text-base">
        <p className="slogan-lr-text text-pretty text-zinc-700 [letter-spacing:0.015em] [text-rendering:optimizeLegibility] leading-[1.75] antialiased sm:leading-[1.8] sm:[letter-spacing:0.02em]">
          {SLOGAN}
        </p>
      </div>
    </section>
  );
}
