import styles from "./Services.module.css";
import ServiceItem from "./ServiceItem";

const services = [
  {
    name: "Desayuno Gourmet",
    description:
      "Buffet con productos locales y opciones internacionales preparadas por nuestro chef",
    icon: "🥐",
  },
  {
    name: "Spa & Bienestar",
    description:
      "Tratamientos relajantes y rejuvenecedores con productos naturales",
    icon: "🧖‍♀️",
  },
  {
    name: "Piscina Infinity",
    description:
      "Disfruta de nuestras piscinas con vistas panorámicas y servicio de bar",
    icon: "🌊",
  },
  {
    name: "Gimnasio Premium",
    description: "Equipamiento de última generación disponible las 24 horas",
    icon: "💪",
  },
  {
    name: "Valet Parking",
    description: "Estacionamiento seguro con servicio de valet las 24 horas",
    icon: "🚘",
  },
  {
    name: "Concierge",
    description:
      "Asistencia personalizada para reservas y experiencias locales",
    icon: "🛎️",
  },
  {
    name: "Bar en Azotea",
    description: "Cócteles artesanales con vistas espectaculares al atardecer",
    icon: "🍹",
  },
  {
    name: "Business Center",
    description:
      "Espacio de trabajo con todas las comodidades para viajeros corporativos",
    icon: "💼",
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionSubtitle}>Servicios Premium</h3>
          <h2 className={styles.sectionTitle}>
            Experiencias <span className={styles.highlight}>Exclusivas</span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Descubre nuestros servicios diseñados para hacer de tu estadía una
            experiencia memorable
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <ServiceItem key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
