import type { JSX } from "react";
import Card from "../components/Card";
import reportes from "../data/reportesData";

function Reportes(): JSX.Element {
  return (
    <section className="container">
      <h2>Reportes y Citas</h2>
      <p>Historial de atenciones médicas y citas programadas.</p>

      <div className="cards">
        {reportes.map((r) => (
          <Card
            key={r.id}
            titulo={r.nombre}
            subtitulo={`Fecha: ${r.fecha}`}
            detalle={r.descripcion}
            activo={r.activo}
          />
        ))}
      </div>
    </section>
  );
}

export default Reportes;