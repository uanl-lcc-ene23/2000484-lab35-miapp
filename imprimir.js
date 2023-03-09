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
