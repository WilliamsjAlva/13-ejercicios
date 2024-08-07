let libros = {
    "Basic English Grammar For Dummies":{
        autor: "Gail Brenner",
        fechaDePublicacion: 2002,
        genero: "Academico"
    },
    "El Hobbit":{
        autor: "J.R.R. Tolkien",
        fechaDePublicacion: 1937,
        genero: "Fantasia"
    },
    "Minecraft: Gather, Cook, Eat! Official Cook":{
        autor: "Tara Theoharis",
        fechaDePublicacion: 2023,
        genero: "Cocina"
    },
    "DRacula": {
        autor: "Bram Stoker",
        fechaDePublicacion: 1897,
        genero: "Terror"
    },
};

for (let titulo in libros) {
    console.log(`Título: ${titulo}, Autor: ${libros[titulo].autor}, Año: ${libros[titulo].fechaDePublicacion}, Género: ${libros[titulo].genero}`);
}
