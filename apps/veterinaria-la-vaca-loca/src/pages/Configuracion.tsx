import type { JSX } from "react";
import Card from "../components/Card";
import configuraciones from "../data/configuracionData";

function Configuracion(): JSX.Element {
  return (
    <section className="container">
      <h2>Parámetros del Sistema</h2>
      <p>Configuraciones operativas y administrativas de la plataforma.</p>

      <div className="cards">
        {configuraciones.map((conf) => (
          <Card
            key={conf.id}
            titulo={conf.nombre}
            detalle={conf.detalle}
            extra={conf.extra}
            activo={conf.activo}
          />
        ))}
      </div>
    </section>
  );
}

export default Configuracion;