function imprImpar (numero:number){
    let nImpar:any = [];
    for (let i = 1; i < numero; i+=2){
        nImpar += i + "\n"
    }
    
    console.log(nImpar)
}

imprImpar(30)


function sumaEnteros (number1:number):number {
    let resultado:number = 0;
    for (let i = 0; i <= number1; i++){
        if (Number.isInteger(number1)){
            resultado += i
        }
    }
    
    return resultado
}

console.log(sumaEnteros(10))


function nFactorial (number1:number):number {
    let resultado:number = 1;
    for (let i = 1; i <= number1; i++){
        resultado = resultado * i;
        console.log(resultado)
    }

    return resultado;
}

console.log(nFactorial(5))


function arcoiris(colores:string[]){
    for (let i = 0; i < colores.length; i++){
        if (colores[i] == "azul" || colores[i] == "verde" || colores[i] == "rojo" || colores[i] == "amarillo" || colores[i] == "naranja"){
            console.log(colores[i] + ": Está en el arcoiris")
        }

        else {
            console.log(colores[i] + ": No está en el arcoiris")
        }
    }
}

arcoiris(["azul", "verde", "negro", "rojo"])


function sumaCart (array1:string[]):number {
    let resultado:number = 0;
    for (let i = 0; i < array1.length; i++){
        resultado = resultado + array1[i].length;
    }
    return resultado;
}

console.log(sumaCart(["hola", "adios"]))


function esPar (n1:number):string {
    let resultado:string = "";
    if (n1 % 2 == 0){
        resultado = "Es par"
    }

    else {
        resultado = "Es impar"
    }

    return resultado
}

console.log(esPar(4))


function sumaCartArray (array1:string[], array2:string[], array3:string[]):string {
    let resultado1:number = 0;
    let resultado2:number = 0;
    let resultado3:number = 0;
    for (let i = 0; i < array1.length; i++){
        resultado1 = resultado1 + array1[i].length;
    }
    for (let i = 0; i < array2.length; i++){
        resultado2 = resultado2 + array2[i].length;
    }
    for (let i = 0; i < array3.length; i++){
        resultado3 = resultado3 + array3[i].length;
    }
    
    let resultadoFinal:number = resultado1 + resultado2 + resultado3;
    let esPar:string = "";
    if (resultadoFinal % 2 == 0) {
        esPar = "Es par";
    }

    else {
        esPar = "No es par";
    }
    return esPar;
}

let array1:string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let array2:string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let array3:string[] = ["Venezuela", "Veneno", "Voltaje"];

console.log(sumaCartArray(array1, array2, array3))


