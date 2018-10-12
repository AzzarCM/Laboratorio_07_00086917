// primera parte document.getELementById

var container;
container = document.getElementById("c1");
// la variable container solo tiene un div con la clase container y id = c1

container.innerText = "Hola Mundo";
// em la pantalla se muestra la frase hola mundo

container.style.backgroundColor = "#000000";

container.style.color = "#1cb723";

container.style.width = "200px";
container.style.height = "200px";

container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";
//en pantalla se muestra el input
// la diferencia es que innerText obtiene el contenido del texto de un nodo mientras que innerHTML obtiene la etiqueta en si.



// segunda parte document.getElementByClassName


var containers = document.querySelectorAll(".c2"); //con getElementByClassName los elementos no son iterables con foreach y tendria que usar el for normalito.

// almacena una lista ...  NodeList(6) [div.container.c2, div.container.c2, div.container.c2, div.container.c2, div.container.c2, div.container.c2]

/*
for(let i = 0; i<= containers.length; i++){
    containers[i].style.backgroundColor = "#009999";
    containers[i].innerHTML = "<input type='text' placeholder='Escriba su texto'>";
}
*/


containers.forEach(element => {
    element.style.backgroundColor = "#009999";
});

// se muestran los divs con un color verdoso



containers.forEach(x =>{
    x.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
});
// se muestra los input en todos los container seleccionados con la clase c2
// la diferencia es que innerText obtiene el contenido del texto de un nodo mientras que innerHTML obtiene la etiqueta en si.



// eventos

var boton = document.getElementById("btn-click");

boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}


var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}
//lo que suscede es que el texyo que intruducimos en la caja de texto se copia al otro div que esta en color aqua   
//value es para obtener el valor de una caja de texto mientras que innerText metemos texto.