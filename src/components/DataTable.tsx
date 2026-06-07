import { useState } from 'react';

// 1. Tipamos las Props usando el genérico <T>
interface DataTableProps<T> {
    datos: T[];
    // Pedimos un array con las claves (keys) exactas del tipo T
    columnas: (keyof T)[]; 
}

// 2. Definimos el componente obligando a que T tenga al menos un 'id'
export function DataTable<T extends { id: string | number }>(props: DataTableProps<T>) {
    
    // 3. uso de utilityu : Partial<T>
    // El usuario podría no rellenar todos los campos al editar, así que el estado es parcial.
    const [editandoId, setEditandoId] = useState<string | number | null>(null);
    const [estadoEdicion, setEstadoEdicion] = useState<Partial<T>>({});

    const iniciarEdicion = (item: T) => {
        setEditandoId(item.id);
        setEstadoEdicion(item);
    };

    const guardarEdicion = () => {
        console.log("Simulando guardado en API:", estadoEdicion);
        setEditandoId(null);
        setEstadoEdicion({});
    };

    return (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', textAlign: 'left' }}>
            <thead>
                <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                    {props.columnas.map((col, index) => (
                        <th key={index} style={{ padding: '10px', border: '1px solid #ddd' }}>
                            {String(col).toUpperCase()}
                        </th>
                    ))}
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {props.datos.map((item) => (
                    <tr key={item.id}>
                        {props.columnas.map((col, index) => (
                            <td key={index} style={{ padding: '10px', border: '1px solid #ddd' }}>
                                {editandoId === item.id ? (
                                    <input
                                        type="text"
                                        value={estadoEdicion[col] as string || ''}
                                        onChange={(e) => setEstadoEdicion({ ...estadoEdicion, [col]: e.target.value })}
                                    />
                                ) : (
                                    String(item[col])
                                )}
                            </td>
                        ))}
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                            {editandoId === item.id ? (
                                <button onClick={guardarEdicion} style={{ cursor: 'pointer' }}>Guardar</button>
                            ) : (
                                <button onClick={() => iniciarEdicion(item)} style={{ cursor: 'pointer' }}>Editar</button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}