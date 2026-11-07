import type { JSX } from "react";
import Card from "../components/Card";
import servicios from "../data/servicioData";

function Inicio(): JSX.Element {
  return (
    <>

      <section className="hero">
        <h1>Veterinaria La Vaca Loca</h1>
        <p>
          Atención médica profesional, cirugías, vacunación y cuidado para tus mascotas.
        </p>
      </section>


      <section className="container">
        <h2>Nuestros Servicios</h2>

        <div className="cards">
          {servicios.map((s) => (
            <Card
              key={s.id}
              titulo={s.nombre}
              subtitulo={`Precio: Bs ${s.precio}`}
              detalle="Atención profesional con especialistas en salud animal."
              activo={s.activo}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;