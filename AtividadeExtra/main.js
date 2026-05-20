document.addEventListener("DOMContentLoaded", () => {
    Objeto();
})

function Objeto(){

const pessoa1 = {
    nome: 'Manuel',
    idade: 23,
    hobby: 'jogar videogame'
}

const pessoa2 = new Object()
pessoa2.nome = 'Leandro';
pessoa2.idade = 15;
pessoa2.hobby = 'Gosto de ler livro';


function Pessoa3(nome, idade, hobby){
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
}

const pessoa3 = new Pessoa3("Lucas", 24, "Andar de skate");

class Pessoa{
    constructor(nome, idade, hobby){
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
    }
}

const pessoa4 = new Pessoa("Mariana", 31, "Fotografia");

const pessoa5 = Object.create({})
pessoa5.nome = "Rafael";
pessoa5.idade = 19;
pessoa5.hobby = "Tocar violão";

alert(`Meu nome é ${pessoa1.nome}, minha idade é ${pessoa1.idade}, meu hobby é ${pessoa1.hobby}`);
alert(`Meu nome é ${pessoa2.nome}, minha idade é ${pessoa2.idade}, meu hobby é ${pessoa2.hobby}`);
alert(`Meu nome é ${pessoa3.nome}, minha idade é ${pessoa3.idade}, meu hobby é ${pessoa3.hobby}`);
alert(`Meu nome é ${pessoa4.nome}, minha idade é ${pessoa4.idade}, meu hobby é ${pessoa4.hobby}`);
alert(`Meu nome é ${pessoa5.nome}, minha idade é ${pessoa5.idade}, meu hobby é ${pessoa5.hobby}`);
}
