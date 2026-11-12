import React from "react";
import Image from "next/image";
import styles from "./project-card.module.css";

export type ProjectCardProps = {
  title: string;
  image: string;
  imageAlt: string;
  color: "mint" | "pink" | "purple";
  category: "web" | "system" | "mobile";
  href: string;
};

const CATEGORY_LABELS = {
  web: "Desarrollo Web",
  system: "Sistema Web",
  mobile: "Aplicación Móvil",
} as const;

const ProjectCard = ({ title, image, imageAlt, color, category, href }: ProjectCardProps) => (
  <article className={styles.card}>
    <div className={`${styles.illustration} ${styles[color]}`}>
      <Image
        className={styles.projectImage}
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 720px) 100vw, (max-width: 1000px) 33vw, 30vw"
      />
    </div>

    <h3 className={styles.title}>{title}</h3>

    <div className={styles.category}>
      {category === "web" && (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 8h18M6 6h.01M9 6h.01M8 22h8m-4-3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
      {category === "system" && (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="4" y="14" width="16" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 6.5h.01M7 17.5h.01M10 6.5h7M10 17.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
      {category === "mobile" && (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 5h4m-2 13.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
      <span>{CATEGORY_LABELS[category]}</span>
    </div>

    <a className={styles.button} href={href}>
      Ver más
    </a>
  </article>
);

export default ProjectCard;
