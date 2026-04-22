

function CalcularTriangulo(){
    const msg = "É possível formar um triângulo e é "
    let a, b, c
    a = document.querySelector("#numero1").value;
    b = document.querySelector("#numero2").value;
    c = document.querySelector("#numero3").value;

    if([a,b,c].every(v => !Number.isNaN(v))){
        if(
            a < b + c && 
            b < a + c &&
            c < a + b)
            {
                if(new Set([a,b,c]).size == 3) // escaleno
                {   
                    document.querySelector("#result").textContent = msg + "escaleno"
                }
                else if(new Set([a,b,c]).size == 2) // isósceles
                {
                    document.querySelector("#result").textContent = msg + "isósceles"
                }
                else if(new Set([a,b,c]).size == 1) // equilátero
                {
                    document.querySelector("#result").textContent = msg + "equilátero"
                }
            }
        else{
            document.querySelector("#result").textContent = "Não é possível formar um triângulo"
        }

    }
    else{
        document.querySelector("#result").textContent = "Um ou mais não são números"
        document.querySelector("#numero1").value == null;
        document.querySelector("#numero2").value == null;
        document.querySelector("#numero3").value == null;
    }
}