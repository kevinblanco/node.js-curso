/**
 * Suma argumentos en linea de comandos
 *
 * @module      :: Main app
 * @description	:: Sumatoria de Argumentos.
 * @author      :: Kevin Blanco <mail@kevinblanco.io>
 *
 */


//Definicion de variables
var sum = 0;


//Revisamos si tenemos argumentos en la linea de comandos
if(process.argv.length <= 3)
{

	console.log('Debe pasar al menos 2 numeros para realizar la sumatoria');


//Si tenemos argumentos, entonces realizemos la sumatoria
}else
{

	//Iteramos entre los argumentos y hacemos la sumatoria
	for (var i = 2; i < process.argv.length; i++) {

		sum += Number(process.argv[i]);

	}

	//Mostramos el resultado
	console.log('El resultado de la sumatoria es: ' + sum); 

}