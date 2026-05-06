function CalculadoraIMC(){
    let pessoa = {};
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let imc = peso / Math.pow(altura, 2);
    let resultado;
    if (imc < 18.5) {
        resultado = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = "Obesidade grau II";
    } else {
        resultado = "Obesidade grau III";
    }
    document.querySelector("#result").textContent = `Seu imc é ${imc} e seu estado é ${resultado}`;
}