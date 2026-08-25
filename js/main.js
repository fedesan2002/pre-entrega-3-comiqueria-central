const NOMBRE_TIENDA = "Comiquería Central";


function calcularDescuento(cantidad, subtotal) {
    if (cantidad >= 3) {
        return subtotal * 0.10;
    } else if (cantidad === 2) {
        return subtotal * 0.05;
    } else {
        return 0;
    }
}


const calcularSubtotal = (cantidad, precio) => {
    return cantidad * precio;
};


const mostrarCompra = function (
    comic,
    cantidad,
    subtotal,
    descuento,
    total
) {
    const mensaje =
        "Cómic o manga: " + comic +
        "\nCantidad: " + cantidad +
        "\nSubtotal: $" + subtotal.toFixed(2) +
        "\nDescuento: $" + descuento.toFixed(2) +
        "\nTotal: $" + total.toFixed(2);

    alert(mensaje);
    console.log(mensaje);
};


function iniciarSimulador(nombreTienda) {
    alert("¡Bienvenido a " + nombreTienda + "!");

    const usuario = prompt("Ingresá tu nombre:");

    let seguirComprando = true;
    let totalCompra = 0;

    while (seguirComprando) {
        const comic = prompt(
            "¿Qué cómic o manga querés comprar?\n" +
            "Escribí ESC para terminar."
        );

        if (comic === null || comic.toUpperCase() === "ESC") {
            break;
        }

        const cantidad = parseInt(
            prompt("¿Cuántas unidades querés?")
        );

        const precio = parseFloat(
            prompt("¿Cuál es el precio de cada unidad?")
        );

        if (
            isNaN(cantidad) ||
            isNaN(precio) ||
            cantidad <= 0 ||
            precio <= 0
        ) {
            alert("Ingresá valores válidos.");
            continue;
        }

       
        const subtotal = calcularSubtotal(cantidad, precio);

        const descuento = calcularDescuento(
            cantidad,
            subtotal
        );

        const totalProducto = subtotal - descuento;

        totalCompra += totalProducto;

        mostrarCompra(
            comic,
            cantidad,
            subtotal,
            descuento,
            totalProducto
        );

        const continuar = prompt(
            "Escribí SI para seguir comprando o ESC para finalizar."
        );

        if (
            continuar === null ||
            continuar.toUpperCase() === "ESC"
        ) {
            seguirComprando = false;
        }
    }

    if (totalCompra > 0) {
        const resultado =
            "Cliente: " + usuario +
            "\nTotal de la compra: $" +
            totalCompra.toFixed(2);

        alert(resultado);
        console.log(resultado);
    } else {
        alert("No realizaste ninguna compra.");
        console.log("No se realizaron compras.");
    }
}
