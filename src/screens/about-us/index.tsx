import Image from "next/image";
import React from "react";
import styles from "./about-us.module.css";

const AboutUsScreen = () => {
  return (
    <section className={styles.section} id="nosotros" aria-labelledby="about-title">
      <div className={styles.container}>
        <div className={styles.feature}>
          <Image
            src="/assets/img/image-corp.avif"
            alt="Equipo trabajando en una oficina con vista a la ciudad"
            fill
            sizes="(max-width: 700px) 100vw, 82vw"
            className={styles.image}
          />
          <div className={styles.imageShade} aria-hidden="true" />
          <div className={styles.intro}>
            <h2 id="about-title" className={styles.title}>ADARK Solutions</h2>
            <p>
              Convertimos la complejidad de los negocios en soluciones digitales
              simples, accesibles y funcionales. Trabajamos de la mano con cada
              cliente para comprender sus necesidades y transformar sus ideas
              en soluciones tecnológicas.
            </p>
          </div>
        </div>

        <div className={styles.details}>
          <a className={styles.button} href="#contacto">
            <span>Más información</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h15M13 5l7 7-7 7" />
            </svg>
          </a>
          <p>
            Creemos que cada proyecto comienza por entender el negocio. Por eso,
            priorizamos la cercanía, la transparencia y la planificación para
            construir soluciones que faciliten la gestión y acompañen el
            crecimiento de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsScreen;
