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

const App = () => {
  return (
    <div className={styles.pageContainer}>
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

export default App;
