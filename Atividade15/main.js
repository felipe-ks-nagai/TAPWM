document.getElementById('curso').addEventListener('change', selecionarCurso);

function selecionarCurso() {
    const curso = document.getElementById('curso').value;
    if (confirm("Quer abrir a janela do " + curso + "?")) {
        window.open("abaCurso.html?curso=" + curso, "_blank", "width=600,height=300,scrollbars=yes");
    }
}

if(window.location.pathname.includes('abaCurso.html')) {
    const curso = window.location.search.split('=')[1];
    document.getElementById('curso').innerHTML = curso;
}