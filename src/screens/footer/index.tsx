import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";

const FOOTER_LINKS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Quiénes somos", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

const FooterScreen = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink} aria-label="ADARK Solutions, inicio">
            <Image
              src="/assets/img/logo-dark.png"
              alt="ADARK Solutions"
              width={360}
              height={67}
              className={styles.logo}
            />
          </Link>
          <p>
            Soluciones digitales simples, accesibles y funcionales para hacer
            crecer tu negocio.
          </p>
        </div>

        <nav className={styles.navigation} aria-label="Navegación del pie de página">
          <h2 className={styles.heading}>Explora</h2>
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} ADARK Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterScreen;
