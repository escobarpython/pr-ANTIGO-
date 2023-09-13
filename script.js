document.addEventListener("DOMContentLoaded", function () {
    const p1Input = document.getElementById("p1");
    const p2Input = document.getElementById("p2");
    const iafInput = document.getElementById("iaf");
    const calculateButton = document.getElementById("calculate");
    const resultadoDiv = document.getElementById("resultado");

    calculateButton.addEventListener("click", function () {
        const p1 = parseFloat(p1Input.value);
        const p2 = parseFloat(p2Input.value);
        const iaf = parseFloat(iafInput.value);

        // Verificar se todos os campos foram preenchidos
        if (isNaN(p1) || isNaN(p2) || isNaN(iaf)) {
            resultadoDiv.textContent = "Por favor, preencha todas as notas.";
        } else if (p1 < 0 || p1 > 3 || p2 < 0 || p2 > 2 || iaf < 0 || iaf > 2) {
            resultadoDiv.textContent = "Por favor, insira notas dentro dos limites permitidos.";
        } else {
            const provas1 = p1 + p2 + iaf;
            const notaNecessariaNaPR = (7 - provas1) * 2;

            if (notaNecessariaNaPR < 0) {
                resultadoDiv.textContent = "Acima da Média.";
            } else {
                resultadoDiv.textContent = `Nota necessária na PR: ${notaNecessariaNaPR.toFixed(2)}`;
            }
        }
    });
});
