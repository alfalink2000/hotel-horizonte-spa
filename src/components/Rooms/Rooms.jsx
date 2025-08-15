import { useState } from "react";
import styles from "./Rooms.module.css";
import RoomCard from "./RoomCard";

const rooms = [
  {
    id: 1,
    type: "Suite Ejecutiva",
    price: "$180/noche",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    capacity: "2 personas",
    features: [
      "Cama king size",
      "Vista panorámica",
      "Jacuzzi privado",
      "Wi-Fi Premium",
      "Desayuno incluido",
      "Servicio a la habitación",
    ],
  },
  {
    id: 2,
    type: "Habitación Deluxe",
    price: "$220/noche",
    img: "https://images.unsplash.com/photo-1566669437685-2c5a585aded5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    capacity: "2 personas",
    features: [
      "Cama queen size",
      "Balcón privado",
      "Minibar gourmet",
      "TV pantalla plana 4K",
      "Cafetera Nespresso",
      "Baño de mármol",
    ],
  },
  {
    id: 3,
    type: "Ático Premium",
    price: "$350/noche",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    capacity: "4 personas",
    features: [
      "2 dormitorios suite",
      "Sala de estar privada",
      "Terraza con jacuzzi",
      "Servicio de mayordomo",
      "Vistas panorámicas",
      "Check-in privado",
    ],
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="rooms" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionSubtitle}>Alojamiento Exclusivo</h2>
          <h3 className={styles.sectionTitle}>
            Nuestras <span className={styles.highlight}>Habitaciones</span> &
            Suites
          </h3>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Cada espacio ha sido diseñado para ofrecer el máximo confort y
            elegancia, combinando diseño contemporáneo con comodidades de lujo.
          </p>
        </div>

        <div className={styles.roomsGrid}>
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              selectedRoom={selectedRoom}
              onMouseEnter={() => setSelectedRoom(room.id)}
              onMouseLeave={() => setSelectedRoom(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
