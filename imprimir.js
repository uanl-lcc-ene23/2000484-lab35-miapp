const listaGastos = [];
const tipoGastoInput = document.getElementById("tipo-gasto");
const montoGastoInput = document.getElementById("monto-gasto");
const guardarGastoButton = document.getElementById("guardar-gasto");
const listaGastosElement = document.getElementById("lista-gastos");

function agregarGasto() {
  const tipoGasto = tipoGastoInput.value;
  const montoGasto = parseFloat(montoGastoInput.value);
  if (tipoGasto.trim() !== "" && !isNaN(montoGasto)) {
    const gasto = {
      tipo: tipoGasto,
      monto: montoGasto
    };
    listaGastos.push(gasto);
    actualizarListaGastos();
    tipoGastoInput.value = "";
    montoGastoInput.value = "";
  } else {
    alert("Ingrese un tipo de gasto y un monto válido.");
  }
}

function actualizarListaGastos() {
  listaGastosElement.innerHTML = "";
  listaGastos.forEach((gasto) => {
    const item = document.createElement("ion-item");
    item.textContent = `${gasto.tipo}: $${gasto.monto.toFixed(2)}`;
    listaGastosElement.appendChild(item);
  });
}

guardarGastoButton.addEventListener("click", agregarGasto);

// Agregar menu lateral
const menuLateral = document.createElement("ion-menu");
menuLateral.setAttribute("side", "start");
menuLateral.setAttribute("menu-id", "menu-lateral");

// Agregar encabezado
const encabezadoMenuLateral = document.createElement("ion-header");
const toolbarMenuLateral = document.createElement("ion-toolbar");
toolbarMenuLateral.setAttribute("color", "primary");
const tituloMenuLateral = document.createElement("ion-title");
tituloMenuLateral.textContent = "Hola Menu";
toolbarMenuLateral.appendChild(tituloMenuLateral);
encabezadoMenuLateral.appendChild(toolbarMenuLateral);
menuLateral.appendChild(encabezadoMenuLateral);

// Agregar contenido
const contenidoMenuLateral = document.createElement("ion-content");
const listaOpcionesMenuLateral = document.createElement("ion-list");
const opcion1MenuLateral = document.createElement("ion-item");
opcion1MenuLateral.innerHTML = "<ion-icon name='settings'></ion-icon>Opción 1";
const opcion2MenuLateral = document.createElement("ion-item");
opcion2MenuLateral.innerHTML = "<ion-icon name='information-circle'></ion-icon>Opción 2";
listaOpcionesMenuLateral.appendChild(opcion1MenuLateral);
listaOpcionesMenuLateral.appendChild(opcion2MenuLateral);
contenidoMenuLateral.appendChild(listaOpcionesMenuLateral);

// Agregar botón "Volver al inicio"
const botonVolverInicio = document.createElement("ion-button");
botonVolverInicio.setAttribute("fill", "clear");
botonVolverInicio.setAttribute("expand", "full");
botonVolverInicio.setAttribute("routerLink", "/");
botonVolverInicio.innerHTML = "<ion-icon name='arrow-back'></ion-icon>Volver al inicio";
contenidoMenuLateral.appendChild(botonVolverInicio);

const comentarioMenuLateral = document.createElement("div");
comentarioMenuLateral.setAttribute("style", "font-size: 0.75rem; text-align: center; margin-top: 8px;");
comentarioMenuLateral.textContent = "Menu principal";
contenidoMenuLateral.appendChild(comentarioMenuLateral);
  
const menuButton = document.createElement("ion-button");
menuButton.setAttribute("slot", "start");
menuButton.setAttribute("menu-toggle", "");
menuButton.innerHTML = "<ion-icon name='menu'></ion-icon>";
toolbarMenuLateral.appendChild(menuButton);

const volverInicioButton = document.getElementById("volver-inicio");
volverInicioButton.addEventListener("click", () => {
  const menu = document.querySelector("ion-menu");
  menu.close();
});