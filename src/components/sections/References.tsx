import { REFERENCES, REFERENCE_INSTITUTIONS } from "@/lib/constants";

export default function References() {
  const half = Math.ceil(REFERENCES.length / 2);

  return (
    <section id="referanslar" className="section-y bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <p className="label-tag">Güven</p>
          <h2 className="section-title">Referanslarımız</h2>
          <div className="divider-accent" />
          <p className="mt-5 text-slate-500 text-sm max-w-lg leading-relaxed">
            Kamu kurumları, belediyeler ve önde gelen inşaat firmaları ile
            gerçekleştirdiğimiz projelerle Türkiye&rsquo;nin altyapısını güçlendiriyoruz.
          </p>
        </div>

        {/* Institutions — clean pill list */}
        <div className="mb-12 pb-12 border-b" style={{ borderColor: "#e4e9f0" }}>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-5">
            Çalıştığımız Kurumlardan Bazıları
          </p>
          <div className="flex flex-wrap gap-2">
            {REFERENCE_INSTITUTIONS.map((name) => (
              <span
                key={name}
                className="px-4 py-2 text-sm font-semibold border rounded-sm"
                style={{
                  borderColor: "#1b3563",
                  color: "#1b3563",
                  backgroundColor: "#fff",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Reference list */}
        <div
          className="rounded-sm overflow-hidden border"
          style={{ borderColor: "#e4e9f0" }}
        >
          {/* Header bar */}
          <div
            className="px-8 py-4 flex items-center justify-between"
            style={{ backgroundColor: "#1b3563" }}
          >
            <span className="text-white font-semibold text-sm">Referanslarımızdan Bazıları</span>
            <span className="text-white/40 text-xs">{REFERENCES.length}+ proje</span>
          </div>

          {/* Two-column list */}
          <div className="grid md:grid-cols-2">
            {[REFERENCES.slice(0, half), REFERENCES.slice(half)].map((col, ci) => (
              <div
                key={ci}
                className={ci === 0 ? "border-r" : ""}
                style={{ borderColor: "#e4e9f0" }}
              >
                {col.map((ref, ri) => (
                  <div
                    key={ri}
                    className="flex items-center gap-3 px-6 py-3 border-b text-sm"
                    style={{ borderColor: "#f4f6fa" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: "#00a8d6" }}
                    />
                    <span className="text-slate-600">{ref}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
