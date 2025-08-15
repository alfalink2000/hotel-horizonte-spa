import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Rooms from "./components/Rooms/Rooms";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import "./global.css";
function App() {
  return (
    <div className="font-sans antialiased text-gray-800 overflow-x-hidden">
      <Header />
      <Hero />
      <Rooms />
      <Services />
      <Gallery />
      <Location />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
