import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.backgroundImage} ${
              index === currentImageIndex ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className={styles.overlay}></div>
        <div className={styles.darkGradient}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.contentWrapper}>
          <p className={styles.subtitle}>
            <span className={styles.subtitleLine}>
              Nueva apertura en el corazón de la ciudad
            </span>
          </p>
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>Horizonte</span>
            <span className={styles.titleLine2}>Urban Loft</span>
          </h1>
          <div className={styles.separator}></div>
          <p className={styles.description}>
            Donde el lujo moderno se encuentra con la comodidad urbana. Vive la
            experiencia desde la primera noche.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              <span>Ver Habitaciones</span>
            </button>
            <button className={styles.secondaryButton}>
              <span>Conocer Más</span>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Desplázate</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
