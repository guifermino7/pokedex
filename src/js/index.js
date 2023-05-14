const botaoAlterarTema = document.getElementById("botaoAlterarTema");
const body = document.querySelector("body");
const imgBotaoTrocaTema = document.querySelector(".imagemBotao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modoEscuro");

    body.classList.toggle("modoEscuro");

    if(modoEscuroAtivo){
        imgBotaoTrocaTema.setAttribute("src", "./src/img/sun.png");
    } else {
        imgBotaoTrocaTema.setAttribute("src", "./src/img/moon.png");
    }
});