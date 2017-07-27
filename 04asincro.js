
var fs = require('fs');
//la funcion asincrona se ejecuta y devuelve la ruta del archivo,..
//hacemos una funcion anonima para el callback, que nos procesa nuestro archivo en la variable data, 
//readFile le da dependencia a los parametros 
fs.readFile(process.argv[2],'utf8', function(error,data) { 
var nlinea = data.split('\n').length -1;
//nos aloja los archivos de readfile en data que sera un string, separandolos con un salto de linea y descontandole 1 
console.log(nlinea);

});