//alert("conectado a javascript");
let inputBase = document.querySelector ('#baseImponible') ;
let inputIVA = document.querySelector ('#IVA');
let inputTotal = document.querySelector('#total');
const tipoIVa = 21;

function Calcular() {
    let base= Number(inputBase.value);
    let IVA = base * tipoIVa / 100;
    inputIVA.value = IVA;
    let total = base + IVA;
    inputTotal.value = total;
}

