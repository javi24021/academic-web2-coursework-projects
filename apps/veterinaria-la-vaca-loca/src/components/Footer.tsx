import type { JSX } from "react";
import { Link } from "react-router-dom";

interface Props {
  texto: string;
  anio: number;
}

function Footer({ texto, anio }: Props): JSX.Element {
  return (
    <footer className="footer">
      <p>© {anio} {texto}</p>
      <Link to="/ruta-inexistente" className="btn-probar-404">
        Probar Página 404
      </Link>
    </footer>
  );
}

export default Footer;
