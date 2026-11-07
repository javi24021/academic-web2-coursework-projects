import { useState, type JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Creditos from "./pages/Creditos";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Pacientes from "./pages/Pacientes";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import NoEncontrado from "./pages/NoEncontrado";

import "./App.css";

function App(): JSX.Element {
  const [modoOscuro, setModoOscuro] = useState<boolean>(false);
  const [sidebarAbierto, setSidebarAbierto] = useState<boolean>(false);

  const cambiarTema = (): void => {
    setModoOscuro((prev) => !prev);
  };

  const abrirSidebar = (): void => {
    setSidebarAbierto(true);
  };

  const cerrarSidebar = (): void => {
    setSidebarAbierto(false);
  };

  return (
    <div className={`app-contenedor ${modoOscuro ? "dark" : "white"}`}>
      <BrowserRouter>
        <Navbar
          titulo="La Vaca Loca"
          modoOscuro={modoOscuro}
          cambiarTema={cambiarTema}
          abrirSidebar={abrirSidebar}
        />

        <Sidebar abierto={sidebarAbierto} cerrar={cerrarSidebar} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/pacientes" element={<Pacientes />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/creditos" element={<Creditos />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </main>

        <Footer
          texto="Veterinaria La Vaca Loca - Todos los derechos reservados"
          anio={new Date().getFullYear()}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;