import { DataTable } from './components/DataTable';
import { obtenerFechaActualFormateada } from './utils/fechas';
// IMPORTAMOS DESDE EL DOMINIO PROFESIONAL
import type { Estudiante, EstadoMatricula } from './domain/matricula'; 

// Datos de prueba para alimentar nuestro componente genérico
const estudiantesDemo: (Estudiante & { estado: EstadoMatricula['tipo'] })[] = [
  { id: "1", nombreCompleto: "Saud-corner", email: "saud@ceac.es", estado: "ACTIVA" },
  { id: "2", nombreCompleto: "Lucía Pérez", email: "lucia@ceac.es", estado: "FINALIZADA" }
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Dashboard Académico de Saud</h1>
      <p style={{ color: '#666' }}>
        📅 Fecha de acceso: <strong>{obtenerFechaActualFormateada()}</strong>
      </p>

      <hr style={{ margin: '20px 0' }} />

      <h2>Gestión de Estudiantes (DataTable Genérica Profesional)</h2>
      
      {/* Aquí usamos nuestro componente genérico tipado con id string o number */}
      <DataTable 
        datos={estudiantesDemo} 
        columnas={['id', 'nombreCompleto', 'email', 'estado']} 
      />
    </div>
  );
}

export default App;