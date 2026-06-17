function salvar(){

    const inputs =
    document.querySelectorAll(
        "input, textarea, img, [contenteditable='true']"
    );

    const dados = {};

inputs.forEach(campo=>{

    if(campo.type === "file"){
        return;
    }

    const chave =
    campo.id || campo.className;

    dados[chave] =
    campo.value;

});
const foto =
document.getElementById("foto");

if(foto){

    dados.foto =
    foto.src;

}
dados.vidaAtual =
document.getElementById("vidaAtual").innerText;

dados.vidaMax =
document.getElementById("vidaMax").innerText;

dados.energiaAtual =
document.getElementById("energiaAtual").innerText;

dados.energiaMax =
document.getElementById("energiaMax").innerText;

dados.sanidadeAtual =
document.getElementById("sanidadeAtual").innerText;

dados.sanidadeMax =
document.getElementById("sanidadeMax").innerText;

    localStorage.setItem(
        "personagem",
        JSON.stringify(dados)
    );

}

function carregar(){

    const salvo =
    localStorage.getItem(
        "personagem"
    );

    if(!salvo) return;

    const dados =
    JSON.parse(salvo);

    Object.keys(dados)
    .forEach(chave=>{

        const campo =
        document.getElementById(chave)
        ||
        document.querySelector(
            "."+chave
        );

        if(campo){

            if(campo.type === "file"){
                return;
            }

            campo.value =
            dados[chave];

        }

    });

    if(dados.vidaAtual)
        document.getElementById("vidaAtual").innerText =
        dados.vidaAtual;

    if(dados.vidaMax)
        document.getElementById("vidaMax").innerText =
        dados.vidaMax;

    if(dados.energiaAtual)
        document.getElementById("energiaAtual").innerText =
        dados.energiaAtual;

    if(dados.energiaMax)
        document.getElementById("energiaMax").innerText =
        dados.energiaMax;

    if(dados.sanidadeAtual)
        document.getElementById("sanidadeAtual").innerText =
        dados.sanidadeAtual;

    if(dados.sanidadeMax)
        document.getElementById("sanidadeMax").innerText =
        dados.sanidadeMax;

    const foto =
    document.getElementById("foto");

    if(foto && dados.foto){

        foto.src =
        dados.foto;

    }
    const fotoSalva =
localStorage.getItem(
    "fotoPersonagem"
);

if(fotoSalva){

    const foto =
    document.getElementById("foto");

    if(foto){

        foto.src =
        fotoSalva;

    }

    const fotoCurriculo =
    document.getElementById(
        "fotoCurriculo"
    );

    if(fotoCurriculo){

        fotoCurriculo.src =
        fotoSalva;

    }

}

    atualizarBarras();

}


document
.addEventListener(
"input",
salvar
);

window.onload =
carregar;