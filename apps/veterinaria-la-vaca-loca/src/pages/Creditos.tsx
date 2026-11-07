
import type { JSX } from "react";
import creditos from "../data/creditosData";

function Creditos(): JSX.Element {
  return (
    <section className="container creditos-pagina">
      <header className="creditos-encabezado">
        <p className="creditos-etiqueta">INFORMACIÓN DEL PROYECTO</p>
        <h2>Créditos</h2>
        <p>Conocé a la persona responsable del desarrollo de este sitio.</p>
      </header>

      <div className="creditos-lista">
        {creditos.map((credito) => (
          <article className="creditos-tarjeta" key={credito.id}>
            <img
              className="creditos-imagen"
              src={credito.imagen}
              alt={`Imagen representativa de ${credito.nombre}`}
            />

            <div className="creditos-informacion">
              <span className="creditos-rol">{credito.rol}</span>
              <h3>{credito.nombre}</h3>
              <p>{credito.descripcion}</p>

              <dl className="creditos-detalles">
                <div>
                  <dt>Proyecto</dt>
                  <dd>{credito.proyecto}</dd>
                </div>
                <div>
                  <dt>Asignatura</dt>
                  <dd>{credito.asignatura}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Creditos;
