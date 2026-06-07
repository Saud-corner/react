// --- ENTIDADES DEL DOMINIO ---

export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
}

export interface Estudiante {
    readonly id: string;
    nombreCompleto: string;
    email: string;
}

// --- CASOS DE USO ESPECÍFICOS DE MATRÍCULA ---

export interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
}

export interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
}

// Unión Discriminada Estricta
export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;

// Función de evaluación con switch y Análisis Exhaustivo (EXIGENCIA DE RÚBRICA)
export function generarReporte(estado: EstadoMatricula): string {
    switch (estado.tipo) {
        case "ACTIVA":
            return `ESTADO: Activa. El alumno está cursando ${estado.asignaturas.length} asignaturas.`;
        case "SUSPENDIDA":
            return `ESTADO: Suspendida. Motivo del bloqueo: ${estado.motivo}`;
        case "FINALIZADA":
            return `ESTADO: Finalizada. Calificación media definitiva: ${estado.notaMedia}`;
        default:
            const comprobacionExhaustiva: never = estado;
            return `Estado no manejado: ${comprobacionExhaustiva}`;
    }
}