import React from "react";
import styles from "./whatsapp-float.module.css";

const WHATSAPP_NUMBER = "51917397169";
const WHATSAPP_MESSAGE = encodeURIComponent("Hola, quisiera hacer una consulta.");

const WhatsAppFloat = () => (
  <a
    className={styles.widget}
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Escríbenos por WhatsApp"
  >
    <span className={styles.label}>
      <span className={styles.defaultText}>Preguntas aquí</span>
      <span className={styles.hoverText}>Haga click</span>
    </span>
    <span className={styles.button} aria-hidden="true">
      <svg viewBox="0 0 32 32">
        <path d="M16 3.2A12.5 12.5 0 0 0 5.3 22.2L3.7 28l6-1.6A12.5 12.5 0 1 0 16 3.2Zm0 22.7a10.1 10.1 0 0 1-5.1-1.4l-.4-.2-3.6 1 .9-3.5-.2-.4A10.2 10.2 0 1 1 16 25.9Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" />
      </svg>
    </span>
  </a>
);

export default WhatsAppFloat;
