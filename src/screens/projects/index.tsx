import React from "react";
import { Carousel, ProjectCard } from "@/components";
import styles from "./projects.module.css";

const PROJECTS = [
  {
    id: "integral",
    title: "Landing Page Corporativa",
    color: "mint" as const,
    category: "web" as const,
    image: "/assets/img/mockup-landing.jpg",
    imageAlt: "Vista previa del proyecto Inglés Integral",
    href: "#contacto",
  },
  {
    id: "business",
    title: "Sistema de Gestión Empresarial",
    color: "pink" as const,
    category: "system" as const,
    image: "/assets/img/mockup-system.jpg",
    imageAlt: "Vista previa del proyecto Inglés para corporativos",
    href: "#contacto",
  },
  {
    id: "goals",
    title: "Aplicación Móvil Financiera",
    color: "purple" as const,
    category: "mobile" as const,
    image: "/assets/img/mockup-mobile.jpg",
    imageAlt: "Vista previa del proyecto Inglés por objetivos",
    href: "#contacto",
  },
];

const ProjectsScreen = () => (
  <section className={styles.section} id="proyectos" aria-labelledby="projects-title">
    <div className={styles.sectionHeader}>
      <span className={styles.dot} aria-hidden="true" />
      <h2 className={styles.sectionTitle} id="projects-title">
        Portafolio de proyectos
      </h2>
    </div>

    <Carousel label="Proyectos">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </Carousel>
  </section>
);

export default ProjectsScreen;
