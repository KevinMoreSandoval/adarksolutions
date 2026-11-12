import Image from "next/image";
import React from "react";
import styles from "./contact.module.css";

const ContactScreen = () => {
  return (
    <section className={styles.section} id="contacto" aria-labelledby="contact-title">
      <div className={styles.banner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>— Hablemos</p>
          <h2 className={styles.title} id="contact-title">
            Impulsa tu proyecto con ADARK
          </h2>
          <p className={styles.description}>
            Cuéntanos tu idea. Nuestro equipo está listo para ayudarte a llevarla
            al siguiente nivel con soluciones digitales a tu medida.
          </p>
          <a
            className={styles.button}
            href="https://wa.me/51917397169?text=Hola%2C%20quisiera%20hacer%20una%20consulta."
            target="_blank"
            rel="noreferrer"
          >
            Empecemos ahora
          </a>
        </div>

        <div className={styles.artwork} aria-hidden="true">
          <Image
            className={styles.rocket}
            src="/assets/img/rocket-adark.png"
            alt=""
            width={600}
            height={600}
            sizes="(max-width: 700px) 70vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactScreen;
