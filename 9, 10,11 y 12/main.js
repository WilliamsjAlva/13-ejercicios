let personas = [
    {nombre: "Luis", edad:33, hobbies: ["videojuegos", "musica","cine"]},
    {nombre: "Juanito", edad:30 },
    {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]},
    {nombre: "Maria", edad: 25}
];

for (let persona of personas){
    if (persona.nombre === "Pedro") {
        delete persona.hobbies;
    }
}

for(let persona of personas) {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    if (persona.hobbies) {
        console.log(`Hobbies: ${persona.hobbies}`);
    }
}
