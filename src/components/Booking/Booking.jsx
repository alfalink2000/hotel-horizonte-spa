import { useState } from "react";
import styles from "./Booking.module.css";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaBed,
  FaPaperPlane,
} from "react-icons/fa";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Habitación Ejecutiva",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Datos enviados:", formData);
    alert(
      "Solicitud de reserva enviada con éxito. Nos pondremos en contacto contigo pronto."
    );
  };

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionSubtitle}>Reserva Directa</h3>
          <h2 className={styles.sectionTitle}>
            Garantiza tu <span className={styles.highlight}>Experiencia</span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Completa el formulario y nuestro equipo se pondrá en contacto
            contigo para confirmar tu reserva
          </p>
        </div>

        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                className={styles.inputField}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className={styles.inputField}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <FaCalendarAlt className={styles.inputIcon} />
              <input
                type="date"
                name="checkIn"
                className={styles.inputField}
                value={formData.checkIn}
                onChange={handleChange}
                required
              />
              <label className={styles.inputLabel}>Fecha de entrada</label>
            </div>
            <div className={styles.inputGroup}>
              <FaCalendarAlt className={styles.inputIcon} />
              <input
                type="date"
                name="checkOut"
                className={styles.inputField}
                value={formData.checkOut}
                onChange={handleChange}
                required
              />
              <label className={styles.inputLabel}>Fecha de salida</label>
            </div>
            <div className={styles.inputGroup}>
              <FaBed className={styles.inputIcon} />
              <select
                name="roomType"
                className={styles.inputField}
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="Habitación Ejecutiva">
                  Habitación Ejecutiva
                </option>
                <option value="Habitación Deluxe">Habitación Deluxe</option>
                <option value="Ático Premium">Ático Premium</option>
                <option value="Suite Presidencial">Suite Presidencial</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="specialRequests"
              placeholder="¿Alguna petición especial? (opcional)"
              rows="4"
              className={styles.textareaField}
              value={formData.specialRequests}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            <FaPaperPlane className={styles.buttonIcon} />
            Enviar Solicitud de Reserva
          </button>

          <p className={styles.formNote}>
            Al enviar este formulario, aceptas nuestras políticas de privacidad.
            Te contactaremos en un plazo de 24 horas.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Booking;
