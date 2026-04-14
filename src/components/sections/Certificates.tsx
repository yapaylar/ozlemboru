import { CERTIFICATES } from "@/lib/constants";

const ISSUER_STYLE: Record<string, { bg: string; text: string }> = {
  TSE:    { bg: "#c8001e", text: "#fff" },
  ISO:    { bg: "#0057a8", text: "#fff" },
  İLBANK: { bg: "#1b3563", text: "#fff" },
};

export default function Certificates() {
  return (
    <section
      id="sertifikalar"
      className="section-y"
      style={{ backgroundColor: "#f4f6fa" }}
    >
      <div className="container-max">
        {/* Header */}
        <div className="mb-12">
          <p className="label-tag">Belgelerimiz</p>
          <h2 className="section-title">Sertifikalar</h2>
          <div className="divider-accent" />
          <p className="mt-5 text-slate-500 text-sm max-w-lg leading-relaxed">
            Üretim kalitemiz ve çevresel sorumluluğumuz ulusal ve uluslararası
            kuruluşlar tarafından bağımsız olarak belgelenmiştir.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATES.map((cert) => {
            const style = ISSUER_STYLE[cert.issuer] ?? { bg: "#1b3563", text: "#fff" };
            return (
              <div
                key={cert.code}
                className="bg-white border flex overflow-hidden"
                style={{ borderColor: "#e4e9f0" }}
              >
                {/* Left accent strip with issuer */}
                <div
                  className="w-16 shrink-0 flex flex-col items-center justify-center py-6"
                  style={{ backgroundColor: style.bg }}
                >
                  <span
                    className="text-xs font-black uppercase tracking-wider rotate-[-90deg] whitespace-nowrap"
                    style={{ color: style.text }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-center">
                  <div
                    className="text-xs font-bold tracking-wide uppercase mb-1"
                    style={{ color: style.bg }}
                  >
                    {cert.code}
                  </div>
                  <div className="font-semibold text-navy text-sm">{cert.title}</div>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-slate-400 text-center">
          Tüm sertifikalarımız güncel olup talep halinde iletilmektedir.
        </p>
      </div>
    </section>
  );
}
