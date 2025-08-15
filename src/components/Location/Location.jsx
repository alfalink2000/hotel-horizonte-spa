import styles from "./Location.module.css";
import {
  FaSubway,
  FaBus,
  FaShoppingBag,
  FaUtensils,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Location = () => {
  return (
    <section id="location" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionSubtitle}>Conectividad Excepcional</h3>
          <h2 className={styles.sectionTitle}>
            Ubicación <span className={styles.highlight}>Privilegiada</span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            En el corazón del distrito financiero y cultural, a pasos de los
            principales atractivos de la ciudad
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.511414593793!2d-70.6500007!3d-33.4377968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a6e45ecc5f%3A0x847a211f7b6e9c9b!2sPlaza%20de%20Armas!5e0!3m2!1sen!2scl!4v1620000000000!5m2!1sen!2scl"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación del hotel en mapa"
            ></iframe>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.address}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Avenida Principal 1234, Distrito Financiero</span>
            </div>

            <div className={styles.amenitiesGrid}>
              <div className={styles.amenityItem}>
                <FaSubway className={styles.amenityIcon} />
                <div>
                  <h4>Estación Metro</h4>
                  <p>5 minutos caminando</p>
                </div>
              </div>

              <div className={styles.amenityItem}>
                <FaBus className={styles.amenityIcon} />
                <div>
                  <h4>Parada de Bus</h4>
                  <p>2 minutos caminando</p>
                </div>
              </div>

              <div className={styles.amenityItem}>
                <FaShoppingBag className={styles.amenityIcon} />
                <div>
                  <h4>Centro Comercial</h4>
                  <p>8 minutos caminando</p>
                </div>
              </div>

              <div className={styles.amenityItem}>
                <FaUtensils className={styles.amenityIcon} />
                <div>
                  <h4>Zona Gastronómica</h4>
                  <p>3 minutos caminando</p>
                </div>
              </div>
            </div>

            <button className={styles.directionsButton}>
              Obtener indicaciones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
