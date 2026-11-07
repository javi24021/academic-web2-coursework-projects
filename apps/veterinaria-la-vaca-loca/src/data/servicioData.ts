import type { Servicio } from "../types/Servicio";

const servicios: Servicio[] = [
    {
        id: 1,
        nombre: "Consulta Veterinaria",
        precio: 50,
        activo: true
    },
    {
        id: 2,
        nombre: "Vacunación",
        precio: 100,
        activo: true
    },
    {
        id: 3,
        nombre: "Desparasitación",
        precio: 50,
        activo: true
    },
    {
        id: 4,
        nombre: "Cirugía",
        precio: 500,
        activo: true
    }
];

export default servicios;