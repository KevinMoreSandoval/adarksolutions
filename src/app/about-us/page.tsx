import Image from "next/image";
import Link from "next/link";
import {
  AboutMissionScreen,
  FooterScreen,
  HowWeWorkScreen,
  WhoWeAreScreen,
} from "@/screens";
import styles from "./about-us.module.css";

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
