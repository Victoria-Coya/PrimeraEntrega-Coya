//Productos
const productos = [
    { id: 1, nombre: "Camiseta", precio: 5000 },
    { id: 2, nombre: "Pantalón", precio: 12000 },
    { id: 3, nombre: "Zapatillas", precio: 50000 }
];

//Variables
let carrito = [];
let total = 0;

// Función para mostrar productos disponibles
function mostrarProductos() {

    let mensaje = "Productos disponibles:\n";
    productos.forEach(prod => {
        mensaje += `${prod.id}. ${prod.nombre} - $${prod.precio}\n`;
    });

    return mensaje;
}

// Función para agregar productos al carrito
function agregarProducto() {

    let opcion;

    do {
        opcion = parseInt(prompt(mostrarProductos() + "\nIngrese el número del producto o 0 para finalizar:"));

        let productoSeleccionado = productos.find(p => p.id === opcion);
        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            total += productoSeleccionado.precio;
            alert(`${productoSeleccionado.nombre} agregado al carrito.`);
        } else if (opcion !== 0) {
            alert("Opción no válida. Intente de nuevo.");
        }
        
    } while (opcion !== 0);
}

// Función para mostrar el resumen de la compra
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
    } else {
        let mensaje = "Carrito de compras:\n";
        for (let i = 0; i < carrito.length; i++) {
            mensaje += `${i + 1}. ${carrito[i].nombre} - $${carrito[i].precio}\n`;
        }
        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }
}

// Función principal
function iniciarSimulador() {
    alert("Bienvenido a la tienda online");
    agregarProducto();
    mostrarCarrito();
    let confirmar = confirm("¿Desea confirmar la compra?");
    if (confirmar) {
        alert("Compra realizada con éxito. ¡Gracias por su compra!");
    } else {
        alert("Compra cancelada.");
    }
}

// Llamamos a la función principal
iniciarSimulador();
