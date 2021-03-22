# DelPlataIng

El proyecto consta de dos carpetas:

server-api y client

------------------------------------------------------------
Servidor (server-api):
------------------------------------------------------------
Comando para iniciar
>> npm start

1. Las configuraciones de la base de datos en MongoDB se encuentran en el archivo .env

2. Además agrego al root los archivos de las exportaciones de los endpoints definidos en Postman 
(endpoints y variables locales)

Funcionamiento:
---------------

Se prevee acceso a registrar los parámetros desde un endoint que incluye un token. El token debe ser
generado con anterioridad por un usuario válido mediante el endpoint:

{{url}}/api/config/create-token

Los usuarios que pueden configurar tokens deben estar registrados y logueados usando los endpoints:

{{url}}/api/user/register
{{url}}/api/user/login

------------------------------------------------------------
Cliente (client)
------------------------------------------------------------
Comando para iniciar
>> npm start

Importante:
-----------

Se utilizó un token válido en el servidor de pruebas, para que funcione primero deberán generar un token
en el servidor (como se explica más arriba) y luego setear la constante TOKEN en el archivo "client.js"


Funcionamiento:
---------------

Simplemente una aplicación cliente muy básica que intenta registrar los valores en el servidor cada 3 segundos.
Se creó un método que genera valores random para los parámetros (pudiendo generar valores válidos y inválidos)

