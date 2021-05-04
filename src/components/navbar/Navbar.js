import "./navbar.css";
export default function NavBar() {
  return (
    <div className="container">
      
      <img className="logo" src="https://i.imgur.com/mMNUC5g.png" alt="logo" />
      <div className="main">
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
