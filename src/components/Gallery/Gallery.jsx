import styles from "./Gallery.module.css";

const galleryItems = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Suite Presidencial",
    category: "Habitaciones",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Spa de Lujo",
    category: "Servicios",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Restaurante Gourmet",
    category: "Gastronomía",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Piscina Infinity",
    category: "Servicios",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1566669437685-2c5a585aded5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Bar en Azotea",
    category: "Gastronomía",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Sala de Eventos",
    category: "Servicios",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Vistas Panorámicas",
    category: "Habitaciones",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1566669437685-2c5a585aded5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    label: "Gimnasio Premium",
    category: "Servicios",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionSubtitle}>Explora Nuestro Hotel</h3>
          <h2 className={styles.sectionTitle}>
            Descubre <span className={styles.highlight}>Horizonte</span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Un recorrido visual por nuestras instalaciones y servicios
            exclusivos
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={styles.galleryItem}
              style={{ backgroundImage: `url(${item.img})` }}
              aria-label={item.label}
            >
              <div className={styles.itemOverlay}>
                <div className={styles.itemContent}>
                  <span className={styles.itemCategory}>{item.category}</span>
                  <h3 className={styles.itemLabel}>{item.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
