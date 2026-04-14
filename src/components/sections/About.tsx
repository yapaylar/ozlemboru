import { COMPANY, KFS_ITEMS } from "@/lib/constants";

export default function About() {
  return (
    <section id="hakkimizda" className="section-y bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="label-tag">Kurumsal</p>
            <h2 className="section-title">Hakkımızda</h2>
            <div className="divider-accent" />

            <div className="mt-8 space-y-5 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-navy font-semibold">{COMPANY.fullName}</strong>, beton boru
                ve beton elemanları üretimi amacıyla {COMPANY.founded} yılında ÖZLEM TİCARET olarak
                kurulmuştur. Aile şirketinin verdiği güçlü aidiyet ve kararlı çalışmaların sonucunda
                1996&rsquo;da bugünkü ünvanını almıştır.
              </p>
              <p>
                Teknolojik gelişmeleri yakından takip eden firmamız; TSE tarafından verilen{" "}
                <strong className="text-slate-700">TS 821 EN 1916, TS EN 1917, TS 13473</strong>{" "}
                belgelerini, İLLER BANKASI kalite-yeterlilik izinlerini ve{" "}
                <strong className="text-slate-700">ISO 9001–14001</strong> sertifikalarını bünyesinde
                taşımaktadır.
              </p>
              <p>
                Ø150mm&rsquo;den Ø2800mm&rsquo;ye kadar Buhar Kürlü, Entegre Contalı/Contasız
                Beton-Betonarme Boru ve Muayene Bacaları üretimini gerçekleştirerek bölgenin önde
                gelen üreticisi konumuna gelmiştir.
              </p>
            </div>

            {/* GM */}
            <div className="mt-10 pt-8 border-t" style={{ borderColor: "#e4e9f0" }}>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: "#1b3563" }}
                >
                  {COMPANY.gm.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{COMPANY.gm}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{COMPANY.gmTitle}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Image placeholder */}
            <div
              className="relative w-full aspect-[16/9] rounded-sm overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: "#e4e9f0" }}
            >
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                  Tesis Fotoğrafı
                </div>
                <div className="text-xs text-slate-300 mt-1">Yakında eklenecek</div>
              </div>
              {/* Subtle label overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between"
                style={{ backgroundColor: "#1b3563" }}
              >
                <span className="text-white text-xs font-medium">
                  Özlem İnşaat — Çubuk, Ankara
                </span>
                <span className="text-white/40 text-xs">{COMPANY.founded}&rsquo;dan Bu Yana</span>
              </div>
            </div>

            {/* KFS */}
            <div>
              <p className="label-tag mb-5">Üretim Felsefemiz</p>
              <div className="grid grid-cols-3 gap-4">
                {KFS_ITEMS.map((item) => (
                  <div
                    key={item.letter}
                    className="border rounded-sm p-5"
                    style={{ borderColor: "#e4e9f0" }}
                  >
                    <div
                      className="text-4xl font-black leading-none mb-3"
                      style={{ color: "#00a8d6" }}
                    >
                      {item.letter}
                    </div>
                    <div className="text-sm font-semibold text-navy leading-tight">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {item.description.split(" ").slice(0, 10).join(" ")}&hellip;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
