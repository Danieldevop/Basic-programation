document.addEventListener("keyup",movercerdo);
var teclas = {UP:38,DOWN:40,RIGHT:39,LEFT:37}
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo ={url: "tile.png",cargarOK:false}; //Notación Json
var vaca = { url: "vaca.png",cargarOK:false};
var cerdo = { url: "cerdo.png",cargarOK:false};
var pollo = {url: "pollo.png",cargarOK:false};

//Añadir Imagenes
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

//Funciones
function cargarFondo()
{
  fondo.cargarOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargarOK = true;
  dibujar();
}
function cargarCerdo()
{
  cerdo.cargarOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargarOK = true;
  dibujar();
}
function dibujar()
{
  if(fondo.cargarOK & vaca.cargarOK & cerdo.cargarOK & pollo.cargarOK)
  {
    papel.drawImage(fondo.imagen,0,0);
    for(v=0;v<5;v++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      var x =  x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen,x,y);
    }
    for (c=0;c<4;c++)
    {
      var x = aleatorio(0,6);
      var y = aleatorio(0,6);
      var x =  x * 60;
      var y = y * 60;
      papel.drawImage(cerdo.imagen,x,y);
    }
    papel.drawImage(pollo.imagen,0,0);
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
function movercerdo(teclas)
{
  switch (teclas.keyCode)
  {
    case teclas.UP:

    break;
  }
}
