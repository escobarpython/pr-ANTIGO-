document.addEventListener("DOMContentLoaded", function () {
    const p1Input = document.getElementById("p1");
    const p2Input = document.getElementById("p2");
    const iafInput = document.getElementById("iaf");
    const recuperacaoInput = document.getElementById("recuperacao");
    const calculateButton = document.getElementById("calculate");
    const resultadoDiv = document.getElementById("resultado");
    const darkModeToggle = document.getElementById("dark-mode");

    calculateButton.addEventListener("click", function () {
        const p1 = parseFloat(p1Input.value) || 0;
        const p2 = parseFloat(p2Input.value) || 0;
        const iaf = parseFloat(iafInput.value) || 0;
        const recuperacao = parseFloat(recuperacaoInput.value) || 0;

        const notaTotal = p1 + p2 + iaf + recuperacao;
        resultadoDiv.textContent = `Nota necessária na Prova de Recuperação: ${7 - notaTotal}`;
    });

    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });
});
