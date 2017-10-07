//Pediremos al usuario que ingrese en ID del ganado y si el ID se encuentra en la base de datos mostrará las características del ganado
var t = document.getElementById("text1"); // Obteniendo la etiqueta de text por Id
var b = document.getElementById("boton"); // Obteniendo la etiqueta de boton por Id
b.addEventListener("click",show); //Añadiendo escuchador de evento
var imagenes = []; // agregando un nuevo array
imagenes["AAFF"] = "vaca.png"; // añadiendo la sublase "AAFF" del array
imagenes["ASSF"] = "vaca.png"; // añadiendo la subclase "ASSF" del array
imagenes["SSGG"] = "vaca.png"; // Añadiendo la sublase "SSGG" del array

function show() // Funcion disparadora del evento click a la etiqueta boton
{
  var texto = text1.value;
   if(texto == ganado1.nombre)
   {
     ganado1.mostrar();
   }
   if(texto == ganado2.nombre)
   {
     ganado2.mostrar();
   }
   if(texto == ganado3.nombre)
   {
     ganado3.mostrar();
   }

}
class ganado // añadiendo una clase nueva
{
  constructor(n,a,s) // indicando la construcción de dicha clase
  {
    this.imagen = new Image(); // añadiendo el objeto imagen y new Image como sub objeto del mismo para añadir imagen
    this.nombre = n; // añadiendo el objeto nombre
    this.años = a; // añadiendo el objeto años
    this.sexo = s; // añadiendo el objeto sexo
    this.imagen.src = imagenes[this.nombre];
  }
  mostrar() // añadiendo la funcion mostrar() dentro de la clase
  {
    document.write("<p>"); // agregando una etiqueta html de parrafo
    document.body.appendChild(this.imagen); // añadiendo al documento del navegador la imagen vaca.png
    document.write("Nombre: " + this.nombre + "<br/>"); // escribiendo el objeto nombre dento del DOM
    document.write("Años: " + this.años + "<br/>");// escribiendo el objeto años dento del DOM
    document.write("Sexo: " + this.sexo); // escribiendo el objeto sexo dentro del DOM
    document.write("</p>");
  }
}
var ganado1 = new ganado("AAFF",5,"Macho"); // agregando las caracteristicas del ganado1 dentro de la clase ganado
var ganado2 = new ganado("ASSF",3,"Hembra");// agregando las caracteristicas del ganado2 dentro de la clase ganado
var ganado3 = new ganado("SSGG",8,"Hembra");// agregando las caracteristicas del ganado3 dentro de la clase ganado
