
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
    default: "Desarrollo de software, páginas web y apps | ADARK Solutions",
    template: "%s | ADARK Solutions",
  },
  description: siteDescription,
  keywords: [
    "desarrollo de software a medida",
    "desarrollo de páginas web",
    "diseño y desarrollo de landing pages",
    "sistemas empresariales",
    "aplicaciones móviles",
    "soluciones digitales para empresas",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName,
    title: "Desarrollo web, sistemas y apps a medida | ADARK Solutions",
    description: siteDescription,
    images: [{ url: socialImageUrl, alt: "Diseño web desarrollado por ADARK Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo web, sistemas y apps a medida | ADARK Solutions",
    description: siteDescription,
    images: [{ url: socialImageUrl, alt: "Diseño web desarrollado por ADARK Solutions" }],
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: logoUrl,
              description: siteDescription,
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
