function esPar (n1:number[]):boolean{
    let comprobacion:boolean;
    let i:number = 0;

    while (i < n1.length) {
        i++;
        if (n1[i] % 2 == 0){
            comprobacion = true;
        }
        else {
            comprobacion = false;
        }
    }
    
    return comprobacion;
}

console.log(esPar([1, 3, 5, 6]))


function arrayNombres (nombres:string[]):boolean {
    let tieneMay:boolean;
    let i:number = 0
    while (i < nombres.length){
        i++;
        if (nombres[i].charAt(0) == "M"){
            tieneMay = true;
        }

        else {
            tieneMay = false;
        }
    }

    return tieneMay;
}

console.log(arrayNombres(["Mario", "Maria", "Mastin"]))