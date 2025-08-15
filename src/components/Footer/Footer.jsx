import styles from "./Footer.module.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Columna 1 - Información del hotel */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>
              <span className={styles.highlight}>Horizonte</span> Urban Loft
            </h3>
            <p className={styles.footerDescription}>
              Un refugio de lujo en el corazón de la ciudad, donde la elegancia
              moderna se encuentra con la comodidad excepcional.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>Avenida Principal 1234, Distrito Financiero</span>
              </div>
              <div className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>reservas@horizonteurbanloft.com</span>
              </div>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Enlaces Rápidos</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#" className={styles.link}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#rooms" className={styles.link}>
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="#services" className={styles.link}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#gallery" className={styles.link}>
                  Galería
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Legal */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#" className={styles.link}>
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Política de Cancelación
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Newsletter */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Suscríbete para recibir ofertas exclusivas y novedades.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Suscribirse
              </button>
            </form>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Horizonte Urban Loft. Todos los
            derechos reservados.
          </p>
          <div className={styles.paymentMethods}>
            <span className={styles.paymentIcon}>💳</span>
            <span className={styles.paymentIcon}>📱</span>
            <span className={styles.paymentIcon}>💰</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
