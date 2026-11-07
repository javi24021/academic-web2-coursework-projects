import type { Paciente } from "../types/Paciente";

const pacientes: Paciente[] = [
    {
        id: 1,
        nombre: "Pelusa",
        especie: "Gato",
        raza: "Chilango",
        edad: 2,
        propietario: "Carlos Mendoza",
        activo: true,
        imagen: "/pelusa.jpg"
    },
    {
        id: 2,
        nombre: "Max",
        especie: "Perro",
        raza: "Golden Retriever",
        edad: 4,
        propietario: "Ana Gómez",
        activo: true,
        imagen: "/golden.jpg"
    },
    {
        id: 3,
        nombre: "Luna",
        especie: "Gato",
        raza: "Siamés",
        edad: 1,
        propietario: "Luis Pérez",
        activo: false,
        imagen: "/siames.jpg"
    },
    {
        id: 4,
        nombre: "Rocky",
        especie: "Perro",
        raza: "Pastor Alemán",
        edad: 6,
        propietario: "Carla Rojas",
        activo: true,
        imagen: "/pastor.jpg"
    }
];

export default pacientes;