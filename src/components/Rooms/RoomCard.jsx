import styles from "./Rooms.module.css";

const RoomCard = ({ room, selectedRoom, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`${styles.roomCard} ${
        selectedRoom === room.id ? styles.selected : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img src={room.img} alt={room.type} className={styles.roomImage} />
        <div className={styles.priceTag}>{room.price}</div>
        <div
          className={`${styles.overlay} ${
            selectedRoom === room.id ? styles.visible : ""
          }`}
        >
          <button className={styles.bookButton}>
            <span>Reservar Ahora</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.roomInfo}>
        <h3 className={styles.roomType}>{room.type}</h3>
        <p className={styles.roomCapacity}>Capacidad: {room.capacity}</p>
        <ul className={styles.roomFeatures}>
          {room.features.map((feature, i) => (
            <li key={i} className={styles.featureItem}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#E8C07D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomCard;
