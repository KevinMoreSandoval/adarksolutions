import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#1f2937",
        fontFamily: "var(--font-poppins), sans-serif",
      }}
    >
      <Link href="/" aria-label="ADARK Solutions, inicio" style={{ marginBottom: "2rem" }}>
        <Image
          src="/assets/img/logo-dark.png"
          alt="ADARK Solutions"
          width={248}
          height={46}
          priority
          style={{ width: "auto", height: "46px" }}
        />
      </Link>
      <span
        style={{
          fontSize: "5rem",
          fontWeight: 700,
          color: "#4F46E5",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        404
      </span>
      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 600,
          marginBottom: "1rem",
          color: "#111827",
        }}
      >
        Página no encontrada
      </h1>
      <p
        style={{
          fontSize: "1rem",
          maxWidth: "480px",
          color: "#6b7280",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        La página que buscas no existe, ha sido movida o la dirección ingresada no es correcta.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#212121",
          color: "#ffffff",
          borderRadius: "9999px",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "0.95rem",
          transition: "background-color 0.2s ease",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
