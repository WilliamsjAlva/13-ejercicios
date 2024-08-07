const palabras = ["manzana", "banana", "naranja", "pera", "uva"];
const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
const letrasPalabra = palabraAleatoria.split("");
const maxIntentos = 6;
let intentos = 0;
let palabraAdivinada = [];

do {
    let letra = prompt(`Adivina una letra de la palabra (${palabraAdivinada.join("_")}):`);

    if (letrasPalabra.includes(letra)){
        for(let i = 0; i < letrasPalabra.length; i++){
            if(letrasPalabra[i] === letra){
                palabraAdivinada[i] = letra;
            }
        }
    }
    else {
        intentos++;
        console.log(`Letra incorrecta. Te quedan ${maxIntentos - intentos} intentos`)
    }
}while(intentos < maxIntentos && palabraAdivinada.join("") !== palabraAleatoria);

if (palabraAdivinada.join("") === palabraAleatoria){
    console.log(`Felicitaciones! adivinaste la palabra : ${palabraAleatoria}`)
}else {console.log(`Agostaste tus intentos... la palabra era : ${palabraAleatoria}`); }