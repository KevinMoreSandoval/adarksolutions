import Image from "next/image";
import { Code2, Compass, Rocket, Search } from "lucide-react";
import styles from "./how-we-work.module.css";

const steps = [
  {
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, tus objetivos y los retos que quieres resolver con tecnología.",
    icon: Search,
  },
  {
    title: "Diseño",
    description:
      "Definimos la arquitectura, la experiencia de usuario y el alcance antes de empezar a construir.",
    icon: Compass,
  },
  {
    title: "Desarrollo",
    description:
      "Construimos tu solución de forma iterativa, con entregas frecuentes para que veas el avance.",
    icon: Code2,
  },
  {
    title: "Entrega y soporte",
    description:
      "Lanzamos el producto y te acompañamos con soporte continuo para que siga creciendo.",
    icon: Rocket,
  },
];

const HowWeWorkScreen = () => (
  <section className={styles.section} aria-labelledby="how-we-work-title">
    <div className={styles.container}>
      <header className={styles.heading}>
        <p className={styles.eyebrow}>Nuestro proceso</p>
        <h2 id="how-we-work-title">Cómo trabajamos</h2>
        <p className={styles.subtitle}>Un proceso claro, de principio a fin.</p>
      </header>

      <div className={styles.content}>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span className={`${styles.icon} ${styles[`icon${index + 1}`]}`} aria-hidden="true">
                <step.icon size={30} strokeWidth={2} />
              </span>
              <div className={styles.stepText}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.imageWrap}>
          <Image
            src="/assets/img/personal-adark.png"
            alt="Equipo de ADARK Solutions trabajando en un proyecto"
            fill
            sizes="(max-width: 900px) 40vw, 520px"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWorkScreen;
