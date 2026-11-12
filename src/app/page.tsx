import { DSANavbar } from "@/components";
import {
  AboutUsScreen,
  ContactScreen,
  FooterScreen,
  HeroScreen,
  ProjectsScreen,
  ServicesScreen,
} from "@/screens";
import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.pageContainer}>
      {/* ── Círculo decorativo 720x720 debajo del navbar (solo 1/4 visible) ── */}
      <div className={styles.decorativeCircle} aria-hidden="true" />

      <DSANavbar />
      <HeroScreen />
      <ServicesScreen />
      <ProjectsScreen />
      <AboutUsScreen />
      <ContactScreen />
      <FooterScreen />
    </div>
  );
};

export default page;
