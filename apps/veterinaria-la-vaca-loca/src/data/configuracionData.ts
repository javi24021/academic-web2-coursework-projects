import type { Configuracion } from "../types/Configuracion";

const configuraciones: Configuracion[] = [
    {
        id: 1,
        nombre: "Moneda de Cobro",
        detalle: "Bolivianos (BOB - Bs.)",
        activo: true,
        extra: "Configurada para facturación nacional"
    },
    {
        id: 2,
        nombre: "Recordatorios de Vacunación",
        detalle: "Notificaciones automáticas por WhatsApp y SMS a tutores",
        activo: true,
        extra: "Frecuencia: 48 horas previas a la cita"
    },
    {
        id: 3,
        nombre: "Copia de Seguridad en la Nube",
        detalle: "Respaldo diario automático del historial clínico y pacientes",
        activo: true,
        extra: "Último respaldo: Hoy 03:00 AM"
    },
    {
        id: 4,
        nombre: "Horario de Guardia de Emergencia",
        detalle: "Atención continua 24 horas para cirugías e internaciones",
        activo: true,
        extra: "Turnos rotativos de veterinarios"
    }
];

export default configuraciones;