Para implementar esta solución debe de realizar los siguentes pasos:

1. clonar el repositorio de git
2. dentro de la carpeta API/db se encuentra el sample de la base de datos de mysql, en esta se encuentra al principio los quieries necesarios para crear la base de datos, los úlimos dos queries hacen referencia a las consultas directas requeridas por la prueba técnica
3. instalar las dependencias : npm i
4. ejecutar el comando para inicializar la api : npm run startAPI
5. ejecutar el comando para inicializar el front : npm run startFront

nota:
En este proyecto debes de crear un archivo .env para las variables de entorno donde se debe de almacenar lo siguiente:

plantilla: este es un ejemplo de las variables de entorno escritas en el archivo .env

API_PORT = 3001 //nota: el puerto 3000 se usa para el front        
HOST = localhost     
USER = root     
PASSWORD = root      
DATABASE = cafe   
