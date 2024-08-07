function mayoresMenoresFiltro(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

let personas = [
    {nombre: "Juan",edad: 17},
    {nombre: "Marcos", edad: 20},
    {nombre: "Edwart",edad: 16},
    {nombre: "Erick",edad: 22},
    {nombre: "Gabriel", edad: 12}
];

let mayoresDeEdad = mayoresMenoresFiltro(personas);

console.log(mayoresDeEdad);
