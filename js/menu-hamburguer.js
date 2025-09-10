const menu_hamburguer = document.querySelector(".menu__hamburguer");
const elementos_cabecalho = document.querySelector(".elementos__cabecalho");
const ancoras = document.querySelector(".ancoras");

function ativar_menu(){
    menu_hamburguer.classList.toggle("active");
    elementos_cabecalho.classList.toggle("active");
    ancoras.classList.toggle("active");    
}

if (menu_hamburguer) {
    menu_hamburguer.addEventListener("click", ativar_menu);
}
