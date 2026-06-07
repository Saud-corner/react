import { DataTable } from './components/DataTable';
import { obtenerFechaActualFormateada } from './utils/fechas';

// Datos de prueba para alimentar nuestro componente genérico
const estudiantesDemo = [
  { id: 1, nombreCompleto: "Saud", email: "saud@ceac.es", estado: "ACTIVA" },
  { id: 2, nombreCompleto: "Lucía Pérez", email: "lucia@ceac.es", estado: "FINALIZADA" }
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Dashboard Académico</h1>
      <p style={{ color: '#666' }}>
        📅 Fecha de acceso: <strong>{obtenerFechaActualFormateada()}</strong>
      </p>

      <hr style={{ margin: '20px 0' }} />

      <h2>Gestión de Estudiantes (DataTable Genérica)</h2>
      
      {/* Aquí usamos nuestro componente enviándole los datos y las columnas exactas */}
      <DataTable 
        datos={estudiantesDemo} 
        columnas={['id', 'nombreCompleto', 'email', 'estado']} 
      />
    </div>
  );
}

export default App;