import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY, KFS_ITEMS, CERTIFICATES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kurumsal | Özlem Beton Boru",
  description:
    "1989'dan bu yana Ankara'da faaliyet gösteren Özlem İnşaat ve Altyapı Elemanları hakkında kurumsal bilgiler, misyon, vizyon ve kalite politikamız.",
};

export default function KurumsalPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── PAGE HEADER ─────────────────────────────────────────── */}
        <section
          className="relative pt-[80px]"
          style={{ backgroundColor: "#0a0a0a", minHeight: "280px" }}
        >
          <div
            className="relative z-10 flex items-end container-max pb-14"
            style={{ minHeight: "calc(280px - 80px)" }}
          >
            <div>
              <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Anasayfa / Kurumsal
              </p>
              <h1
                className="font-light uppercase tracking-wide text-white leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Kurumsal
              </h1>
            </div>
          </div>
        </section>

        {/* ── HAKKIMIZDA ──────────────────────────────────────────── */}
        <section id="hakkimizda" className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Biz Kimiz
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
                >
                  Hakkımızda
                </h2>
              </div>
              <p className="hidden sm:block text-sm font-light text-right" style={{ color: "#888" }}>
                {COMPANY.founded} · Çubuk, Ankara
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7 space-y-6 text-base font-light leading-relaxed" style={{ color: "#333" }}>
                <p>
                  Bir yapı düşünün: yıllara meydan okuyan sağlamlığıyla, taşıdığı güvenle projesine değer katan,
                  kalitesiyle farkını ilk bakışta hissettiren… Özlem İnşaat ve Altyapı Elemanları, işte bu anlayış
                  üzerine inşa edilmiş köklü ve güvenilir bir markadır.
                </p>
                <p>
                  1989 yılında Ankara&rsquo;nın Çubuk ilçesinde beton boru ve beton elemanları üretimi amacıyla
                  Özlem Ticaret adıyla başlayan bu yolculuk, aile şirketi olmanın getirdiği birlik ve çalışma
                  azmiyle güçlenmiş; 1996 yılında bugünkü unvanını alarak sektörde kalıcı bir yer edinmiştir.
                </p>
                <p>
                  Teknolojik gelişmeleri yakından izleyen firmamız, üretim gücünü çağın gereklilikleriyle
                  bütünleştirerek kalite standartlarını sürekli yükseltmiştir. TSE tarafından verilen
                  TS 821 EN 1916, TS EN 1917 ve TS 13473 belgeleri ile İller Bankası kalite ve yeterlilik
                  belgeleri bu anlayışın somut kanıtlarıdır.
                </p>
                <p>
                  Üretimden sevkiyata uzanan her aşamada çevresel sorumluluğunu da ön planda tutan firmamız,
                  T.C. Çevre ve Şehircilik Bakanlığı çevre izinleri ile ISO 9001 ve ISO 14001 sertifikalarını
                  alarak kalite ve çevre yönetimine olan kararlılığını belgelemiştir.
                </p>
                <p>
                  Yerli hammadde ve ülkemizin üretim birikimini esas alan Özlem İnşaat; Ø150 mm&rsquo;den
                  Ø2800 mm&rsquo;ye kadar buhar kürlü, entegre contalı veya contasız beton-betonarme boru ve
                  çeşitli beton elemanları üretimiyle bölgenin öncü firmalarından biri konumuna gelmiştir.
                  Geçmişten aldığı güç ve üretime olan disipliniyle, yarının projelerine de aynı güvenle
                  değer katmaya devam etmektedir.
                </p>
              </div>

              {/* KFS */}
              <div className="lg:col-span-5 space-y-px">
                {KFS_ITEMS.map((item) => (
                  <div
                    key={item.letter}
                    className="flex gap-6 p-6 border"
                    style={{ borderColor: "#e8e8e8" }}
                  >
                    <span
                      className="text-3xl font-light shrink-0 leading-none"
                      style={{ color: "#000" }}
                    >
                      {item.letter}
                    </span>
                    <div>
                      <h3 className="font-medium uppercase tracking-wide text-sm mb-1.5" style={{ color: "#000" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── MİSYON & VİZYON ─────────────────────────────────────── */}
        <section className="section-y" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="container-max">

            <div className="grid lg:grid-cols-2 gap-px bg-black">

              {/* Misyon */}
              <div className="bg-white p-10 lg:p-14">
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-6" style={{ color: "#888" }}>
                  01
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide mb-8"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#000" }}
                >
                  Misyonumuz
                </h2>
                <div className="border-t mb-8" style={{ borderColor: "#000" }} />
                <p className="text-base font-light leading-relaxed" style={{ color: "#333" }}>
                  Kamu kurumları ve özel sektörün altyapı ihtiyaçlarını; TSE ve ISO standartlarına
                  uygun, buhar kürlü üretim teknolojisiyle karşılamak. Kaliteli ürün, rekabetçi fiyat
                  ve zamanında teslimat ilkeleri doğrultusunda güvenilir bir tedarik ortağı olmak.
                  Türkiye&rsquo;nin altyapı geleceğine yerli üretim ve yerli sermayeyle katkı sağlamak.
                </p>
              </div>

              {/* Vizyon */}
              <div className="bg-white p-10 lg:p-14">
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-6" style={{ color: "#888" }}>
                  02
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide mb-8"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#000" }}
                >
                  Vizyonumuz
                </h2>
                <div className="border-t mb-8" style={{ borderColor: "#000" }} />
                <p className="text-base font-light leading-relaxed mb-6" style={{ color: "#333" }}>
                  Beton boru ve altyapı elemanları sektöründe ulusal ölçekte tanınan, tercih edilen
                  ve örnek gösterilen bir marka olmak. Üretim kalitesini, çevresel sorumluluğu ve
                  kurumsal güveni bir arada taşıyarak sektörde kalıcı üstünlükler oluşturmak.
                </p>
                <div className="space-y-2">
                  {["Dürüstlük ve Ticari Ahlak", "Müşteri Memnuniyeti", "Çevreye ve İnsana Saygı", "Şeffaflık ve Güvenilirlik"].map((v) => (
                    <div key={v} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full shrink-0 bg-black" />
                      <span className="text-sm font-light" style={{ color: "#555" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── KALİTE POLİTİKASI ───────────────────────────────────── */}
        <section className="section-y bg-white">
          <div className="container-max">

            <div className="flex items-end justify-between mb-12 pb-6 border-b" style={{ borderColor: "#000" }}>
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] mb-4" style={{ color: "#888" }}>
                  Standartlarımız
                </p>
                <h2
                  className="font-light uppercase leading-none tracking-wide"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#000" }}
                >
                  Kalite Politikamız
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

              {/* Sol — açıklama */}
              <div className="lg:col-span-5">
                <p className="text-base font-light leading-relaxed mb-8" style={{ color: "#333" }}>
                  Özlem İnşaat olarak kalite; yalnızca ürün belgesi değil, üretimin her aşamasına
                  sinen bir kültürdür. Hammadde seçiminden sevkiyata, müşteri ilişkilerinden çevre
                  yönetimine kadar tavizsiz bir standartlar bütünü olarak yaşatılmaktadır.
                </p>
                <div className="space-y-2">
                  {CERTIFICATES.map((cert) => (
                    <div key={cert.code} className="flex items-start gap-4 py-3 border-b" style={{ borderColor: "#e8e8e8" }}>
                      <span className="text-xs font-light uppercase tracking-widest shrink-0 w-28" style={{ color: "#888" }}>
                        {cert.issuer}
                      </span>
                      <span className="text-sm font-light" style={{ color: "#333" }}>
                        {cert.code} — {cert.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ — prensipler */}
              <div className="lg:col-span-7">
                {[
                  {
                    no: "01",
                    title: "Kaliteden Ödün Vermemek",
                    desc: "Her ürün, belirlenen teknik standartların üzerinde bir titizlikle üretilir. TSE ve ISO belgeli üretim süreçlerimiz, kalite güvencesinin kurumsal bir çerçevede yürütüldüğünü gösterir.",
                  },
                  {
                    no: "02",
                    title: "Sürekli İyileştirme",
                    desc: "Teknolojik gelişmeleri yakından izleyen firmamız, üretim yöntemlerini ve ekipmanlarını düzenli olarak günceller. Müşteri geri bildirimleri, iyileştirme süreçlerimizin ayrılmaz bir parçasıdır.",
                  },
                  {
                    no: "03",
                    title: "Müşteri Odaklılık",
                    desc: "Her projeye özgü ihtiyaçları anlayan, teknik şartname ve teslimat gereksinimlerini eksiksiz karşılayan bir hizmet anlayışıyla çalışıyoruz.",
                  },
                  {
                    no: "04",
                    title: "Çevresel Sorumluluk",
                    desc: "Üretim süreçlerinde hava, su, toprak ve doğal kaynakların korunmasını esas alıyoruz. ISO 14001 sertifikamız, bu sorumluluğu kurumsal düzeyde taahhüt ettiğimizin belgesidir.",
                  },
                  {
                    no: "05",
                    title: "Katılımcı Yönetim",
                    desc: "Çalışanlarımızın bilgi ve deneyimini süreçlere dahil eden, şeffaf ve dinamik bir yönetim anlayışı benimsiyoruz. Kurumsal gelişim; bireysel gelişimle birlikte ilerlediğinde anlam kazanır.",
                  },
                ].map((item) => (
                  <div
                    key={item.no}
                    className="flex gap-6 py-6 border-b"
                    style={{ borderColor: "#e8e8e8" }}
                  >
                    <span className="text-xs font-light shrink-0 pt-0.5 w-6 text-right" style={{ color: "#bbb" }}>
                      {item.no}
                    </span>
                    <div>
                      <h3 className="font-medium uppercase tracking-wide text-sm mb-2" style={{ color: "#000" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
