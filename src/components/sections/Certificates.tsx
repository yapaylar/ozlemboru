import { CERTIFICATES } from "@/lib/constants";

export default function Certificates() {
  return (
    <section id="sertifikalar" className="section-y" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="container-max">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
          <div>
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
              Belgelerimiz
            </p>
            <h2
              className="font-light uppercase leading-none tracking-wide"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
            >
              Sertifikalar
            </h2>
          </div>
          <p className="hidden sm:block text-sm font-light text-right" style={{ color: "#888" }}>
            Ulusal ve uluslararası<br />bağımsız belgelendirme
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#f7f7f7" }}>
          {CERTIFICATES.map((cert) => (
            <div key={cert.code} className="flex flex-col p-7 gap-4" style={{ backgroundColor: "#f7f7f7" }}>

              {/* Issuer tag */}
              <span
                className="self-start text-[10px] font-light uppercase tracking-[0.2em] px-2.5 py-1 border"
                style={{ borderColor: "#000", color: "#000" }}
              >
                {cert.issuer}
              </span>

              {/* Code + title */}
              <div>
                <p
                  className="text-xs font-light uppercase tracking-widest mb-1.5"
                  style={{ color: "#888" }}
                >
                  {cert.code}
                </p>
                <h3
                  className="font-medium uppercase tracking-wide text-sm leading-snug"
                  style={{ color: "#000" }}
                >
                  {cert.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
                {cert.description}
              </p>

            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs font-light uppercase tracking-widest text-center" style={{ color: "#aaa" }}>
          Tüm sertifikalar güncel olup talep halinde iletilmektedir.
        </p>

      </div>
    </section>
  );
}
