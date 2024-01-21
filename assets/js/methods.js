// Elementos del DOM

const nuevasTareas = document.getElementById("newTask");
const botonAgregar = document.getElementById("btn");
const listaDeTareas = document.getElementById("tableTask");
const contaTotales = document.getElementById("totales");
const tareasCompletadas = document.getElementById("tareaRealizada");

const listadoTareas = [
  { id: Date.now(), nombre: "preparar desayuno", realizada: false },
  { id: Date.now(), nombre: "limpiar", realizada: false },
  { id: Date.now(), nombre: "trabajar", realizada: false },
];

const borrarTarea = (id) => {
  const index = listadoTareas.findIndex((erase) => erase.id == id);
  listadoTareas.splice(index, 1);
  renderizar();
};

botonAgregar.addEventListener("click", () => {
  const ingresaTarea = nuevasTareas.value;
  listadoTareas.push({
    id: Date.now(),
    nombre: ingresaTarea,
    realizada: false,
  });
  nuevasTareas.value = "";
  //   console.log(listadoTareas);
  renderizar();
});

function renderizar() {
  let html = "";
  for (let contarTarea of listadoTareas) {
    html += `<li>
            ${contarTarea.id}
            ${contarTarea.nombre}
            <button onclick="borrarTarea(${contarTarea.id})">Delete</button>
            <button onclick="estado(${contarTarea.id})">state</button>
            </li>`;
  }
  contaTotales.innerHTML = `Total: ${listadoTareas.length}`;

  listaDeTareas.innerHTML = html;
  const filtro = listadoTareas.filter(
    (filter) => filter.realizada == true
  ).length;
  tareasCompletadas.innerHTML = `Realizadas: ${filtro}`;
}

const estado = (id) => {
  const listados = listadoTareas.findIndex((find) => find.id == id);
  if (listados !== -1) {
    listadoTareas[listados].realizada = !listadoTareas[listados].realizada;
    renderizar();
  }
};
renderizar();
