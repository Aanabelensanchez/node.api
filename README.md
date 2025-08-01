# Proyecto Final - API REST Node.js

Este es el proyecto final del curso de Programación Backend. Consiste en una API REST desarrollada con Node.js y Express.js, integrada con Firebase/Firestore como base de datos en la nube. Se realizaron pruebas con Postman y se desplegó en Vercel.

## Tecnologías Utilizadas

- Node.js
- Express.js
- Firebase & Firestore
- JWT (JSON Web Tokens)
- Postman
- Vercel

## Descripción

La API permite la gestión de productos de una tienda online, con operaciones de CRUD completas (crear, leer, actualizar y eliminar), autenticación con JWT y manejo de errores. Los datos se migraron de un archivo local JSON a Firestore, y el proyecto fue desplegado en producción.

## Funcionalidades

### Productos

- **Crear** productos vía POST
- **Listar** todos los productos
- **Filtrar** por ID
- **Actualizar** productos (PUT y PATCH)
- **Eliminar** productos por ID

### Seguridad

- Autenticación de usuarios con JWT
- Middleware de autorización que protege rutas privadas (como obtener producto por ID)
- En caso de no tener token o que sea inválido, se responde con error 401 o 403

### Manejo de Errores

- 401 → No autorizado (falta el token)
- 403 → Token inválido
- 404 → Recurso no encontrado
- 500 → Error interno del servidor

### Otros

- Uso de dotenv para manejar variables sensibles (.env)
- Configuración de CORS para permitir peticiones desde diferentes orígenes
- Estructura modular basada en principios RESTFul

## Endpoints Principales

| Método | Ruta                                     | Descripción                         |
|--------|------------------------------------------|-------------------------------------|
| GET    | `/api/products`                          | Lista todos los productos           |
| GET    | `/api/products/:id`                      | Obtiene un producto por ID (requiere token) |
| POST   | `/api/products`                          | Crea un nuevo producto              |
| PUT    | `/api/products/:id`                      | Actualiza completamente un producto |
| PATCH  | `/api/products/:id/partial-update`       | Actualización parcial (ej: solo precio) |
| DELETE | `/api/products/:id`                      | Elimina un producto por ID          |

## Autenticación

Para acceder a rutas protegidas, se debe enviar un token JWT válido en el encabezado:

Authorization: Bearer <token>

El token se genera al hacer login 

## Base de Datos

- Inicialmente, se usó un archivo local `products.json` (ya no en uso).
- Luego se migró a Firestore, conectando correctamente con Firebase.
- Las operaciones de CRUD ya se hacen sobre Firestore.

## Despliegue

- El proyecto está desplegado en Vercel.
- Conectado con GitHub.
- Las variables de entorno (Firebase y JWT) están configuradas en **Environment Variables** de Vercel.

## Estado del Proyecto

✅ CRUD completo de productos  
✅ Autenticación con JWT  
✅ Middleware de seguridad  
✅ Migración a Firestore    
✅Login pendiente de revisión en clase
✅ Despliegue en Vercel

## Recomendaciones del Profesor

- Se puede o no usar `services/` (es opcional).
- No es necesario eliminar el archivo JSON hasta el final.

## Consideraciones Finales

> 🔔 **Importante:** El nombre del repositorio debería ser `proyecto-final-ecommerce-[nombre-apellido]`. En este caso se mantuvo el repositorio original para conservar historial de commits y evitar errores en el despliegue.


Vercel> https://vercel.com/anas-projects-b1719cc7/node-api/A2ZYrX6yUZH2JMwaVSgnhoPbreVN *LINK*
Autor> Ana Belen Sanchez.



