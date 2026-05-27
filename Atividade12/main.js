document.addEventListener("DOMContentLoaded", () => {


    const janela = document.getElementById("janela");
    const texto = document.getElementById("texto");
    const reparar = document.getElementById("reparar");

    janela.addEventListener("mouseover", () => {
        texto.textContent = "Janela Aberta";
        janela.src = "https://m.media-amazon.com/images/I/714-A3XBRNL._AC_UF894,1000_QL80_.jpg";
    });
    
    janela.addEventListener("mouseleave", () => {
        texto.textContent = "Janela Fechada";
        janela.src = "https://previews.123rf.com/images/ninell/ninell1111/ninell111100084/11100959-closed-window-with-gold-handles-vector.jpg";
    });
    janela.addEventListener("click", () => {
        texto.textContent = "Janela Quebrada";
        janela.src = "https://thumbs.dreamstime.com/b/janela-quebrada-em-um-edif%C3%ADcio-dilapidado-uma-pr%C3%A9dio-moldura-%C3%A9-danificada-com-tijolo-exposto-e-gesso-de-migalhas-os-379968747.jpg";
    });

})