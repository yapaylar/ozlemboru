"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { REFERENCES } from "@/lib/constants";
import { useInView, fadeUp } from "@/hooks/useInView";

const LOGO_IDS = [1, 2, 3, 4, 5, 6, 7];

const VISIBLE_REFS = REFERENCES.slice(0, 10);

const itemText =
  "flex min-w-0 items-start gap-3 py-3.5 text-sm font-light text-zinc-600 sm:py-4 sm:text-[0.95rem] sm:leading-[1.65]";
const itemNum = "w-5 shrink-0 text-right text-[11px] font-light tabular-nums text-zinc-400/90 sm:text-xs";

function RefItem({ n, text }: { n: number; text: string }) {
  return (
    <li className={itemText}>
      <span className={itemNum}>{String(n).padStart(2, "0")}</span>
      <span className="text-balance">{text}</span>
    </li>
  );
}

/** Tek tip boyutta logo — marquee ve statik görünüm ortak */
function RefLogoCell({ id }: { id: number }) {
  return (
    <div className="flex h-16 w-[7rem] shrink-0 items-center justify-center px-3 sm:h-[5.25rem] sm:w-[8.25rem] sm:px-4">
      <Image
        src={`/images/references/${id}.png`}
        alt=""
        width={140}
        height={140}
        className="max-h-full max-w-full object-contain opacity-90"
      />
    </div>
  );
}

function ReferenceLogosMarquee() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  if (reduced) {
    return (
      <div className="mt-7 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:mt-8 sm:gap-x-10">
        {LOGO_IDS.map((id) => (
          <RefLogoCell key={id} id={id} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-7 w-full min-w-0 sm:mt-8" aria-hidden>
      <div className="overflow-hidden py-1">
        <div className="reference-marquee-track">
          <div className="flex shrink-0 items-center gap-8 sm:gap-12 md:gap-14">
            {LOGO_IDS.map((id) => (
              <RefLogoCell key={`a-${id}`} id={id} />
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-8 sm:gap-12 md:gap-14" aria-hidden>
            {LOGO_IDS.map((id) => (
              <RefLogoCell key={`b-${id}`} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function References() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const colA = VISIBLE_REFS.slice(0, 5);
  const colB = VISIBLE_REFS.slice(5, 10);

  return (
    <section id="referanslar" className="section-y bg-white">
      <div ref={ref} className="container-max">
        <div className="section-header-row" style={fadeUp(inView, 0)}>
          <div>
            <p className="section-eyebrow">Güven</p>
            <h2 className="section-h2">Referanslarımız</h2>
            <p className="mt-0.5 text-sm font-light text-zinc-500 sm:hidden">
              {REFERENCES.length}+ tamamlanmış proje
            </p>
          </div>
          <p className="section-rail section-rail--right hidden sm:block sm:max-w-xs">
            {REFERENCES.length}+ tamamlanmış proje
          </p>
        </div>

        <div
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.65s ease 80ms`,
          }}
        >
          <ReferenceLogosMarquee />
        </div>

        <ul
          className="mt-8 list-none border-t border-zinc-200 divide-y divide-zinc-200 sm:mt-10 md:hidden"
          style={fadeUp(inView, 120)}
        >
          {VISIBLE_REFS.map((r, i) => (
            <RefItem key={i} n={i + 1} text={r} />
          ))}
        </ul>

        <div
          className="mt-8 hidden md:mt-10 md:grid md:grid-cols-2 md:gap-x-12"
          style={fadeUp(inView, 120)}
        >
          <ul className="list-none border-t border-zinc-200 divide-y divide-zinc-200">
            {colA.map((r, i) => (
              <RefItem key={i} n={i + 1} text={r} />
            ))}
          </ul>
          <ul className="list-none border-t border-zinc-200 divide-y divide-zinc-200">
            {colB.map((r, i) => (
              <RefItem key={i} n={5 + i + 1} text={r} />
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-zinc-200 pt-6 sm:mt-7 sm:pt-7" style={fadeUp(inView, 200)}>
          <Link href="/bilgi/referanslar" className="btn-cta btn-cta--primary">
            Tüm referansları gör
          </Link>
        </div>
      </div>
    </section>
  );
}
