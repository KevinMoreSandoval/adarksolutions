import Image from "next/image";
import { DSAText } from "@/components";
import styles from "./hero.module.css";

const HeroScreen = () => (
  <section className={styles.heroSection} id="inicio">
    <div className={styles.heroBackdrop} aria-hidden="true" />
    <div className={styles.container}>
      <div className={styles.textContent}>
        <DSAText variant="title" as="h1" className={styles.title}>
          Desarrollo web y software a medida para tu negocio.
        </DSAText>
        <DSAText variant="paragraph" className={styles.description}>
          Creamos páginas web, aplicaciones y sistemas que convierten tus
          procesos del día a día en soluciones simples.
        </DSAText>
      </div>

      <div className={styles.imageStage}>
        <Image
          src="/assets/img/mockup-hero.png"
          alt="Vista previa de un sitio web diseñado por ADARK Solutions en una laptop"
          width={1462}
          height={1076}
          priority
          className={styles.mockup}
        />
      </div>
    </div>
  </section>
);

export default HeroScreen;
