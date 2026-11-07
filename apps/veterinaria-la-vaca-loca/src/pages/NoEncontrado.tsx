import type { JSX } from "react";
import { Link } from "react-router-dom";

function NoEncontrado(): JSX.Element {
  return (
    <section className="container error-404">
      <h2>404 - Página no encontrada</h2>
      <p>
        La dirección ingresada no existe en la aplicación o el enlace es incorrecto.
      </p>
      <Link to="/" className="btn-volver">
        Volver al Inicio
      </Link>
    </section>
  );
}

export default NoEncontrado;
