import styles from "./Services.module.css";

const ServiceItem = ({ service }) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.serviceCard}>
        <div className={styles.serviceIcon}>{service.icon}</div>
        <h3 className={styles.serviceName}>{service.name}</h3>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
