import styles from "./loading.module.css";

const Loading = () => (
  <main className={styles.page} aria-busy="true" aria-label="Cargando página">
    <div className={`${styles.block} ${styles.navbar}`} />
    <section className={`${styles.section} ${styles.hero}`}>
      <div className={styles.copy}>
        <div className={`${styles.block} ${styles.kicker}`} />
        <div className={`${styles.block} ${styles.heading}`} />
        <div className={`${styles.block} ${styles.line}`} />
        <div className={`${styles.block} ${styles.lineShort}`} />
        <div className={`${styles.block} ${styles.button}`} />
      </div>
      <div className={`${styles.block} ${styles.heroArt}`} />
    </section>
    <section className={`${styles.section} ${styles.services}`}>
      <div className={`${styles.block} ${styles.sectionHeading}`} />
      <div className={styles.serviceGrid}>
        <div className={`${styles.block} ${styles.serviceArt}`} />
        <div className={styles.copy}>
          <div className={`${styles.block} ${styles.line}`} />
          <div className={`${styles.block} ${styles.lineShort}`} />
          <div className={`${styles.block} ${styles.line}`} />
        </div>
      </div>
    </section>
    <section className={`${styles.section} ${styles.projects}`}>
      <div className={`${styles.block} ${styles.sectionHeading}`} />
      <div className={styles.cards}>
        {[0, 1, 2].map((card) => (
          <div className={styles.card} key={card}>
            <div className={`${styles.block} ${styles.cardImage}`} />
            <div className={`${styles.block} ${styles.line}`} />
            <div className={`${styles.block} ${styles.lineShort}`} />
            <div className={`${styles.block} ${styles.cardButton}`} />
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Loading;
