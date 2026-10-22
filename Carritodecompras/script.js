
// 1. Precios de los productos
const precioMouse    = 60;
const precioTeclado  = 120;
const precioMonitor  = 800;
const precioAudifonos = 160;

// 2. Estado de la compra
let cantidad  = 0;
let subtotal  = 0;
let descuento = 0;
let total     = 0;
let pagado    = false;

// 3. Elementos de la página
const cantidadTexto  = document.getElementById("cantidad");
const subtotalTexto  = document.getElementById("subtotal");
const descuentoTexto = document.getElementById("descuento");
const totalTexto     = document.getElementById("total");
const mensajeTexto   = document.getElementById("mensaje");
const campoCodigo    = document.getElementById("codigo");

const botonMouse     = document.getElementById("mouse");
const botonTeclado   = document.getElementById("teclado");
const botonMonitor   = document.getElementById("monitor");
const botonAudifonos = document.getElementById("audifonos");
const botonPagar     = document.getElementById("pagar");
const botonReiniciar = document.getElementById("reiniciar");

// 4. Funciones
function actualizarPantalla() {

  // TODO 1 — Mostrar los valores
  cantidadTexto.textContent  = cantidad;
  subtotalTexto.textContent  = "$" + subtotal;
  descuentoTexto.textContent = "$" + descuento;
  totalTexto.textContent     = "$" + total;

  // TODO 2 — Controlar los botones
  if (pagado) {
    botonMouse.disabled     = true;
    botonTeclado.disabled   = true;
    botonMonitor.disabled   = true;
    botonAudifonos.disabled = true;
    botonPagar.disabled     = true;
    campoCodigo.disabled    = true;
  } else {
    botonMouse.disabled     = false;
    botonTeclado.disabled   = false;
    botonMonitor.disabled   = false;
    botonAudifonos.disabled = false;
    campoCodigo.disabled    = false;
    botonPagar.disabled     = (cantidad === 0);
  }

  // TODO 3 — Actualizar el mensaje
  if (pagado) {
    mensajeTexto.textContent = "Compra pagada. Total: $" + total;
  } else if (cantidad === 0) {
    mensajeTexto.textContent = "Agrega productos para empezar.";
  } else if (cantidad === 1) {
    mensajeTexto.textContent = "Llevas 1 producto. Subtotal: $" + subtotal;
  } else {
    mensajeTexto.textContent = "Llevas " + cantidad + " productos. Subtotal: $" + subtotal;
  }
}

function agregarMouse() {
  subtotal = subtotal + precioMouse;
  cantidad = cantidad + 1;
  total    = subtotal;
  actualizarPantalla();
}

// TODO 4 — Agregar teclado
function agregarTeclado() {
  subtotal = subtotal + precioTeclado;
  cantidad = cantidad + 1;
  total    = subtotal;
  actualizarPantalla();
}

// TODO 5 — Agregar monitor
function agregarMonitor() {
  subtotal = subtotal + precioMonitor;
  cantidad = cantidad + 1;
  total    = subtotal;
  actualizarPantalla();
}

// TODO 6 — Agregar audífonos
function agregarAudifonos() {
  subtotal = subtotal + precioAudifonos;
  cantidad = cantidad + 1;
  total    = subtotal;
  actualizarPantalla();
}

function pagar() {
  // TODO 7 — Validar que haya productos
  if (cantidad === 0) {
    mensajeTexto.textContent = "Agrega al menos un producto antes de pagar.";
  } else {

    // TODO 8 — Calcular el porcentaje
    let porcentaje = 0;
    if (subtotal >= 1000) {
      porcentaje = 20;
    } else {
      if (subtotal >= 500) {
        porcentaje = 10;
      } else {
        if (subtotal >= 200) {
          porcentaje = 5;
        }
      }
    }

    // TODO 9 — Aplicar el código
    const codigo = campoCodigo.value.trim();
    if (codigo === "WEB10") {
      porcentaje = porcentaje + 10;
    }

    // TODO 10 — Calcular y cobrar
    descuento = subtotal * porcentaje / 100;
    total     = subtotal - descuento;
    pagado    = true;
    actualizarPantalla();
  }
}

function reiniciar() {
  // TODO 11 — Reiniciar
  cantidad  = 0;
  subtotal  = 0;
  descuento = 0;
  total     = 0;
  pagado    = false;
  campoCodigo.value = "";
  actualizarPantalla();
}

// TODO 12 — Conectar los eventos
botonMouse.addEventListener("click", agregarMouse);
botonTeclado.addEventListener("click", agregarTeclado);
botonMonitor.addEventListener("click", agregarMonitor);
botonAudifonos.addEventListener("click", agregarAudifonos);
botonPagar.addEventListener("click", pagar);
botonReiniciar.addEventListener("click", reiniciar);

// 6. Primera pintura
actualizarPantalla();
