import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneAlt);

export default function NavBar() {
  return (
    <div className="container">
      <div className="topInfo">
        <img
          className="logo"
          src="https://i.imgur.com/EEVrXYU.png"
          alt="logo"
        />

        <div className="phone">
          <h2> llamenos al 3110000000</h2>
          <FontAwesomeIcon icon={["fa", "phone-alt"]} size="2x" />
        </div>
      </div>
      <div className="main">
        <ul className="list">
          <a href="#"> Inicio</a>
          <a href="#"> Nosotros</a>
          <a href="#"> Servicios</a>
          <a href="#"> Contáctenos</a>
        </ul>
      </div>
    </div>
  );
}
