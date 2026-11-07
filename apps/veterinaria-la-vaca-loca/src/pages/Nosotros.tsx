import type { JSX } from "react";
import Card from "../components/Card";
import empresas from "../data/empresaData";
import veterinarios from "../data/veterinarioData";

function Nosotros(): JSX.Element {
  return (
    <section className="container">
      <h2>Sobre Nuestra Clínica</h2>
      <p>Conoce la historia, misión y vocación de servicio de La Vaca Loca.</p>

      <div className="cards">
        {empresas.map((empresa) => (
          <Card
            key={empresa.id}
            titulo={empresa.nombre}
            detalle={empresa.detalle}
            extra={empresa.extra}
            activo={empresa.activo}
            imagen={empresa.imagen}
          />
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>Equipo Médico Veterinario</h2>
      <p>Profesionales capacitados con pasión por la salud animal.</p>

      <div className="cards">
        {veterinarios.map((vet) => (
          <Card
            key={vet.id}
            titulo={vet.nombre}
            subtitulo={`Especialidad: ${vet.especialidad}`}
            detalle={`Contacto: ${vet.telefono}`}
            extra={`Correo: ${vet.email}`}
            activo={vet.activo}
            imagen={vet.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Nosotros;
