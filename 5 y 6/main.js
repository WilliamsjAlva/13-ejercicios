class Persona{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola,mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let persona1 = new Persona("Leo Ronaldo", 30);
persona1.saludar();

class Estudiante extends Persona{
    constructor(nombre,edad, curso){
        super(nombre, edad);
        this.curso = curso;
    }

    presentar(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y estoy en el curso de ${this.curso}.`);
    }
}

let estudiante1 = new Estudiante("Adriana Rocio", 22, "Ingenieria Informatica");

estudiante1.saludar();
estudiante1.presentar();