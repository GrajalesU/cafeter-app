Para implementar esta solución debe de realizar los siguentes pasos:

1. clonar el repositorio de git
2. Crear archivo .env
3. dentro de la carpeta API/db se encuentra el sample de la base de datos de mysql, en esta se encuentra al principio los quieries necesarios para crear la base de datos, los úlimos dos queries hacen referencia a las consultas directas requeridas por la prueba técnica
4. instalar las dependencias : npm i
5. ejecutar el comando para inicializar la api : npm run startAPI
6. en itra terminal, ejecutar el comando para inicializar el front : npm run startFront

plantilla: este es un ejemplo de las variables de entorno escritas en el archivo .env

API_PORT = 3001 //puerto de la API el puerto 3000 se usa para el front        
HOST = localhost     //host de la base de datos
USER = root           //usuario de la base de datos
PASSWORD = root      //contraseña del usuario de la base de datos
DATABASE = cafe      //nombre de la base de datos
