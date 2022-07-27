// SUMADOR DE NUMEROS MENORES AL 10

let suma = 0; 
let num = Number(prompt('Ingrese un numero menor o igual al 10'))
if (num < 11) {
    do { 
        suma += num; 
        num = Number(prompt('Ingrese otro numero')) 
    } while (num < 11);

    alert(`El resultado de la suma entre sus numeros menores al 10 es de ${suma}`)
} 
else if (num > 10){
    alert('El numero ingresado es mayor a 10')
}
else {
    alert('Ha ocurrido un error inesperado')
}

