Ejemplo #2 - Clase #1
=============

Este ejemplo muestra lo basico sobre I/O (input/output).

-----
Esta app de ejemplo acepta 2 o mas argumentos mediante la linea de comandos e imprime la sumatoria de esos numeros ingresados


####Notas importantes####

* Se puede accesar a los argumentos de linea de comandos mediante el objeto global `process`. Este objeto `process` contiene una propiedad llamada `argv` el cual contiene un arreglo con los argumentos. Puedes saber que contiene esta propiedad imprimiendola en consola.


		console.log(process.argv);
		
* Corremos este programa mediante `node` pasandole 3 numeros como argumentos:

		$ node app.js 1 2 3
		
* Y veremos el arreglo de salida de la siguiente forma

		[ 'node', '/ruta/de/la/app.js', '1', '2', '3' ]
		
* El primer elemento del arreglo `process.argv` es siempre `node`, y el segundo elemento es siempre la **ruta al archivo app.js**, por lo que necesita empezar la sumatoria en el **tercer elemento (índice 2)** hasta llegar a la final del arreglo.

* También tenga en cuenta que todos los elementos de `process.argv` son String y puede que tenga que pasarlos a números. Esto se puede lograr mediante el metodo `Number()`. Por ejemplo `Number(process.argv[2])`.




