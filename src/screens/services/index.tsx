"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import styles from "./services.module.css";

const SERVICES = [
  {
    id: 0,
    label: "Desarrollo web",
    description:
      "Creamos sitios web modernos, rápidos y optimizados que reflejan tu marca y convierten visitantes en clientes.",
    image: "/assets/img/landing-page.png",
    alt: "Desarrollo web - Landing page",
  },
  {
    id: 1,
    label: "Desarrollo de sistemas a medida",
    description:
      "Diseñamos sistemas personalizados que automatizan y optimizan los procesos internos de tu empresa.",
    image: "/assets/img/mockup-system.png",
    alt: "Desarrollo de sistemas a medida",
  },
  {
    id: 2,
    label: "Desarrollo de aplicaciones móviles",
    description:
      "Desarrollamos apps para iOS y Android con experiencias nativas y fluidas que tus usuarios amarán.",
    image: "/assets/img/app-mobile.png",
    alt: "Desarrollo de aplicaciones móviles",
  },
  {
    id: 3,
    label: "Diseño UI/UX",
    description:
      "Creamos interfaces intuitivas y visualmente atractivas centradas en la experiencia del usuario.",
    image: "/assets/img/design-ui-ux.png",
    alt: "Diseño UI/UX",
  },
  {
    id: 4,
    label: "Mantenimiento y soporte",
    description:
      "Brindamos soporte continuo, actualizaciones y mantenimiento para que tu solución siempre esté al máximo.",
    image: "/assets/img/support.png",
    alt: "Mantenimiento y soporte",
  },
];

const AUTO_SLIDE_INTERVAL = 6000;
const MANUAL_PAUSE_EXTRA = 6000;

const ServicesScreen = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastAdvanceRef = useRef(0);
  const pauseUntilRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const switchTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 250);
  }, [animating]);

  const goTo = useCallback((index: number) => {
    if (index === active || animating) return;
    const now = Date.now();
    lastAdvanceRef.current = now;
    pauseUntilRef.current = now + MANUAL_PAUSE_EXTRA;
    switchTo(index);
  }, [active, animating, switchTo]);

  useEffect(() => {
    if (!isVisible) return;

    lastAdvanceRef.current = Date.now();

    const tick = setInterval(() => {
      const now = Date.now();
      if (
        now - lastAdvanceRef.current >= AUTO_SLIDE_INTERVAL &&
        now >= pauseUntilRef.current
      ) {
        lastAdvanceRef.current = now;
        setAnimating(true);
        setTimeout(() => {
          setActive((prev) => (prev + 1) % SERVICES.length);
          setAnimating(false);
        }, 250);
      }
    }, 500);

    return () => clearInterval(tick);
  }, [isVisible]);

  return (
    <section className={styles.section} id="servicios" ref={sectionRef}>

      <div className={styles.sectionHeader}>
        <span className={styles.dot} aria-hidden="true" />
        <h2 className={styles.sectionTitle}>Nuestros servicios</h2>
      </div>

      <div className={styles.container}>

        <div className={styles.left}>
          <ul className={styles.serviceList}>
            {SERVICES.map((service) => (
              <li key={service.id}>
                <button
                  className={`${styles.serviceItem} ${active === service.id ? styles.serviceItemActive : ""
                    }`}
                  onClick={() => goTo(service.id)}
                  aria-current={active === service.id ? "true" : undefined}
                >
                  {service.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <div
            className={`${styles.imageWrapper} ${animating ? styles.imageOut : styles.imageIn
              }`}
          >
            <Image
              key={active}
              src={SERVICES[active].image}
              alt={SERVICES[active].alt}
              fill
              className={`${styles.serviceImage} ${active === 4 ? styles.serviceImageSupport : ""
                }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={active === 0}
            />
          </div>

          <p
            className={`${styles.description} ${animating ? styles.descOut : styles.descIn
              }`}
          >
            {SERVICES[active].description}
          </p>
        </div>
      </div>

      <div className={styles.dotsWrapper} role="tablist" aria-label="Servicios">
        {SERVICES.map((service) => (
          <button
            key={service.id}
            role="tab"
            aria-selected={active === service.id}
            aria-label={service.label}
            className={`${styles.dotBtn} ${active === service.id ? styles.dotBtnActive : ""
              }`}
            onClick={() => goTo(service.id)}
          />
        ))}
      </div>

    </section>
  );
};

export default ServicesScreen;
