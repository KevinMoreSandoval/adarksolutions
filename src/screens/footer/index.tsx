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

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <path d="M5 3.5A1.5 1.5 0 1 1 2 3.5a1.5 1.5 0 0 1 3 0ZM2.5 8h3v13h-3zM9 8h2.9v1.8h.1A3.2 3.2 0 0 1 15 7.7c3.2 0 3.8 2.1 3.8 4.9V21h-3v-7.4c0-1.8 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9z" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle className={styles.socialIconDot} cx="17.5" cy="6.5" r=".75" /></>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z" />,
  },
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

        <nav className={styles.socialColumn} aria-label="Redes sociales">
          <h2 className={styles.heading}>Encuéntranos en</h2>
          <ul className={styles.socialList}>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">{social.icon}</svg>
                  <span>{social.label}</span>
                </a>
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
