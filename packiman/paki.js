//Clases y Arrays en Javascript
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
var monstruos = []; //Definiendo un Arrays
monstruos.push(new Pakiman("Cauchin", 100, 30));
monstruos.push(new Pakiman("Pokacho",80,50));
monstruos.push(new Pakiman("Tocinauro",120,40));

for(var pakin of monstruos)
{
  pakin.mostrar();
}
