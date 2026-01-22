const rojo = document.querySelector("#rojo");
const amarillo = document.querySelector("#amarillo");
const verde = document.querySelector("#verde");

const btnR = document.querySelector("#btnR");
const btnA = document.querySelector("#btnA");
const btnV = document.querySelector("#btnV");
const btnOff = document.querySelector("#btnOff");

const estado = document.querySelector("#estado");

btnR.addEventListener("click", () => {
    rojo.classList.add("rojo");
    amarillo.classList.remove("amarillo");
    verde.classList.remove("verde");

    estado.className = "estado rojo";
    estado.innerText = "Alto";
});

btnA.addEventListener("click", () => {
    rojo.classList.remove("rojo");
    amarillo.classList.add("amarillo");
    verde.classList.remove("verde");

    estado.className = "estado amarillo";
    estado.innerText = "Precaución";
});

btnV.addEventListener("click", () => {
    rojo.classList.remove("rojo");
    amarillo.classList.remove("amarillo");
    verde.classList.add("verde");

    estado.className = "estado verde";
    estado.innerText = "Avanza";
});

btnOff.addEventListener("click", () => {
    rojo.classList.remove("rojo");
    amarillo.classList.remove("amarillo");
    verde.classList.remove("verde");

    estado.className = "estado apagado";
    estado.innerText = "Estado: Apagado";
});
