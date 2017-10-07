//FIZZ = numeros divisibles por 3
// BUZZ = /5
var numeros = 100;
for(i=0;i<=100;i++)
{
  divisible = false;
  if(i % 3 == 0)
  {
    document.write("fizz");
  }
  if(i % 5 == 0)
  {
    document.write("Buzz");
  }
  if(i % 3 != 0 && i % 5 !=0)
  {
    document.write(i);
  }
  document.write("<br>");

}
