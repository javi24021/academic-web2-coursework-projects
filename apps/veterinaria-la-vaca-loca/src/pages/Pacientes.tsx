import type { JSX } from "react";
import Card from "../components/Card";
import pacientes from "../data/pacienteData";

function Pacientes(): JSX.Element {
  return (
    <section className="container">
      <h2>Registro de Pacientes</h2>
      <p>Control clínico de mascotas y sus propietarios.</p>

      <div className="cards">
        {pacientes.map((p) => (
          <Card
            key={p.id}
            titulo={p.nombre}
            subtitulo={`Especie: ${p.especie} - Raza: ${p.raza}`}
            detalle={`Edad: ${p.edad} años`}
            extra={`Propietario: ${p.propietario}`}
            activo={p.activo}
            imagen={p.imagen}
          />
        ))}
      </div>
    </section>
  );
}

export default Pacientes;