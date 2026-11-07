import type { Veterinario } from "../types/Veterinario";

const veterinarios: Veterinario[] = [
    {
        id: 1,
        nombre: "Dr. Juan Pérez",
        especialidad: "Medicina Interna y Diagnóstico",
        telefono: "+591 4 4567890",
        email: "dr.juan@lavacaloca.vet",
        activo: true,
        imagen: "/albert.jpeg"
    },
    {
        id: 2,
        nombre: "Dra. María Gómez",
        especialidad: "Cirugía General y Felinos",
        telefono: "+591 4 4567891",
        email: "dra.maria@lavacaloca.vet",
        activo: true,
        imagen: "/mady.jpg"
    },
    {
        id: 3,
        nombre: "Dr. Carlos Rojas",
        especialidad: "Fauna Silvestre y Animales Exóticos",
        telefono: "+591 4 4567892",
        email: "dr.carlos@lavacaloca.vet",
        activo: true,
        imagen: "/pintor.webp"
    }
];

export default veterinarios;