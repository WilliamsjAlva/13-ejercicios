function reemplazarPalabra(cadena, palabraAntigua, palabraNueva){
    return cadena.split(palabraAntigua).join(palabraNueva);
}
const cadenaTexto = "Los gatos son bonitos, pero algunos son bestias, pero los gatos son felices.";
console.log(reemplazarPalabra(cadenaTexto, "gatos","perros"))