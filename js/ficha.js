const upload =
document.getElementById("uploadFoto");

upload.addEventListener("change",(e)=>{

    const arquivo =
    e.target.files[0];

    if(!arquivo) return;

    const leitor =
    new FileReader();

leitor.onload = function(){

    const novaFoto =
    leitor.result;

    document.getElementById("foto").src = novaFoto;
const fotoCurriculo =
document.getElementById(
    "fotoCurriculo"
);

if(fotoCurriculo){

    fotoCurriculo.src =
    novaFoto;

}

    localStorage.setItem(
        "fotoPersonagem",
        novaFoto
    );

    salvar();

};

    leitor.readAsDataURL(arquivo);

});

function alterarValor(id,valor){

    const atualEl =
    document.getElementById(id);

    let atual =
    parseInt(
        atualEl.innerText
    );

    atual += valor;

    if(atual < 0){

        atual = 0;

    }

    const maxId =
    id.replace(
        "Atual",
        "Max"
    );

    const maximo =
    parseInt(
        document
        .getElementById(maxId)
        .innerText
    );

    if(atual > maximo){

        atual = maximo;

    }

    atualEl.innerText =
    atual;

    atualizarBarras();
    salvar();
}
function atualizarBarras(){

    atualizarBarra(
        "vidaAtual",
        "vidaMax",
        "barraVida"
    );

    atualizarBarra(
        "energiaAtual",
        "energiaMax",
        "barraEnergia"
    );

    atualizarBarra(
        "sanidadeAtual",
        "sanidadeMax",
        "barraSanidade"
    );

}
function atualizarBarra(
    atualId,
    maxId,
    barraId
){

    const atual =
    parseInt(
        document
        .getElementById(atualId)
        .innerText
    );

    const max =
    parseInt(
        document
        .getElementById(maxId)
        .innerText
    );

    const porcentagem =
    (atual/max)*100;

    document
    .getElementById(barraId)
    .style.width =
    porcentagem+"%";
}
const uploadAdesivo =
document.getElementById(
"uploadAdesivo"
);

uploadAdesivo.addEventListener(
"change",
adicionarAdesivo
);
function adicionarAdesivo(event){

    console.log("adicionarAdesivo executou");
    const arquivo =
    event.target.files[0];

    if(!arquivo) return;

    const leitor =
    new FileReader();

    leitor.onload = function(){
            console.log("imagem carregada");

        criarAdesivo(
            leitor.result,
            500,
            500
        );
        uploadAdesivo.value = "";

    };

    leitor.readAsDataURL(
        arquivo
    );

}
function criarAdesivo(src,x,y){
        console.log("criando adesivo");
        

    const img =
    document.createElement("img");

    img.src = src;
    img.onload = () => {

    const maxLargura = 150;
    const maxAltura = 150;

    let largura = img.naturalWidth;
    let altura = img.naturalHeight;

    const escala = Math.min(
        maxLargura / largura,
        maxAltura / altura,
        1
    );

    img.style.width =
    (largura * escala) + "px";

    img.style.height =
    (altura * escala) + "px";

};

    img.classList.add(
        "adesivo"
    );

    img.style.left =
    x+"px";

    img.style.top =
    y+"px";

document
.getElementById("ficha")
.appendChild(img);
  

    tornarArrastavel(img);

    salvarAdesivos();
    img.addEventListener("dblclick",()=>{

    if(confirm("Excluir adesivo?")){

        img.remove();

        salvarAdesivos();

    }

});
}
function tornarArrastavel(el){

    let segurando =
    false;

    let offsetX = 0;
    let offsetY = 0;

    el.addEventListener(
    "mousedown",
    (e)=>{

        segurando=true;

        offsetX =
        e.offsetX;

        offsetY =
        e.offsetY;

    });

    document.addEventListener(
    "mousemove",
    (e)=>{

        if(!segurando)
            return;

        const ficha =
        document
        .getElementById(
            "ficha"
        );

        const rect =
        ficha.getBoundingClientRect();

        el.style.left =
        (e.clientX
        - rect.left
        - offsetX)
        +"px";

        el.style.top =
        (e.clientY
        - rect.top
        - offsetY)
        +"px";

    });

    document.addEventListener(
    "mouseup",
    ()=>{

        if(segurando){

            salvarAdesivos();

        }

        segurando=false;

    });

}
function salvarAdesivos(){

    const adesivos =
    document.querySelectorAll(
        ".adesivo"
    );

    const dados = [];

    adesivos.forEach(a=>{

        dados.push({

            src:a.src,

            left:
            a.style.left,

            top:
            a.style.top

        });

    });

    localStorage.setItem(
        "adesivos",
        JSON.stringify(dados)
    );

}
function carregarAdesivos(){

    const salvo =
    localStorage.getItem(
        "adesivos"
    );

    if(!salvo) return;

    const dados =
    JSON.parse(salvo);

    dados.forEach(a=>{

        criarAdesivo(
            a.src,
            parseInt(a.left),
            parseInt(a.top)
        );

    });

}
window.addEventListener(
"load",
carregarAdesivos
);
atualizarBarras();
document
.getElementById("foto")
.addEventListener("click",()=>{

    document
    .getElementById("uploadFoto")
    .click();

});
document
.getElementById("iconeAdesivo")
.addEventListener("click",()=>{

    document
    .getElementById("uploadAdesivo")
    .click();

});
document
.getElementById("vidaMax")
.addEventListener("input",()=>{

    atualizarBarras();
    salvar();

});

document
.getElementById("energiaMax")
.addEventListener("input",()=>{

    atualizarBarras();
    salvar();

});

document
.getElementById("sanidadeMax")
.addEventListener("input",()=>{

    atualizarBarras();
    salvar();

});
