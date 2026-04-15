var usuarios = [];

function limparCampos() {
    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("opiniao").value = "";
}

function adicionarUsuario() {
    var usuario = {
        idade: document.getElementById("idade").value,
        sexo: document.getElementById("sexo").value,
        opiniao: document.getElementById("opiniao").value
    };

    usuarios.push(usuario);
    limparCampos();
}

function calcular() {
    if (usuarios.length === 0) {
        alert("Nenhum usuário cadastrado");
        return;
    }

    let totalIdade = 0;

    let pessimos = 0;
    let otimo = 0;
    let bom = 0;

    let mulher = 0;
    let homem = 0;

    let maisVelho = Number(usuarios[0].idade);
    let maisNovo = Number(usuarios[0].idade);

    for (let usuario of usuarios) {
        let idade = Number(usuario.idade);
        let opiniao = Number(usuario.opiniao);

        totalIdade += idade;

        if (idade > maisVelho) {
            maisVelho = idade;
        }

        if (idade < maisNovo) {
            maisNovo = idade;
        }

        if (opiniao === 1) pessimos++;
        else if (opiniao === 3) bom++;
        else if (opiniao === 4) otimo++;

        if (usuario.sexo.toLowerCase() === "f") {
            mulher++;
        } else {
            homem++;
        }
    }

    let media = totalIdade / usuarios.length;

    let percOtimo = (otimo / usuarios.length) * 100;
    let percBom = (bom / usuarios.length) * 100;

   alert(
        "Média idade: " + media +
        "\nMais velho: " + maisVelho +
        "\nMais novo: " + maisNovo +
        "\n\nPéssimo: " + pessimos +
        "\nMulheres: " + mulher +
        "\nHomens: " + homem +
        "\n\n% Ótimo: " + percOtimo.toFixed(2) + "%" +
        "\n% Bom: " + percBom.toFixed(2) + "%"
    );
}