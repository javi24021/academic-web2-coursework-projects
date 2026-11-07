import type { Empresa } from "../types/Empresa";

const empresas: Empresa[] = [
    {
        id: 1,
        nombre: "Clínica Veterinaria La Vaca Loca",
        detalle: "Ubicados en Cochabamba con la misión de brindar salud animal integral, diagnósticos y cuidados con estándares altos.",
        activo: true,
        imagen: "/logo.jpg",
        extra: "Urgencias 24/7 • Quirófano Moderno • Laboratorio Clínico"
    },
    {
        id: 2,
        nombre: "Nuestra Misión y Filosofía",
        detalle: "Tratar a cada mascota con empatía, ciencia y dedicación, garantizando bienestar y tranquilidad para todas las familias.",
        activo: true,
        extra: "Compromiso de Ética y Cuidado Animal"
    }

];

export default empresas;