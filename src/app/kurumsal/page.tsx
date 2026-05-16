import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY, KFS_ITEMS, CERTIFICATES } from "@/lib/constants";

const KURUMSAL_HERO_SRC = "/kurumsalhero2.jpg";

export const metadata: Metadata = {
  title: "Kurumsal | Özlem Beton Boru",
  description:
    "1989'dan bu yana Ankara'da faaliyet gösteren Özlem İnşaat ve Altyapı Elemanları hakkında kurumsal bilgiler, misyon, vizyon ve kalite politikamız.",
};

const VISION_VALUES = [
  "Dürüstlük ve Ticari Ahlak",
  "Müşteri Memnuniyeti",
  "Çevreye ve İnsana Saygı",
  "Şeffaflık ve Güvenilirlik",
] as const;

const QUALITY_PRINCIPLES = [
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
] as const;

export default function KurumsalPage() {
  return (
    <main className="w-full min-w-0 overflow-x-clip">
      {/* Hero görsel + karartma — anasayfa Hero ile aynı katman mantığı */}
      <section className="relative min-h-[min(52vh,26rem)] overflow-hidden border-b border-zinc-200/90 sm:min-h-[min(56vh,28rem)] md:min-h-[min(58vh,30rem)]">
        <Image
          src={KURUMSAL_HERO_SRC}
          alt="Özlem İnşaat üretim ve kurumsal yapı"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />

        <div className="relative z-10 flex min-h-[min(52vh,26rem)] flex-col justify-end pt-[68px] sm:min-h-[min(56vh,28rem)] sm:pt-[72px] md:min-h-[min(58vh,30rem)]">
          <div className="container-max w-full pb-10 [padding-bottom:max(2.5rem,env(safe-area-inset-bottom))] sm:pb-14 md:pb-16">
            <nav aria-label="İçerik yolu" className="mb-5">
              <Link
                href="/"
                className="text-[11px] font-light tracking-[0.14em] text-white/60 transition-colors hover:text-white"
              >
                Anasayfa
              </Link>
              <span className="mx-2 text-white/35">/</span>
              <span className="text-[11px] font-light tracking-[0.14em] text-white/90">
                Kurumsal
              </span>
            </nav>
            <h1 className="max-w-4xl text-balance font-light leading-[1.12] tracking-[-0.02em] text-white [font-size:var(--type-hero)] sm:max-w-5xl sm:tracking-[-0.01em]">
              Özlem İnşaat ve Altyapı Elemanları
            </h1>
            <p className="mt-4 max-w-2xl text-balance text-base font-light leading-[1.65] text-white/75 sm:text-[1.05rem] sm:leading-[1.7]">
              {COMPANY.founded}&rsquo;dan bu yana Çubuk, Ankara merkezli üretim ve kurumsal süreklilik.
            </p>
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section id="hakkimizda" className="section-y bg-white">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">Biz Kimiz</p>
              <h2 className="section-h2 max-w-xl">Hakkımızda</h2>
              <p className="mt-0.5 text-balance text-sm font-light leading-snug text-zinc-500 sm:hidden">
                {COMPANY.founded} · Çubuk, Ankara
              </p>
            </div>
            <p className="section-rail section-rail--right hidden text-zinc-500 sm:block sm:max-w-xs">
              <span className="text-balance">
                {COMPANY.founded} · Çubuk, Ankara
              </span>
            </p>
          </div>

          <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <p className="section-body leading-[1.75]">
                Bir yapı düşünün: yıllara meydan okuyan sağlamlığıyla, taşıdığı güvenle projesine değer
                katan, kalitesiyle farkını ilk bakışta hissettiren… Özlem İnşaat ve Altyapı Elemanları,
                işte bu anlayış üzerine inşa edilmiş köklü ve güvenilir bir markadır.
              </p>
              <p className="section-body leading-[1.75]">
                1989 yılında Ankara&rsquo;nın Çubuk ilçesinde beton boru ve beton elemanları üretimi
                amacıyla Özlem Ticaret adıyla başlayan bu yolculuk, aile şirketi olmanın getirdiği birlik
                ve çalışma azmiyle güçlenmiş; 1996 yılında bugünkü unvanını alarak sektörde kalıcı bir
                yer edinmiştir.
              </p>
              <p className="section-body leading-[1.75]">
                Teknolojik gelişmeleri yakından izleyen firmamız, üretim gücünü çağın gereklilikleriyle
                bütünleştirerek kalite standartlarını sürekli yükseltmiştir. TSE tarafından verilen TS
                821 EN 1916, TS EN 1917 ve TS 13473 belgeleri ile İller Bankası kalite ve yeterlilik
                belgeleri bu anlayışın somut kanıtlarıdır.
              </p>
              <p className="section-body leading-[1.75]">
                Üretimden sevkiyata uzanan her aşamada çevresel sorumluluğunu da ön planda tutan
                firmamız, T.C. Çevre ve Şehircilik Bakanlığı çevre izinleri ile ISO 9001 ve ISO 14001
                sertifikalarını alarak kalite ve çevre yönetimine olan kararlılığını belgelemiştir.
              </p>
              <p className="section-body leading-[1.75]">
                Yerli hammadde ve ülkemizin üretim birikimini esas alan Özlem İnşaat; Ø150
                mm&rsquo;den Ø2800 mm&rsquo;ye kadar buhar kürlü, entegre contalı veya contasız
                beton-betonarme boru ve çeşitli beton elemanları üretimiyle bölgenin öncü firmalarından
                biri konumuna gelmiştir. Geçmişten aldığı güç ve üretime olan disipliniyle, yarının
                projelerine de aynı güvenle değer katmaya devam etmektedir.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5">
              {KFS_ITEMS.map((item) => (
                <div
                  key={item.letter}
                  className="flex gap-5 border border-zinc-200/90 bg-zinc-50/60 px-5 py-5 sm:gap-6 sm:px-6 sm:py-6"
                >
                  <span className="shrink-0 text-2xl font-light leading-none text-zinc-900 sm:text-3xl">
                    {item.letter}
                  </span>
                  <div className="min-w-0">
                    <h3 className="mb-1.5 text-xs font-normal uppercase tracking-[0.08em] text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-zinc-600 sm:text-[0.95rem] sm:leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon — Certificates bölümüne yakın zemin */}
      <section className="section-y bg-zinc-50/80">
        <div className="container-max">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="border border-zinc-200/80 bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="section-eyebrow mb-4 text-zinc-500">01</p>
              <h2 className="section-h2 mb-6 max-w-none text-zinc-900">Misyonumuz</h2>
              <div className="mb-6 border-t border-zinc-200" />
              <p className="section-body text-zinc-600">
                Kamu kurumları ve özel sektörün altyapı ihtiyaçlarını; TSE ve ISO standartlarına uygun,
                buhar kürlü üretim teknolojisiyle karşılamak. Kaliteli ürün, rekabetçi fiyat ve zamanında
                teslimat ilkeleri doğrultusunda güvenilir bir tedarik ortağı olmak. Türkiye&rsquo;nin
                altyapı geleceğine yerli üretim ve yerli sermayeyle katkı sağlamak.
              </p>
            </div>

            <div className="border border-zinc-200/80 bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="section-eyebrow mb-4 text-zinc-500">02</p>
              <h2 className="section-h2 mb-6 max-w-none text-zinc-900">Vizyonumuz</h2>
              <div className="mb-6 border-t border-zinc-200" />
              <p className="section-body mb-8 text-zinc-600">
                Beton boru ve altyapı elemanları sektöründe ulusal ölçekte tanınan, tercih edilen ve örnek
                gösterilen bir marka olmak. Üretim kalitesini, çevresel sorumluluğu ve kurumsal güveni bir
                arada taşıyarak sektörde kalıcı üstünlükler oluşturmak.
              </p>
              <ul className="space-y-2.5">
                {VISION_VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-zinc-400" aria-hidden />
                    <span className="text-sm font-light leading-snug text-zinc-600">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kalite politikası */}
      <section className="section-y bg-white">
        <div className="container-max">
          <div className="section-header-row">
            <div>
              <p className="section-eyebrow max-w-full text-balance">Standartlarımız</p>
              <h2 className="section-h2 max-w-xl">Kalite Politikamız</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="section-body mb-8 leading-[1.75]">
                Özlem İnşaat olarak kalite; yalnızca ürün belgesi değil, üretimin her aşamasına sinen bir
                kültürdür. Hammadde seçiminden sevkiyata, müşteri ilişkilerinden çevre yönetimine kadar
                tavizsiz bir standartlar bütünü olarak yaşatılmaktadır.
              </p>
              <div className="divide-y divide-zinc-200 border-t border-zinc-200">
                {CERTIFICATES.map((cert) => (
                  <div key={cert.code} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-start sm:gap-4">
                    <span className="shrink-0 self-start border border-zinc-200/90 bg-zinc-50 px-2 py-0.5 text-[10px] font-light uppercase tracking-[0.12em] text-zinc-600">
                      {cert.issuer}
                    </span>
                    <p className="min-w-0 text-sm font-light leading-relaxed text-zinc-700">
                      <span className="text-zinc-500">{cert.code}</span>
                      {" — "}
                      {cert.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-zinc-200 border-t border-zinc-200">
                {QUALITY_PRINCIPLES.map((item) => (
                  <li key={item.no} className="flex gap-5 py-6 sm:gap-6">
                    <span className="w-7 shrink-0 pt-0.5 text-right text-[11px] font-light tabular-nums text-zinc-400">
                      {item.no}
                    </span>
                    <div className="min-w-0">
                      <h3 className="mb-2 text-xs font-normal uppercase tracking-[0.08em] text-zinc-900">
                        {item.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-zinc-600 sm:text-[0.95rem] sm:leading-[1.65]">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
