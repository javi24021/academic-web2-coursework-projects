import type { Reporte } from "../types/Reporte";

const reportes: Reporte[] = [
    {
        id: 1,
        nombre: "Reporte de Citas",
        fecha: "2022-01-01",
        descripcion: "Reporte de citas programadas",
        activo: true
    },
    {
        id: 2,
        nombre: "Reporte de Pacientes",
        fecha: "2022-01-02",
        descripcion: "Reporte de pacientes registrados",
        activo: true
    },
    {
        id: 3,
        nombre: "Reporte de Consultas",
        fecha: "2022-01-03",
        descripcion: "Reporte de consultas realizadas",
        activo: true
    }
];

export default reportes;