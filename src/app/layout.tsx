import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SEO, COMPANY } from "@/lib/constants";
import { CartProvider } from "@/context/CartContext";
import FloatingButtons from "@/components/ui/FloatingButtons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: COMPANY.fullName, url: SEO.siteUrl }],
  creator: COMPANY.fullName,
  publisher: COMPANY.fullName,
  metadataBase: new URL(SEO.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SEO.siteUrl,
    siteName: COMPANY.brandName,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: `${COMPANY.brandName} — Beton Boru ve Altyapı Elemanları`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SEO.siteUrl}/#organization`,
      name: COMPANY.fullName,
      alternateName: [COMPANY.brandName, COMPANY.name],
      url: SEO.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${SEO.siteUrl}/images/logo.svg`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.phone1,
        contactType: "customer service",
        availableLanguage: "Turkish",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Yenice Mah. Yolüstü Küme Ev. No:6/A",
        addressLocality: "Çubuk",
        addressRegion: "Ankara",
        addressCountry: "TR",
      },
      email: COMPANY.email,
      foundingDate: COMPANY.founded,
      description: SEO.description,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SEO.siteUrl}/#localbusiness`,
      name: COMPANY.brandName,
      description: SEO.description,
      url: SEO.siteUrl,
      telephone: COMPANY.phone1,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Yenice Mah. Yolüstü Küme Ev. No:6/A",
        addressLocality: "Çubuk",
        addressRegion: "Ankara",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.2307",
        longitude: "33.0268",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "TRY",
      paymentAccepted: "Cash, Invoice",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingButtons />
        </CartProvider>
      </body>
    </html>
  );
}
