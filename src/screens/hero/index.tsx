"use client";

import React, { useEffect, useRef } from "react";
import { DSAButton, DSAText } from "@/components";
import styles from "./hero.module.css";

const TYPEWRITER_TEXT = "Que impulsa tu negocio.";

const HeroScreen = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typewriterRef.current;
    if (!el) return;

    el.textContent = "";
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        el.textContent += TYPEWRITER_TEXT[i];
        i++;
        if (i >= TYPEWRITER_TEXT.length) {
          clearInterval(interval);

          el.classList.add(styles.cursorDone);
        }
      }, 55); 
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.heroSection} id="inicio">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.titleWrapper}>
            <DSAText variant="title" as="h1" className={styles.titlePrimary}>
              Tecnología
            </DSAText>

            <DSAText
              variant="subtitle"
              as="h2"
              className={styles.titleSecondary}
            >
              <span ref={typewriterRef} className={styles.typewriter} />
            </DSAText>
          </div>

          <DSAText variant="paragraph" className={styles.description}>
            Creamos páginas web, aplicaciones y sistemas que convierten tus
            procesos del día a día en soluciones simples.
          </DSAText>

          <div className={styles.buttonGroup}>
            <DSAButton
              label="Cuéntanos Tu Proyecto"
              variant="solid"
              size="xl"
              onClick={() => {
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={styles.primaryBtn}
            />
            <DSAButton
              label="Explorar Servicios"
              variant="outline"
              size="xl"
              color="var(--color-primary, #4F46E5)"
              onClick={() => {
                document
                  .querySelector("#servicios")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={styles.secondaryBtn}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScreen;
