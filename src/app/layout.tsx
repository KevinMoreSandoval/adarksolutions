import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import WhatsAppFloat from "@/components/whatsapp-float";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const logoUrl = `${siteUrl}/assets/img/logo-adark.png`;
const socialImageUrl = `${siteUrl}/assets/img/mockup-hero.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ADARK Solutions | Desarrollo web, software y aplicaciones a medida",
    template: "%s | ADARK Solutions",
  },
  description: siteDescription,
  applicationName: "ADARK Solutions",
  authors: [{ name: "ADARK Solutions", url: siteUrl }],
  creator: "ADARK Solutions",
  publisher: "ADARK Solutions",
  keywords: [
    "ADARK",
    "ADARK Solutions",
    "Adark",
    "Adark Solutions",
    "adark solutions",
    "desarrollo web",
    "desarrollo de software a medida",
    "desarrollo de aplicaciones móviles",
    "sistemas empresariales",
    "páginas web para empresas",
    "diseño y desarrollo de landing pages",
    "diseño UI UX",
    "soluciones digitales para empresas",
    "mantenimiento y soporte web",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName,
    title: "ADARK Solutions | Desarrollo web, software y aplicaciones a medida",
    description: siteDescription,
    images: [
      {
        url: socialImageUrl,
        width: 1462,
        height: 1076,
        alt: "Diseño web y software desarrollado por ADARK Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADARK Solutions | Desarrollo web, software y aplicaciones a medida",
    description: siteDescription,
    images: [
      {
        url: socialImageUrl,
        alt: "Diseño web y software desarrollado por ADARK Solutions",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: ["ADARK", "Adark Solutions", "Adark", "adark"],
      inLanguage: "es",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      alternateName: ["ADARK", "Adark Solutions", "Adark", "adark"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      image: socialImageUrl,
      description: siteDescription,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+51-917-397-169",
        contactType: "customer service",
        areaServed: "PE",
        availableLanguage: ["Spanish", "es"],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={poppins.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
