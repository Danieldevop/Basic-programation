var estado = 0;
var x;
var y;
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mouseup",soltarMouse)
document.addEventListener("mousemove",dibujarMouse);
marco("white");
function marco(pint)
{
  dibujarlinea(pint,0,0,0,300);
  dibujarlinea(pint,300,0,300,300);
  dibujarlinea(pint,0,300,300,300);
  dibujarlinea(pint,0,0,300,0);
}
function presionarMouse(evento)
{
  estado =  1;
  x = evento.layeX;
  y = evento.layerY;
}
function dibujarMouse(evento)
{
  if(estado = 1)
  {
    dibujarlinea("black",x,y,evento.layerX,evento.layerY);
  }
  x = evento.layerX;
  y = evento.layerY;
}
function soltarMouse(evento)
{
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarlinea(color,xi,yi,xf,yf)
{
  lienzo.beginPath();
  lienzo.lineWidth = 2;
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke()
  lienzo.closePath();
}
