class Inventario{
    constructor(){
        this.productos = [];
    }
    agregarProducto (nombre,precio,cantidad){
        const producto ={
            nombre: nombre,
            precio: precio,
            cantidad: cantidad};
        this.productos.push(producto);
    }
    calcularValorTotal(){
        let valorTotal = 0;
        for(let i = 0; i < this.productos.length; i++){
            valorTotal += this.productos[i].precio * this.productos[i].cantidad;
        }
        return valorTotal;
    }
    listarProductos(){
        for(let i = 0; i < this.productos.length; i++){
            const producto = this.productos[i];
            console.log(`Nombre: ${producto.nombre}, Precio:${producto.precio}, Cantidad: ${producto.cantidad}`);
        }
    }
}
const miInventario = new Inventario();
miInventario.agregarProducto("Producto1", 20, 3);
miInventario.agregarProducto("Producto2",12, 5);
miInventario.agregarProducto("Producto3",5, 2);
console.log(miInventario);
miInventario.listarProductos();
console.log(miInventario.calcularValorTotal());