const ficha =
document.getElementById("ficha");

const curriculo =
document.getElementById("curriculo");

document
.getElementById("btnFicha")
.addEventListener("click",()=>{

    janelaFicha.style.display = "block";
janelaCurriculo.style.display = "none";

});

document
.getElementById("btnCurriculo")
.addEventListener("click",()=>{

    janelaFicha.style.display="none";
    janelaCurriculo.style.display="block";

});