import "./navbar.css";
export default function NavBar() {
  return (
    <div className="container">
      <div className="topInfo"> 
      <img className="logo" src="https://i.imgur.com/mMNUC5g.png" alt="logo" />
      <h2> llamenos al 3110000000</h2>
      </div>
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
