import type { JSX } from "react";
import { Link } from "react-router-dom";

interface Props {
  titulo: string;
  modoOscuro: boolean;
  cambiarTema: () => void;
  abrirSidebar: () => void;
}

function Navbar({ titulo, modoOscuro, cambiarTema, abrirSidebar }: Props): JSX.Element {
  return (
    <nav className="navbar">
      {/* Lado izquierdo: Botón hamburguesa + Logo e imagen */}
      <div className="nav-izquierda">
        <button
          type="button"
          className="btn-hamburguesa"
          onClick={abrirSidebar}
          aria-label="Abrir menú lateral"
        >
          ☰
        </button>

        <Link to="/" className="logo-contenedor">
          <img src="/logo.jpg" alt="Logo La Vaca Loca" className="logo-img" />
          <span className="logo">{titulo}</span>
        </Link>
      </div>


      <div className="nav-derecha">
        <div className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/pacientes">Pacientes</Link>
          <Link to="/reportes">Reportes</Link>
          <Link to="/configuracion">Configuración</Link>
          <Link to="/creditos">Créditos</Link>
        </div>

        <button
          type="button"
          className="btn-tema"
          onClick={cambiarTema}
          title="Alternar modo claro / oscuro"
        >
          {modoOscuro ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;