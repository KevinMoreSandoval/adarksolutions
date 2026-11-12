import styles from "./about-mission.module.css";

const AboutMissionScreen = () => (
  <section className={styles.section} aria-labelledby="mission-section-title">
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Sobre nosotros</p>
        <h2 id="mission-section-title">Tecnología que impulsa tus objetivos</h2>
      </div>

      <div className={styles.items}>
        <article className={styles.item}>
          <h3>
            Misión
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 4c2.1-1.2 4.3-1.3 6-1-0.3 1.7-0.4 3.9-1.6 6l-5.2 5.2-4.4-4.4L14 4Z" />
              <path d="m8.8 9.8-3.5.5-2.1 3.5 5 .3m5.2.1-.5 3.5-3.5 2.1-.3-5M7 17l-2 2" />
            </svg>
          </h3>
          <p>
            Nuestra misión es transformar las necesidades de cada negocio en
            soluciones digitales accesibles y funcionales, acompañando a
            nuestros clientes con tecnología y asesoría cercana para alcanzar
            sus objetivos.
          </p>
        </article>

        <article className={styles.item}>
          <h3>
            Visión
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2.5 12s3.4-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.4 6.5-9.5 6.5S2.5 12 2.5 12Z" />
              <circle cx="12" cy="12" r="2.7" />
            </svg>
          </h3>
          <p>
            Aspiramos a ser un aliado tecnológico de confianza para empresas y
            organizaciones, reconocido por crear soluciones de calidad que
            simplifican la gestión, fortalecen sus operaciones e impulsan su
            crecimiento.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default AboutMissionScreen;
