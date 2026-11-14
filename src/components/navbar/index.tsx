"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import styles from "./navbar.module.css";

const NAV_LINKS = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Quienes somos", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/assets/img/logo-adark.png"
            alt="ADARK Solutions"
            width={248}
            height={46}
            priority
            style={{ width: "auto", height: "46px" }}
            className={styles.logo}
          />
        </Link>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.ctaWrapper}>
          <Button
            label="Cotiza Tu Proyecto"
            variant="solid"
            size="m"
            color="#212121"
            onClick={() => {
              window.location.href = "/#contacto";
            }}
            className={styles.ctaButton}
          />
        </div>
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barHidden : styles.bar} />
          <span className={menuOpen ? styles.barOpen2 : styles.bar} />
        </button>
      </nav>


      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            label="Cotiza Tu Proyecto"
            variant="solid"
            size="m"
            color="#212121"
            className={`${styles.mobileCta} ${styles.ctaButton}`}
            onClick={() => {
              setMenuOpen(false);
              window.location.href = "/#contacto";
            }}
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
