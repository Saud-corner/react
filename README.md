> Proyecto final para la gestión de estudiantes aplicando Arquitectura Limpia y tipado estricto.

### Enlaces rápidos

| Despliegue | URL |
| :--- | :--- |
| **Frontend** | [Ver en Vercel](PON_AQUI_TU_ENLACE_DE_VERCEL) |

---

## Características

* 🏗️ **Arquitectura Limpia**: Separación estricta entre Dominio (`src/domain`) e Infraestructura (`src/infrastructure`).
* 🛡️ **Tipado Estricto**: Uso de genéricos (`<T>`), utilidades (`Partial<T>`) y comprobaciones exhaustivas (`never`).
* 📅 **Fechas dinámicas**: Integración con la librería `Luxon` para el manejo de timestamps.
* ⚛️ **Componentes Genéricos**: Tabla de datos (`DataTable`) reutilizable capaz de inferir las claves del modelo.

---

## Tecnologías

| Frontend | Uso |
| :--- | :--- |
| React | Librería UI |
| TypeScript | Lenguaje tipado |
| Vite | Entorno de desarrollo |

| Auxiliares | Uso |
| :--- | :--- |
| Luxon | Manejo de fechas |
| Vercel | Despliegue continuo |

---

## Estructura del proyecto

```text
react/
├── docs/
│   └── arquitectura-final.md  # Documentación de decisiones técnicas
├── src/
│   ├── components/            # Componentes visuales (UI)
│   │   └── DataTable.tsx      # Componente de tabla genérica
├── domain/                    # Lógica de negocio (Reglas estrictas)
│   │   └── matricula/         # Entidades e interfaces
│   ├── infrastructure/        # Conectores externos
│   │   └── api/               # Simulación de llamadas de red
│   ├── utils/                 # Herramientas de formateo
│   │   └── fechas.ts          # Integración con Luxon
│   └── App.tsx                # Punto de entrada de la aplicación
└── package.json               # Dependencias del proyecto

Desarrollado para el Grado Superior DAM — Saud — 2026