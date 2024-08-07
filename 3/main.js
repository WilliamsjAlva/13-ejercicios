let personas = [
    {nombre: "Juan Jose de los Mogollones Castillo Peraza Urrutia", edad: 30, ciudad: "Valencia"},
    {nombre: "Maria Gil",edad: 25, ciudad: "Caracas"},
    {nombre: "Carlos Quintero",edad: 35, ciudad: "Barquisimeto"},
    {nombre: "Ana Rangel",edad: 28, ciudad: "Maracay"},
    {nombre: "Luis Sanchez", edad:40, ciudad: "Coro"}
];

for (let persona of personas) {
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
}
