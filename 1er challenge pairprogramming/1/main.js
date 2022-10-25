const inputTipo = document.querySelector('#tipo');
let inputOficina = document.querySelector('#oficina');

function Auto() {
    switch (inputTipo.value) {
        case "Gasolina":
            inputOficina.value = "Oficina 100";
            break;
        case "Diesel":
            inputOficina.value = "Oficina 200";
            break;
        case "Electrico":
            inputOficina.value = "Oficina 300";
            break;
        default:
            inputOficina.value = "Ingrese una tipo valida";
            break;
    }
}
