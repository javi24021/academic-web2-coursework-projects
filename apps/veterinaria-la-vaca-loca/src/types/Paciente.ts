export interface Paciente {
    id: number;
    nombre: string;
    especie: string;
    raza: string;
    edad: number;
    propietario: string;
    activo: boolean;
    imagen?: string;
}