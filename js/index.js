// SUMADOR DE NUMEROS MENORES AL 10

 let suma = 0; 
 let num = Number(prompt('Ingrese un numero menor o igual al 10'));
 if (num < 11) {
     do { 
         suma += num; 
         num = Number(prompt('Ingrese otro numero'));
    } while (num < 11);

     alert(`El resultado de la suma entre sus numeros menores al 10 es de ${suma}`);
 } 
 else if (num > 10){
     alert('El numero ingresado es mayor a 10');
 }
 else {
     alert('Ha ocurrido un error inesperado');
 }

let resp = Number(prompt('Le ha gustado la aplicacion? Pulse "1" como Si, y "2" como No'))
if (resp == 1) {
    alert('Gracias por su opinion, vuelva pronto!')
}

else if (resp == 2) {
    prompt('Brindenos propuestas para mejorar')
    alert('Gracias por su colaboracion!')
}

else {
    alert('Ha ocurrido un error, intente de nuevo ingresar "S" o "N"')
}