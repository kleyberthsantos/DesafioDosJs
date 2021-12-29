//primera condición
let numero = prompt("Ingresar un número o cifra");
const numeroMayor = 1000;
if(numero > numeroMayor){
    alert("número mayor a 1000");
    }else{
        alert("Número o cifra incorrecta");
    }

//segunda condición
let texto = prompt("Ingresa una palabra");
let textoIngresado = "Hola";
if(texto===textoIngresado){
    console.log("Texto es igual a Hola");
}else{
    console.log("Texto incorrecto");
}

//tercera condición
let numeroDiezCincuenta = prompt("Ingresa un número");
if((numeroDiezCincuenta>=10) & (numeroDiezCincuenta<=50)){
    alert("Número ingresado está entre 10 y 50");
}else{
    alert("Número fuera de rango");
}
