import type { JSX } from "react";
import { Link } from "react-router-dom";

interface Props {
  abierto: boolean;
  cerrar: () => void;
}

function Sidebar({ abierto, cerrar }: Props): JSX.Element {
  return (
    <aside className={`sidebar ${abierto ? "activo" : ""}`}>
      <div className="sidebar-cabecera">
        <h3>Menú de Navegación</h3>
        <button type="button" className="btn-cerrar" onClick={cerrar} aria-label="Cerrar menú">
          ✕
        </button>
      </div>

      <nav className="sidebar-menu">
        <Link to="/" onClick={cerrar}>Inicio</Link>
        <Link to="/nosotros" onClick={cerrar}>Nosotros</Link>
        <Link to="/pacientes" onClick={cerrar}>Pacientes</Link>
        <Link to="/reportes" onClick={cerrar}>Reportes</Link>
        <Link to="/configuracion" onClick={cerrar}>Configuración</Link> 
        <Link to="/creditos" onClick={cerrar}>Créditos</Link>
        <Link to="/ruta-inexistente" onClick={cerrar} className="link-error">
          Probar Error 404
        </Link>
      </nav>

      <div className="sidebar-pie">
        <p>Veterinaria La Vaca Loca</p>
        <small>Atención Médica Integral</small>
      </div>
    </aside>
  );
}

export default Sidebar;
