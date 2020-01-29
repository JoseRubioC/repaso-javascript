function zodiaco(dia:number, mes:number):string{
    let signo:string;
    
    if ((mes == 12 && dia >= 22 && dia <= 31) || (mes == 1 && dia >= 1 && dia <= 19)) {
        signo = "Capricornio"
    }
    else if ((mes == 1 && dia >= 20 && dia <= 31) || (mes == 2 && dia >= 1 && dia <= 18)) {
        signo = "Acuario"
    }
    else if ((mes == 2 && dia >= 19 && dia <= 29) || (mes == 3 && dia >= 1 && dia <= 20)) {
        signo = "Piscis"
    }
    else if ((mes == 3 && dia >= 21 && dia <= 31) || (mes == 4 && dia >= 1 && dia <= 19)) {
        signo = "Aries"
    }
    else if ((mes == 4 && dia >= 20 && dia <= 30) || (mes == 5 && dia >= 1 && dia <= 20)) {
        signo = "Tauro"
    }
    else if ((mes == 5 && dia >= 21 && dia <= 31) || (mes == 6 && dia >= 1 && dia <= 20)) {
        signo = "Géminis"
    }
    else if ((mes == 6 && dia >= 21 && dia <= 30) || (mes == 7 && dia >= 1 && dia <= 22)) {
        signo = "Cáncer"
    }
    else if ((mes == 7 && dia >= 22 && dia <= 31) || (mes == 8 && dia >= 1 && dia <= 22)) {
        signo = "Leo"
    }
    else if ((mes == 8 && dia >= 23 && dia <= 30) || (mes == 9 && dia >= 1 && dia <= 22)) {
        signo = "Virgo"
    }
    else if ((mes == 9 && dia >= 23 && dia <= 31) || (mes == 10 && dia >= 1 && dia <= 22)) {
        signo = "Libra"
    }
    else if ((mes == 10 && dia >= 23 && dia <= 30) || (mes == 11 && dia >= 1 && dia <= 21)) {
        signo = "Escorpio"
    }
    else if ((mes == 11 && dia >= 22 && dia <= 31) || (mes == 12 && dia >= 1 && dia <= 21)) {
        signo = "Sagitario"
    }

    else {
        signo = "Introduce una fecha correcta"
    }
    
    return signo;
}

console.log(zodiaco(22, 11))



function continente(pais:string){
    let continente:string;

    if (pais == "Francia" || pais == "Italia" || pais == "Reino Unido" || pais == "Portugal" || pais == "España"){
        continente = "Europa";
    }
    else if (pais == "Estados Unidos" || pais == "Bolivia" || pais == "Brasil" || pais == "Ecuador" || pais == "Argentina"){
        continente = "América";
    }
    else if (pais == "Marruecos" || pais == "Libia" || pais == "Kenia" || pais == "Surafrica" || pais == "Egipto"){
        continente = "África";
    }
    else if (pais == "China" || pais == "Japon" || pais == "Vietnam" || pais == "Mongolia" || pais == "Tailandia"){
        continente = "Europa";
    }
    else if (pais == "Australia" || pais == "Samoa"){
        continente = "Oceanía";
    }
    
    console.log(continente)
}

continente("Libia")