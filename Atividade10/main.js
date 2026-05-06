let funcionarios = [];

function Forma() {
    switch (document.querySelector("#forma").value) {
        case "1":
            NewObject();
            break;
        case "2":
            ObjetoLiteral();
            break;
        case "3":
            Classe();
            break;
    }
}

function NewObject() {
    if (VerificarCampos() == false) {
        alert("Todos os campos são obrigatórios");
    }
    else {
        let funcionario = {};
        funcionario.matricula = document.querySelector("#matricula").value;
        funcionario.nome = document.querySelector("#nome").value;
        funcionario.telefone = document.querySelector("#telefone").value;
        funcionario.funcao = document.querySelector("#funcao").value;
        funcionarios.push(funcionario);
        document.querySelector("#saida").innerHTML = "";
        for (let i = 0; i < funcionarios.length; i++) {
            document.querySelector("#saida").innerHTML += "Matrícula: " + funcionarios[i].matricula + "<br>Nome: " + funcionarios[i].nome + "<br>Telefone: " + funcionarios[i].telefone + "<br>Função: " + funcionarios[i].funcao + "<br><br>";
        };
        Limpar();
    }
}

function ObjetoLiteral() {
    if (VerificarCampos() == false) {
        alert("Todos os campos são obrigatórios");
    }
    else {
        let matricula = document.querySelector("#matricula").value;
        let nome = document.querySelector("#nome").value;
        let telefone = document.querySelector("#telefone").value;
        let funcao = document.querySelector("#funcao").value;
        let funcionario = { matricula, nome, telefone, funcao };
        funcionarios.push(funcionario);
        document.querySelector("#saida").innerHTML = "";
        for (let i = 0; i < funcionarios.length; i++) {
            document.querySelector("#saida").innerHTML += "Matrícula: " + funcionarios[i].matricula + "<br>Nome: " + funcionarios[i].nome + "<br>Telefone: " + funcionarios[i].telefone + "<br>Função: " + funcionarios[i].funcao + "<br><br>";
        };
        Limpar();
    }
}

function Classe() {
    if (VerificarCampos() == false) {
        alert("Todos os campos são obrigatórios");
    }
    else {
        function Funcionario(matricula, nome, telefone, funcao) {
            this.matricula = matricula;
            this.nome = nome;
            this.telefone = telefone;
            this.funcao = funcao;
        }
        let matricula = document.querySelector("#matricula").value;
        let nome = document.querySelector("#nome").value;
        let telefone = document.querySelector("#telefone").value;
        let funcao = document.querySelector("#funcao").value;
        let funcionario = new Funcionario(matricula, nome, telefone, funcao);
        funcionarios.push(funcionario);
        document.querySelector("#saida").innerHTML = "";
        for (let i = 0; i < funcionarios.length; i++) {
            document.querySelector("#saida").innerHTML += "Matrícula: " + funcionarios[i].matricula + "<br>Nome: " + funcionarios[i].nome + "<br>Telefone: " + funcionarios[i].telefone + "<br>Função: " + funcionarios[i].funcao + "<br><br>";
        };
        Limpar();
    }
}

function Limpar() {
    document.querySelector("#matricula").value = "";
    document.querySelector("#nome").value = "";
    document.querySelector("#telefone").value = "";
    document.querySelector("#funcao").value = "";
}

function VerificarCampos() {
    let matricula = document.querySelector("#matricula").value;
    let nome = document.querySelector("#nome").value;
    let telefone = document.querySelector("#telefone").value;
    let funcao = document.querySelector("#funcao").value;
    if (matricula == "" || nome == "" || telefone == "" || funcao == "") {
        Limpar();
        return false;
    }
    return true;
}   