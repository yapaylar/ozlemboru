import { WHY_CONCRETE } from "@/lib/constants";

export default function WhyConcrete() {
  return (
    <section id="neden-beton-boru" className="section-y bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left — sticky header block */}
          <div className="lg:col-span-4">
            <p className="label-tag">Teknik Üstünlük</p>
            <h2 className="section-title">Neden<br />Beton Boru?</h2>
            <div className="divider-accent" />
            <p className="mt-6 text-slate-500 leading-relaxed text-sm">
              Yüzyılı aşkın süredir kanalizasyon şebekelerinde kullanılan ve kalitesini kanıtlamış
              beton borular, dünyada en çok tercih edilen altyapı ürünü olmaya devam etmektedir.
            </p>

            {/* Pull quote */}
            <blockquote
              className="mt-8 pl-5 border-l-2 text-sm text-slate-600 italic leading-relaxed"
              style={{ borderColor: "#00a8d6" }}
            >
              &ldquo;Beton boru üretimi için sadece kum, çimento ve su ihtiyaç duyulmaktadır.
              Ülkemizin doğal hammaddeleri ile üretilen, milli sermayenin ülke içinde kalmasını
              sağlayan yerli bir üründür.&rdquo;
            </blockquote>
          </div>

          {/* Right — numbered list */}
          <div className="lg:col-span-8">
            <div className="divide-y" style={{ borderColor: "#e4e9f0" }}>
              {WHY_CONCRETE.map((item, i) => (
                <div
                  key={item.icon}
                  className="py-6 grid grid-cols-12 gap-4 group hover:bg-gray-light/50 px-1 transition-colors duration-150 -mx-1"
                >
                  {/* Index */}
                  <div className="col-span-1 pt-0.5">
                    <span
                      className="text-2xl font-black leading-none"
                      style={{ color: "#e4e9f0" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="col-span-11">
                    <h3 className="font-semibold text-navy text-base mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
