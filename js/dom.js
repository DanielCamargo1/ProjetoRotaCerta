function IniciarViagem() {
    const inputGasolina = document.getElementById("gasolinaInicial");
    const finalContainer = document.getElementById("stop");
    const buttonFinalizar = document.getElementById("buttonFinal");


    let value = parseFloat(inputGasolina.value);

    if (isNaN(value) || value <= 0) {
        alert("É necessário informar um valor válido para gasolina.");
    } else {
        finalContainer.style.display = "block";
        buttonFinalizar.style.display = "block";
    }
}
