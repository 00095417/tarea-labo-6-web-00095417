var tienda =[];

window.onload = function(){
    opcion();   
}
class Producto{
    constructor(codigo,descripPro,typeProduc,precCompra, precVenta,stock){
        this.codigo = codigo;
        this.descripPro = descripPro;
        this.typeProduc = typeProduc;
        this.precCompra = precCompra;
        this.precVenta = precVenta;
        this.stock = stock;
    }
    newPrecCompra(newPrec){
        this.precCompra = newPrec;
    }
    newPrecVenta(newPrec){
        this.precVenta = newPrec;
    }
    newStock(stock){
        this.stock = stock;
    }
}
function opcion(){
    switch  (prompt("Elija una opcion:\n"+
                    "1- Agregar producto\n"+
                    "2- Modificar stock\n"+
                    "3- Registrar venta y reducir stock\n"+
                    "4- Promedio de ventas realizadas\n"+
                    "5- Mostrar productos en Stock 0\n"+
                    "6- Salir")){
        case "1":
            agregarProduc();
            break;
        case "2":
            modificarStock();
            break;
        case "3":
            registrarReducir();
            break;
        case "4":
            promVentas();
            break;
        case "5":
            prducStock();
            break;
        case "6":
            console.log("Salir del sistema");
            break;
    }
}
function agregarProduc(){
    tienda.push(new Producto(prompt("Codigo:"),
                             prompt("Descripción:"),
                             prompt("Tipo de producto:"),
                             prompt("Precio de compra:"),
                             prompt("Precio de venta"),
                             prompt("Stock:")));
}
function modificarStock(){
    let buscarCodigo=prompt("Ingrese codigo:");
    for (let i of tienda){
        if (i.codigo==buscarCodigo){
            i.newStock(prompt("Stock:"))
        }else{
            alert("Porducto no encontrado");
        }
    }
}
function registrarReducir(){
    console.log("Registrar venta y reducir stock");
}
function promVentas(){
    console.log("Mostrar promedio de ventas realizadas");
}
function prducStock(){
    console.log("Mostrar productos en stock 0");
}