import Image from "next/image";

export default function About() {
  return (
    <section id="hakkimizda" className="section-y bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div className="lg:col-span-7">

            {/* Eyebrow */}
            <p className="text-xs font-light uppercase tracking-[0.2em] mb-6" style={{ color: "#888" }}>
              Kurumsal
            </p>

            <h2
              className="font-light uppercase leading-[1.08] tracking-wide"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
            >
              Kalitenin<br />Taşıyıcı Gücü
            </h2>

            {/* Thin divider */}
            <div className="mt-8 mb-8 border-t" style={{ borderColor: "#000" }} />

            <p className="font-light leading-relaxed text-base" style={{ color: "#333" }}>
              Her güçlü yapının arkasında, doğru üretilmiş altyapı elemanları ve tavizsiz bir
              kalite anlayışı yer alır. Özlem İnşaat ve Altyapı Elemanları, üretimden sevkiyata
              uzanan tüm süreçlerde benimsediği titiz yaklaşımı, belgelerle desteklenen
              güvenilirliği ve sektör tecrübesiyle, projelerin ihtiyaç duyduğu sağlamlığı ve
              sürekliliği en doğru biçimde karşılamaktadır.
            </p>

            <div className="mt-10">
              <a
                href="/kurumsal"
                className="inline-flex items-center gap-3 font-light uppercase tracking-widest px-7 py-3.5 text-sm text-white transition-all duration-200 hover:opacity-75"
                style={{ backgroundColor: "#000" }}
              >
                Detaylı Bilgi
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — image */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-bg.png"
                alt="Özlem İnşaat Üretim Tesisi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
