"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { REFERENCES } from "@/lib/constants";
import { useInView, fadeUp } from "@/hooks/useInView";

const LOGO_IDS = [1, 2, 3, 4, 5, 6, 7];
const STRIP: number[] = [...LOGO_IDS, ...LOGO_IDS];
const SLOTS = 5;
const SCALES = [0.8, 0.9, 1, 0.9, 0.8] as const;
const ZORDER = [1, 2, 5, 2, 1] as const;
const AUTO_MS = 2800;

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

function ReferenceLogosStepper({ inView }: { inView: boolean }) {
  const [reduced, setReduced] = useState(false);
  const [offset, setOffset] = useState(0);
  const [snap, setSnap] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useLayoutEffect(() => {
    if (!snap) return;
    const a = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSnap(false);
      });
    });
    return () => cancelAnimationFrame(a);
  }, [snap]);

  useEffect(() => {
    if (reduced || !inView) return;
    const id = window.setInterval(() => {
      setOffset((k) => (k < 6 ? k + 1 : 7));
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [inView, reduced]);

  const onTrackTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform" || e.target !== e.currentTarget) return;
    if (offset !== 7) return;
    setSnap(true);
    setOffset(0);
  };

  if (reduced) {
    return (
      <div className="mt-7 flex w-full items-stretch justify-center gap-0 sm:mt-8">
        {LOGO_IDS.slice(0, SLOTS).map((n, i) => (
          <div
            key={n}
            className="box-border flex min-h-28 min-w-0 flex-1 items-center justify-center border-y border-l border-zinc-200/80 bg-white p-2 first:rounded-l first:border-l last:rounded-r last:border-r sm:min-h-40 sm:p-3"
            style={{ transform: `scale(${SCALES[i]})` }}
          >
            <Image
              src={`/images/references/${n}.png`}
              alt=""
              width={120}
              height={120}
              className="h-full w-full object-contain p-1"
            />
          </div>
        ))}
      </div>
    );
  }

  const step = Math.min(offset, 7);
  return (
    <div className="mt-7 w-full min-w-0 sm:mt-8">
      <div className="w-full min-w-0 overflow-hidden" style={{ minHeight: "7.25rem" }} aria-hidden>
        <div
          onTransitionEnd={onTrackTransitionEnd}
          className={
            "flex w-[280%] will-change-transform gap-0" +
            (snap ? " transition-none" : " transition-transform") +
            (snap ? "" : " duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]")
          }
          style={{
            transform: `translate3d(calc(-1 * ${step} * (100% / 14)),0,0)`,
          }}
        >
          {STRIP.map((n, i) => {
            const k = offset;
            const inViewSlot = i >= k && i <= k + 4;
            const j = inViewSlot ? i - k : -1;
            const scale = j >= 0 && j < 5 ? SCALES[j] : 0.8;
            const z = j >= 0 && j < 5 ? ZORDER[j] : 0;
            return (
              <div
                key={`strip-${i}`}
                className="-ml-px box-border flex min-h-28 min-w-0 flex-1 items-center justify-center border border-zinc-200/80 bg-white p-2.5 first:ml-0 sm:min-h-40 sm:p-3"
                style={{ transform: `scale(${scale})`, zIndex: z }}
              >
                <Image
                  src={`/images/references/${n}.png`}
                  alt=""
                  width={120}
                  height={120}
                  className="h-full w-full object-contain"
                />
              </div>
            );
          })}
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

        <div style={fadeUp(inView, 80)}>
          <ReferenceLogosStepper inView={inView} />
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
