"use client";

import React, { Children, useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";

type CarouselProps = {
  children: React.ReactNode;
  label: string;
};

const Carousel = ({ children, label }: CarouselProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const items = Children.toArray(children);
  const maxIndex = Math.max(0, items.length - visibleCount);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateVisibleCount = () => {
      const width = viewport.clientWidth;
      setVisibleCount(width > 1000 ? 3 : width > 640 ? 2 : 1);
    };

    const observer = new ResizeObserver(updateVisibleCount);
    observer.observe(viewport);
    updateVisibleCount();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const track = viewportRef.current?.querySelector<HTMLElement>("[data-carousel-track]");
    const firstSlide = track?.firstElementChild as HTMLElement | null;
    const activeSlide = track?.children.item(activeIndex) as HTMLElement | null;
    if (track && firstSlide && activeSlide) {
      track.style.transform = `translateX(-${activeSlide.getBoundingClientRect().left - firstSlide.getBoundingClientRect().left}px)`;
    }
  }, [activeIndex, visibleCount]);

  const goTo = (index: number) => setActiveIndex(Math.max(0, Math.min(index, maxIndex)));

  return (
    <div className={styles.carousel} aria-label={label}>
      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.track} data-carousel-track style={{ "--visible-count": visibleCount } as React.CSSProperties}>
          {items.map((item, index) => (
            <div className={styles.slide} key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {activeIndex > 0 && (
        <button
          className={`${styles.arrow} ${styles.previous}`}
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Ver anteriores"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 4-8 8 8 8" /></svg>
        </button>
      )}
      {activeIndex < maxIndex && (
        <button
          className={`${styles.arrow} ${styles.next}`}
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Ver siguientes"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" /></svg>
        </button>
      )}

      <div className={styles.pagination} aria-label="Índice del carrusel">
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Ir al proyecto ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              disabled={index > maxIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
