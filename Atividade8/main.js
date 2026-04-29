function CalculoArray() {
    let lista = [];
    let soma = 0;
    let potencia1;
    let potencia2;

    let a = Number(document.querySelector("#valor1").value);
    let b = Number(document.querySelector("#valor2").value);
    let c = Number(document.querySelector("#valor3").value);

    lista.push(a, b, c);

    soma = lista[0] + lista[1] + lista[2];
    potencia1 = Math.pow(lista[0], 2);
    potencia2 = Math.pow(lista[1], 2);

    document.querySelector("#Resultado1").textContent = `A soma é ${soma}`;
    document.querySelector("#Resultado2").textContent = `O quadrado do primeiro é ${potencia1}`;
    document.querySelector("#Resultado3").textContent = `O quadrado do segundo é ${potencia2}`;
}
function Letras() {
    let lista = [
        document.querySelector("#letra1").value,
        document.querySelector("#letra2").value,
        document.querySelector("#letra3").value,
        document.querySelector("#letra4").value,
        document.querySelector("#letra5").value,
    ];

    let resultado = [];

    function permutar(arr, atual = []) {
        if (atual.length === 5) {
            resultado.push(atual.join(""));
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let copia = arr.slice();
            let letra = copia.splice(i, 1);

            permutar(copia, atual.concat(letra));
        }
    }

    permutar(lista);

    resultado = [...new Set(resultado)];

    resultado = resultado.slice(0, 10);

    document.querySelector("#ResultadoLetras").textContent = resultado.join(", ");
}