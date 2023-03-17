Este proyecto es una aplicación web de encuestas, construida en React.js y utilizando una base de datos de Firebase para almacenar las respuestas de los usuarios.

Funcionalidades.
Permite a los usuarios completar una encuesta con campos para nombre completo, correo electrónico, fecha de nacimiento, país de origen y aceptación de términos y condiciones.
Al enviar la encuesta, los datos del usuario se envían a una base de datos de Firebase, con un timestamp que indica la fecha y hora en que se envió la encuesta.
Los usuarios reciben una confirmación de que su encuesta ha sido enviada exitosamente.
Los administradores pueden acceder a la ruta "/respuestas" para ver todas las respuestas de las encuestas enviadas, con información sobre el nombre completo, correo electrónico, fecha de nacimiento, país de origen y timestamp de cada respuesta.
ejemplos:
https://my-survey-app.netlify.app/
https://my-survey-app.netlify.app/respuestas
Tecnologías utilizadas
React.js para la construcción de la aplicación web.
Firebase para la base de datos y la autenticación de usuarios.
React Router para la navegación entre páginas de la aplicación.
Tailwind para todos los estilos.
