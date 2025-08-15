import styles from "./Header.module.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>Horizonte</span>
          <span className={styles.logoSub}>Hotel & Spa</span>
        </div>

        <nav
          className={`${styles.nav} ${
            mobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <a href="#rooms" className={styles.navLink}>
            Habitaciones
          </a>
          <a href="#services" className={styles.navLink}>
            Servicios
          </a>
          <a href="#gallery" className={styles.navLink}>
            Galería
          </a>
          <a href="#contact" className={styles.navLink}>
            Contacto
          </a>
          <button className={`${styles.ctaButton} ${styles.mobileCta}`}>
            Reservar Ahora
          </button>
        </nav>

        <button className={styles.ctaButton}>Reservar Ahora</button>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={mobileMenuOpen ? styles.open : ""}></span>
          <span className={mobileMenuOpen ? styles.open : ""}></span>
          <span className={mobileMenuOpen ? styles.open : ""}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
