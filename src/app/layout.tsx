
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Desarrollo web, sistemas y apps a medida | ADARK Solutions",
    template: "%s | ADARK Solutions",
  },
  description: siteDescription,
  keywords: [
    "desarrollo web",
    "páginas web para empresas",
    "sistemas a medida",
    "desarrollo de aplicaciones móviles",
    "diseño UI UX",
    "mantenimiento y soporte web",
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
    images: [{ url: logoUrl, width: 248, height: 46, alt: "ADARK Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo web, sistemas y apps a medida | ADARK Solutions",
    description: siteDescription,
    images: [{ url: logoUrl, alt: "ADARK Solutions" }],
  },
  icons: {
    icon: "/assets/img/isotipo-dark.png",
    apple: "/assets/img/isotipo-dark.png",
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
