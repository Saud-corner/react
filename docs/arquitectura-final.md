# Arquitectura Final - Reflexión

## 1. Genéricos (<T>)
El uso de genéricos tanto en las respuestas de red (`RespuestaAPI<T>`) como en componentes visuales (`DataTable<T>`) ha permitido crear estructuras altamente reutilizables. Esto elimina la necesidad de duplicar código para diferentes entidades y garantiza un tipado estricto en tiempo de compilación.

## 2. Uniones Discriminadas y Análisis Exhaustivo (never)
Al modelar el dominio con Uniones Discriminadas, garantizamos que los objetos solo posean las propiedades válidas para su estado actual. Además, implementar el tipo `never` en el bloque `default` del `switch` blinda el código: si en el futuro se añade un nuevo estado a la unión, TypeScript lanzará un error forzando al desarrollador a manejarlo, evitando bugs silenciosos en producción.

## 3. Tipos de Utilidad (Partial<T>)
El uso de `Partial<T>` para el estado temporal de edición en React permite manejar de forma segura las modificaciones del usuario. Nos asegura que solo se puedan editar claves que realmente existan en el modelo original, reduciendo drásticamente los errores de asignación de datos.