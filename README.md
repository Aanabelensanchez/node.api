# node.api
Conecte Firebase y use Firestore segun el video subido por el profe, episodio 7 
Use dotenv para ocultar credenciales de firebase ya que segun comenta el profesor en el video, esos datos no se deben sufir ya que es informacion sensible. Use el episodio 8 del profesor.

me faltaria eliminar el json en products.json pero eso lo voy a  hacer al final 
y armar las funciones de filtrado delete con la base firebase, pero el profe dijo que lo iba a subir en otro video

en la clase 14 el procesor mostro como crear los productos y que se creen conectado con firestore. Ya pude crear el producto por postman y que se se me actualice en firestore pero yo los primeros tres productos los cree sin el id que sale de firestore sino que los cree a mano, ya se que es mejor dejar el que viene de firestore pero lo hice con el video inicial.

Ya probe el delete product creado conectado con la base de datos firebase y firestone, elimine el producto que cree manualemnte con el id 2 y se elimino ok y elimine uno creado desde postman con el id que se genera automaticamente y tambien se elimino correctamente.

en la parte de update product actualice el producto de id 1 con los siguientes datos en POSTMAN>

{ "name": "Actualizada_LAMPARA", "price": 300 }  mande un PUT en postman a la ruta http://localhost:3000/api/products/1 y puse el siguiente  body raw,json > { "name": "Actualizada_LAMPARA", "price": 300 } y me lo actualizo, es decir en el postman el producto con ID quedo actualizado.

Yo no tengo en los productos la categoria, asi que no esta en ninguna parte de las funciones ni en la base de datos. 
Hice la modificacion parcial y la probe y chequie en Firebase.
Modifique el precio solamente de la LAMPARA enviando por POSTMAN el patch a la siguiente ruta > http://localhost:3000/api/products/1/partial-update
con el siguiente json >
{
  "price": 10
} 
y me quedo modificada.

El modulo services lo deje pero el profesor dijo que no es necesario usarlo, que podemos usarlo o no en el TP FINAL.

El proyecto consistirá en:
1. Construir un servidor web utilizando Node.js y Express.js. Hecho
2. Implementar una estructura de proyecto modular y organizada basada en los
principios de arquitectura RESTFul. Hecho
3. Integrar el manejo de datos mediante archivos JSON y, posteriormente, conectarlo
con un servicio de base de datos en la nube (Firestore).Hecho
4. Asegurar la correcta comunicación entre cliente y servidor mediante métodos y
códigos HTTP. Hecho
5. Crear y configurar capas lógicas de seguridad y autenticación. !!!!!FALTA LA CLASE
6. Desplegar el proyecto en un entorno de producción funcional, accesible mediante
una URL pública
Funcionalidades según enunciados TP FINAL:

Funcionalidades
● Gestión de productos:
○ Crear nuevos productos para la tienda en línea. Hecho 
○ Listar, filtrar, buscar y cualquier acción de consulta sobre el listado de
productos. Hecho
○ Actualizar parcial o totalmente un producto. Totalmente Hecho.
○ Eliminar productos mediante id. Hecho
● Manejo de errores: Implementar controladores de errores para manejar
respuestas adecuadas en caso de solicitudes inválidas o fallas del servidor. Hecho.
● CORS: Configuración para permitir solicitudes desde diferentes dominios.Hecho

 Seguridad
● Autenticación y autorización: validar el acceso de los usuarios registrados
mediante el uso de JWT y tokens. FALTA / PENDIENTE VER EN CLASE

Base de Datos
● Acceso inicial a los datos utilizando un archivo JSON. Lo deje en el archivo products.js por esto que dice el TP
● Migrar el manejo de datos a Firebase/Firestore, implementando un servicio
para consumir esta base de datos.

Despliegue
● Subir la API a un servicio de producción como Vercel, Railway, entre otros. FALTA- No lo vimos en clase todavia.

Funciones esperadas:
● La API debe responder correctamente a los métodos HTTP (GET, POST, PUT,
PATCH, DELETE). Hecho 
● La API debe devolver los productos o el producto seleccionado. Hecho
● Las rutas definidas deben ser claras y tener una responsabilidad única. Hecho
● El sistema debe manejar errores comunes (404, 500) y devolver mensajes claros y
descriptivos. Hecho
● Los datos deben almacenarse y recuperarse correctamente desde la base de datos
local (JSON) y la nube (Firestore). Hecho
● La API debe permitir el uso de la herramienta solo a usuarios autorizados y
autenticados. FALTA ya que falta la clase todavia.


Formato de Entrega: El proyecto debe ser subido a un repositorio de GitHub. Se
deberá compartir el enlace del repositorio en el aula virtual antes de la fecha límite.
● Nombre del Repositorio: proyecto-final-ecommerce-[nombre-apellido]  Profe, no cumpli con esto ya que la verdad no estaba segura que si creo un nuevo repositorio me borre algo o deje de funcionar, porque queria tambien conservar el historial de commits tambien.
