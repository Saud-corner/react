import { DateTime } from 'luxon';

// Función para obtener la fecha formateada en español usando Luxon
export const obtenerFechaActualFormateada = (): string => {
    return DateTime.now().setLocale('es').toLocaleString(DateTime.DATE_HUGE);
};