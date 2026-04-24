import Image from "next/image";
import Link from "next/link";
import { REFERENCES } from "@/lib/constants";

const LOGOS = [1, 2, 3, 4, 5, 6, 7];
const LOGOS_MOBILE = [1, 2, 3, 4, 5, 6, 7, 5];

const VISIBLE_REFS = REFERENCES.slice(0, 10);

export default function References() {
  return (
    <section id="referanslar" className="section-y bg-white">
      <div className="container-max">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
          <div>
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
              Güven
            </p>
            <h2
              className="font-light uppercase leading-none tracking-wide"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
            >
              Referanslarımız
            </h2>
          </div>
          <p className="hidden sm:block text-sm font-light text-right" style={{ color: "#888" }}>
            {REFERENCES.length}+ tamamlanmış proje
          </p>
        </div>

        {/* Logo row — mobile uses 8 items (fills 4×2 grid), desktop uses 7 (fills 1×7) */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-px bg-black mb-12">
          {LOGOS_MOBILE.map((n, i) => (
            <div key={i} className={`aspect-square bg-white flex items-center justify-center p-4 ${i === 7 ? "sm:hidden" : ""}`}>
              <Image
                src={`/images/references/${n}.png`}
                alt={`Referans ${n}`}
                width={120}
                height={120}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Reference list */}
        <div className="grid md:grid-cols-2 border-t border-l" style={{ borderColor: "#e8e8e8" }}>
          {[VISIBLE_REFS.slice(0, 5), VISIBLE_REFS.slice(5, 10)].map((col, ci) => (
            <div key={ci}>
              {col.map((ref, ri) => (
                <div
                  key={ri}
                  className="flex items-center gap-4 px-6 py-4 border-b border-r text-sm font-light"
                  style={{ borderColor: "#e8e8e8", color: "#333" }}
                >
                  <span
                    className="text-xs font-light shrink-0 w-5 text-right"
                    style={{ color: "#bbb" }}
                  >
                    {String(ci * 5 + ri + 1).padStart(2, "0")}
                  </span>
                  {ref}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Show all button */}
        <div className="mt-8 flex justify-start">
          <Link
            href="/bilgi/referanslar"
            className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-6 py-2.5 text-sm text-white transition-all duration-200 hover:opacity-80"
            style={{ backgroundColor: "#6db0e0", borderRadius: "20px" }}
          >
            +60 Referansın Tamamını Gör
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
