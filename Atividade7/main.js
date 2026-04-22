
function MaiorNumero(){
    let a, b, c
    a = document.querySelector("#numero11").value;
    b = document.querySelector("#numero12").value;
    c = document.querySelector("#numero13").value;
    if(a > b && a > c) document.querySelector("#result1").textContent = `${a} é maior`
    else if(b > a && b > c ) document.querySelector("#result1").textContent = `${b} é maior`
    else document.querySelector("#result1").textContent = `${c} é maior`
}


function OrdemNumero(){
    const ordem = [
        Number(document.querySelector("#numero21").value),
        Number(document.querySelector("#numero22").value),
        Number(document.querySelector("#numero23").value)
    ].sort((a, b) => a - b);

    document.querySelector("#result2").textContent = ordem.join(" - ");
}

function Palindromo(){
    let palavra = document.querySelector("#palavra").value;
    palavra = palavra.toLowerCase().replace(/\s/g, "");
    const invertido = palavra.split("").reverse().join("");
    if(invertido == palavra) document.querySelector("#result3").textContent = "É palíndromo";
    else document.querySelector("#result3").textContent = "Não é palíndromo";
}

function Subconjunto() {
    let texto1 = document.querySelector("#texto1").value;
    let texto2 = document.querySelector("#texto2").value;

    if (!texto1.trim() || !texto2.trim()) {
        document.querySelector("#result4").textContent = "Não colocou texto ae";
        return;
    }

    texto1 = texto1.toLowerCase();
    texto2 = texto2.toLowerCase();

    if (texto1.includes(texto2)) {
        document.querySelector("#result4").textContent =
            "é um subconjunto";
    } else {
        document.querySelector("#result4").textContent =
            "não é um subconjunto";
    }
}

function DiaSemana(){
    const data = new Date(document.querySelector("#data").value);
    const diasDaSemana = [
    "Domingo", 
    "Segunda-feira", 
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
    ];

    const diaNome = diasDaSemana[data.getDay()];
    document.querySelector("#result5").textContent = diaNome
}