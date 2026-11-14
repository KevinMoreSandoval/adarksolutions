import { DSANavbar } from "@/components";
import {
  WhoWeAreScreen,
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
      <DSANavbar />
      <HeroScreen />
      <ServicesScreen />
      <ProjectsScreen />
      <WhoWeAreScreen />
      <ContactScreen />
      <FooterScreen />
    </div>
  );
};

export default App;
