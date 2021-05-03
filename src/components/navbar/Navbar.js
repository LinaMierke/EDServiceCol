import "./navbar.css";
export default function NavBar() {
  return (
    <div className="navigation-bar">
      <div className="container">
        <img src="https://i.imgur.com/mMNUC5g.png" alt="logo" />
        <ul className="list">
          <li> Inicio</li>
          <li> Nosotros</li>
          <li> Servicios</li>
          <li> Contáctenos</li>
        </ul>
      </div>
    </div>
  );
}
