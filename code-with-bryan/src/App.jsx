import Landing from "./components/Landing/Landing";
import Benefits from "./components/Benefits/Benefits";
import Booking from "./components/Booking/Booking";
import { Technologies } from "./components/Technologies/Technologies";
import { Footer } from "./pieces/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Landing></Landing>
      <Benefits></Benefits>
      <Technologies></Technologies>
      <Booking></Booking>
      <Footer></Footer>
    </>
  );
}

export default App;
