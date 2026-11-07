import type { JSX } from "react";

interface Props {
  titulo: string;
  subtitulo?: string;
  detalle?: string;
  extra?: string;
  activo: boolean;
  imagen?: string;
}

function Card({ titulo, subtitulo, detalle, extra, activo, imagen }: Props): JSX.Element {
  return (
    <div className="card">
      {/* por si hay imagen */}
      {imagen && <img src={imagen} alt={titulo} className="img-card" />}

      <h3>{titulo}</h3>

      {/* por si hay subtitulos */}
      {subtitulo && <p><strong>{subtitulo}</strong></p>}

      {/* porsi hay detalles */}
      {detalle && <p>{detalle}</p>}

      {/* Si viene extra (ej: fecha, teléfono, especialidad), lo muestra */}
      {extra && <p>{extra}</p>}

      <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
    </div>
  );
}

export default Card;