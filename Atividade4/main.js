function Jogo(user){
    let computer = Math.floor(Math.random() * 3) + 1;
    console.log(user);
    console.log(computer);
    if (user === computer) {
    alert("Empate!");
    } else if (
    (user === 1 && computer === 3) ||  // tesoura corta papel
    (user === 2 && computer === 1) ||  // pedra quebra tesoura
    (user === 3 && computer === 2)     // papel cobre pedra
    ) {
    alert("Você ganhou!!");
    } else {
    alert("Você perdeu!!");
    }
}