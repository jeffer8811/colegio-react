import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Colegio XYZ</div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={open ? "nav active" : "nav"}>
        <ul className="menu">

          <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link></li>

          {/* DROPDOWN */}
<li className="dropdown">
  {/* Ahora "Niveles" es un enlace real */}
  <Link to="/niveles" className="dropdown-btn">
    Niveles <span className="arrow">+</span>
  </Link>

  <div className="dropdown-content">
    <Link to="/inicial">🟠 Inicial</Link>
    <Link to="/primaria">🟢 Primaria</Link>
    <Link to="/secundaria">🔵 Secundaria</Link>
  </div>
</li>

          <li className="matricula">
            <Link to="/matricula" onClick={() => setOpen(false)}>
              Matrículate ahora +
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;