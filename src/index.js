import "./styles/main.css";
import sum from "./utils/sum";

document.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstNumber = document.getElementById("first-value").value;
  const secondNumber = document.getElementById("second-value").value;
  const result = await sum(firstNumber, secondNumber);
  const resultDiv = null || document.getElementById("result");
  resultDiv.innerHTML = `<h1> El resultado es: ${result} </h1>`;
});
