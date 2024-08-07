const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let adivinanza = null;
let intentos = 0

console.log("Bienvenido! Puedes adivinar el numero aleatorio que esta entre el 1 y el 100?")

while(adivinanza !== numeroAleatorio){
    adivinanza = prompt("Introduce un numero del 1 al 100");
    adivinanza = Number(adivinanza);
    intentos++;

    if(isNaN(adivinanza)){
        console.log("Introduce un numero valido")
    }
    else if(adivinanza < numeroAleatorio){
        console.log("El numero es mayor")
    }
    else if(adivinanza > numeroAleatorio){
        console.log("El numero es menor")
    }
    else{
        console.log("Felicidades! Haz adivinado el numero")
    }
}

console.log(`Numero de intentos: ${intentos}`);