/*
document.getElementById('nombredelid'); ** para acceder a un elemento por su id

document.getElementsByClassName('nombredelaclase')[0]; ** para acceder a un elemento por su clase, como devuelve una colección HTML puedo acceder al que necesito indicando su posición

document.getElementsByTagName('etiqueta')[0]; ** para acceder a un elemento por su etiqueta, para acceder al que necesito puedo indicar su posición

document.querySelector('.elemento'); ** puede ser una clase ('.elemento'), un id ('#elemento') o una etiqueta ('p') la primera coincidencia es la que devuelve

document.querySelectorAll('.elemento'); ** igual que el anterior salvo que devuelve todos los elementos que coincidan con la búsqueda.
*/

//tomamos el div que está en el html con id container
var contenedor = document.getElementById('container');
//creamos un párrafo
var paragraph = document.createElement('p');
//creamos el nodo de texto que tendrá este párrafo
var txt = document.createTextNode('Hola soy un nodo de texto');

//creamos un párrafo
var paragraph2 = document.createElement('p');
//creamos el nodo de texto que tendrá este párrafo
var txt2 = document.createTextNode('Hola soy un nodo de texto 2');

//creamos un párrafo
var paragraph3 = document.createElement('p');
//creamos el nodo de texto que tendrá este párrafo
var txt3 = document.createTextNode('Hola soy un nodo de texto 3');

//creamos un párrafo
var paragraph4 = document.createElement('p');
//creamos el nodo de texto que tendrá este párrafo
var txt4 = document.createTextNode('Hola soy un nodo de texto 4');

/*
padre.appendChild(hijo);

Hacemos el 'appendcheo', le entregamos los hijos a sus respectivos padres desde el hijo más 'interior'
*/

//primero le entregamos los nodos de texto como hijos a sus párrafos correspondientes
paragraph.appendChild(txt);
paragraph2.appendChild(txt2);
paragraph3.appendChild(txt3);
paragraph4.appendChild(txt4);


//luego le pasamos cada párrafo a su padre contenedor que tenemos en el html y guardamos previamente en la variable contenedor.
contenedor.appendChild(paragraph);
contenedor.appendChild(paragraph2);
contenedor.appendChild(paragraph3);

//le indicamos que debe ir antes del párrafo 2
contenedor.insertBefore(paragraph4, paragraph2);//insertBefore(nodo nuevo. nodo anterior);

/*
Sintáxis evento click en DOM

elemento.addEventListener('click', function(){
	
})
*/

//evento cuando se hace click en el párrafo 2
paragraph2.addEventListener('click', function(){
	paragraph2.classList.toggle('rojo');
	//funciona como un interruptor (switch), verifica si no tiene la clase entonces se la agrega, si verifica que la tiene entonces se la quita.
})

//agrega la clase azul al primer párrafo
paragraph.classList.add('azul');

//evento cuando se hace click en el párrafo 3
paragraph3.addEventListener('click', function(){
	contenedor.removeChild(paragraph3);
	//al hacer click le pide a su padre (contenedor) que borre el párrafo 3
})