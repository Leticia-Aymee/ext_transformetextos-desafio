// Programa - Modelo 1
window.document.addEventListener("DOMContentLoaded", function () {
  let resultadoEl = document.querySelector("#result");

  resultadoEl.innerHTML = "Resultado";
  resultadoEl.style.color = "gray";

  // Botão Letra Maiúscula
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      resultadoEl.innerHTML = inputText.toUpperCase();
      resultadoEl.style.color = "black";
    });

  // Botão Letra Minúscula
  window.document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      resultadoEl.innerHTML = inputText.toLowerCase();
      resultadoEl.style.color = "black";
    });

  // Botão Primeira Letra Maíuscula
  window.document
    .querySelector("#btnPriMaiuscula")
    .addEventListener("click", function () {
      let texto = document.querySelector("#input-text").value.toLowerCase();

      let resultado = texto
        .split(/(?<=[.!?])\s*/)
        .map(frase => frase.charAt(0).toUpperCase() + frase.slice(1))
        .join(" ");

      resultadoEl.innerHTML = resultado;
      resultadoEl.style.color = "black";
    });

    // Botão Limpar
    window.document
    .querySelector("#btnLimpar")
    .addEventListener("click", function () {
      document.querySelector("#input-text").value = "";
      document.querySelector("#result").innerHTML = "Resultado";
      resultadoEl.innerHTML = "Resultado";
      resultadoEl.style.color = "gray";
    });


    // Botão Duplicar
    window.document
    .querySelector("#btnDuplicar")
    .addEventListener("click", function () {
      let input = document.querySelector("#input-text").value;
      resultadoEl.innerText = input + " " + input;
      resultadoEl.style.color = "black";
    });

});
