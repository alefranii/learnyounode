//variable que se entrega en el ejercicio
//fs es el modulo para ejecutar archivos desde el sistema de archivos
var fs = require ('fs');
// "require" permite importar libreria desde un archivo a otro
// Para leer un archivo debes usar fs.readFileSync('/path/to/file'). Éste devuelve un objeto Buffer(reserva de datos).
// cree variable de numero de lineas para leer el archivo desde el sistema de archivos con process que ve el comando los argumentos.
//posterior lo convierto en string, al contenido obtenido le cuento las lineas y le descuento una linea. 
var nlinea = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(nlinea);
