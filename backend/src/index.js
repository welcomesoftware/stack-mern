// requiere las variables de entorno antes que inicie el servidor
require('dotenv').config();

// importa el servidor desde app
const app = require('./app');
require('./database');



/**
 * Funcion principal main():
 * Nos permite usar async & await para evitar escribir callbacks,
 * Inicia el servidor escuchando en un puerto definido por el sistema,
 * en caso de no haber uno, le pasa el puerto en una variable.
 */
async function main() {
    await app.listen(app.get('PORT'));
    console.log('Server running on port', app.get('PORT'));
}

// llama la funcion main
main();