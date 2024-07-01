function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);

    const imcSpan = document.getElementById("imc");
    const situacaoSpan = document.getElementById("situacao");

    imcSpan.innerHTML = imc.toFixed(2);

    situacaoSpan.classList.remove("normal", "alerta", "perigo");

    if (imc < 16) {
        situacaoSpan.innerHTML = "Muito abaixo do peso";
        situacaoSpan.classList.add("perigo");
    } else if (imc >= 16 && imc < 17) {
        situacaoSpan.innerHTML = "Abaixo do peso";
        situacaoSpan.classList.add("alerta");
    } else if (imc >= 17 && imc < 18.5) {
        situacaoSpan.innerHTML = "Abaixo do peso";
        situacaoSpan.classList.add("alerta");
    } else if (imc >= 18.5 && imc < 25) {
        situacaoSpan.innerHTML = "Peso normal";
        situacaoSpan.classList.add("normal");
    } else if (imc >= 25 && imc < 30) {
        situacaoSpan.innerHTML = "Sobrepeso";
        situacaoSpan.classList.add("alerta");
    } else if (imc >= 30 && imc < 35) {
        situacaoSpan.innerHTML = "Obesidade I";
        situacaoSpan.classList.add("perigo");
    } else if (imc >= 35 && imc < 40) {
        situacaoSpan.innerHTML = "Obesidade II (severa)";
        situacaoSpan.classList.add("perigo");
    } else {
        situacaoSpan.innerHTML = "Obesidade III (mórbida)";
        situacaoSpan.classList.add("perigo");
    }
}
