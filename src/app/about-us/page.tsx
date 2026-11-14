import Image from "next/image";
import Link from "next/link";
import {
  AboutMissionScreen,
  FooterScreen,
  HowWeWorkScreen,
  WhoWeAreScreen,
} from "@/screens";
import styles from "./about-us.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos - Sobre nosotros",
  description:
    "Conoce a ADARK Solutions: nuestra misión, visión y el equipo detrás del desarrollo de páginas web, sistemas y aplicaciones móviles a medida.",
  alternates: { canonical: "/about-us" },
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
    siteName: "ADARK Solutions",
    title: "Quiénes somos | ADARK Solutions",
    description:
      "Conoce a ADARK Solutions: nuestra misión, visión y el equipo detrás del desarrollo de páginas web, sistemas y aplicaciones móviles a medida.",
    url: "/about-us",
    images: [
      {
        url: "/assets/img/image-corp.avif",
        width: 1200,
        height: 630,
        alt: "Equipo de ADARK Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes somos | ADARK Solutions",
    description:
      "Conoce a ADARK Solutions: nuestra misión, visión y el equipo detrás del desarrollo de páginas web, sistemas y aplicaciones móviles a medida.",
    images: [
      {
        url: "/assets/img/image-corp.avif",
        alt: "Equipo de ADARK Solutions",
      },
    ],
  },
};

const AboutUs = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar} aria-label="Navegación principal">
          <Link href="/" className={styles.logoLink} aria-label="ADARK Solutions, inicio">
            <Image
              src="/assets/img/logo-adark.png"
              alt="ADARK Solutions"
              width={248}
              height={46}
              priority
              className={styles.logo}
            />
          </Link>
        </nav>
      </header>
      <main>
        <WhoWeAreScreen showMoreInfo={false} />
        <AboutMissionScreen />
        <HowWeWorkScreen />
      </main>
      <FooterScreen />
    </>
  );
};

export default AboutUs;
