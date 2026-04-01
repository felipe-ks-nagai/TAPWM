

function CalcMedia(){
    let nome, nota1, nota2, nota3;
    nome = document.getElementById("nome").value;
    nota1 = parseFloat(document.getElementById("nota1").value);
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);
    alert(nome + " " + ((nota1+nota2+nota3)/3).toFixed(2));
}

function Continhas(){
    let num1, num2;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    alert("Soma:" + (num1 + num2));
    alert("Subtração:" + (num1 - num2));
    alert("Multiplicação:" + (num1*num2));
    alert("Divisão:" + (num1/num2).toFixed(2));
    alert("Resto da divisão:" + (num1%num2));
}