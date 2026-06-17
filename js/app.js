const ficha =
document.getElementById("ficha");

const curriculo =
document.getElementById("curriculo");

document
.getElementById("btnFicha")
.addEventListener("click",()=>{

    ficha.style.display="block";
    curriculo.style.display="none";

});

document
.getElementById("btnCurriculo")
.addEventListener("click",()=>{

    ficha.style.display="none";
    curriculo.style.display="block";

});