// const precio = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioDescuento = (precio * (porcentajeConDescuento) / 100);

    return precioDescuento
}


// console.log({
//     precio,
//     descuento,
//     porcentajeConDescuento,
//     precioDescuento,
// })