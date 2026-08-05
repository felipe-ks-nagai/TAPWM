function validar() {
    const nome = document.forms["form"].elements["nome"].value;
    const email = document.forms["form"].elements["email"].value;
    const commento = document.forms["form"].elements["commento"].value;
    const primeira_vez = document.forms["form"].elements["primeira_vez"].value;

    if (nome.length < 10) {
        alert("Nome deve ter pelo menos 10 caracteres");
        return false;
    }
    if (email.length < 10) {
        alert("Email deve ter pelo menos 10 caracteres");
        return false;
    }
    if (commento.length < 20) {
        alert("Comentario deve ter pelo menos 20 caracteres");
        return false;
    }
    if (primeira_vez === "sim") {
        alert("Primeira vez nesta pagina");
    }
    else {
        alert("Não é a primeira vez nesta pagina");
    }
    return true;
}