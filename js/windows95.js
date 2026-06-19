const startBtn =
document.getElementById("startBtn");

const menu =
document.getElementById("menuIniciar");

startBtn.addEventListener("click",()=>{

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";

    }

});
document
.getElementById("abrirFicha")
.addEventListener("click",()=>{

    document
    .getElementById("janelaFicha")
    .style.display = "block";

    menu.style.display =
    "none";

});
document
.getElementById("abrirCurriculo")
.addEventListener("click",()=>{

    document
    .getElementById("janelaCurriculo")
    .style.display = "block";

    menu.style.display =
    "none";

});
document
.getElementById("fecharFicha")
.addEventListener("click",()=>{

    document
    .getElementById("janelaFicha")
    .style.display =
    "none";

});
document
.getElementById("fecharCurriculo")
.addEventListener("click",()=>{

    document
    .getElementById("janelaCurriculo")
    .style.display =
    "none";

});
tornarJanelaArrastavel("janelaFicha");
tornarJanelaArrastavel("janelaCurriculo");

function tornarJanelaArrastavel(id){

    const janela =
    document.getElementById(id);

    const barra =
    janela.querySelector(
        ".barra-titulo"
    );

    let arrastando =
    false;

    let offsetX = 0;
    let offsetY = 0;
barra.addEventListener(
    "touchstart",
    (e)=>{

        arrastando = true;

        const toque =
        e.touches[0];

        const rect =
        janela.getBoundingClientRect();

        offsetX =
        toque.clientX - rect.left;

        offsetY =
        toque.clientY - rect.top;

    }
);
document.addEventListener(
    "touchmove",
    (e)=>{

        if(!arrastando)
            return;

        const toque =
        e.touches[0];

        janela.style.left =
        (toque.clientX - offsetX)
        +"px";

        janela.style.top =
        (toque.clientY - offsetY)
        +"px";

    }
);
document.addEventListener(
    "touchend",
    ()=>{

        arrastando = false;

    }
);
    barra.addEventListener(
        "mousedown",
        (e)=>{

            arrastando = true;

            const rect =
            janela.getBoundingClientRect();

            offsetX =
            e.clientX - rect.left;

            offsetY =
            e.clientY - rect.top;

        }
    );

    document.addEventListener(
        "mousemove",
        (e)=>{

            if(!arrastando)
                return;

            janela.style.left =
            (e.clientX - offsetX)
            +"px";

            janela.style.top =
            (e.clientY - offsetY)
            +"px";

            janela.style.transform =
            "none";

        }
    );

    document.addEventListener(
        "mouseup",
        ()=>{

            arrastando =
            false;

        }
    );

}
const somBtn =
document.getElementById(
    "somBtn"
);

const somCRT =
document.getElementById(
    "somCRT"
);

let somLigado = false;

somBtn.addEventListener(
    "click",
    ()=>{

        if(!somLigado){

            somCRT.volume = 0.05;

            somCRT.play();

            somBtn.innerText =
            "🔊";

            somLigado = true;

        }else{

            somCRT.pause();

            somBtn.innerText =
            "🔇";

            somLigado = false;

        }

    }
);
somBtn.addEventListener(
    "click",
    ()=>{

        const menu =
        document.getElementById(
            "menuSom"
        );

        menu.style.display =
        menu.style.display === "block"
        ? "none"
        : "block";

    }
);
const slider =
document.getElementById(
    "volumeSlider"
);



slider.addEventListener(
    "input",
    ()=>{

        player.volume =
        slider.value / 100;

    }
);
const btnMusicas =
document.getElementById(
    "btnMusicas"
);
btnMusicas.addEventListener(
    "click",
    ()=>{

        const menu =
        document.getElementById(
            "menuMusicas"
        );

        menu.style.display =
        menu.style.display === "block"
        ? "none"
        : "block";

    }
);
const player =
document.getElementById(
    "musicaPlayer"
);

document
.querySelectorAll(".musica")
.forEach(btn=>{

    btn.addEventListener(
        "click",
        ()=>{

            player.src =
            "assets/sounds/" +
            btn.dataset.arquivo;

            player.play();

        }
    );

});
const btnPause =
document.getElementById(
    "btnPause"
);

btnPause.addEventListener(
    "click",
    ()=>{

        if(player.paused){

            player.play();

            btnPause.innerText =
            "⏸";

        }else{

            player.pause();

            btnPause.innerText =
            "▶";

        }

    }
);
document
.querySelectorAll(".musica")
.forEach(btn=>{

    btn.addEventListener(
        "click",
        ()=>{

            player.src =
            "assets/sounds/" +
            btn.dataset.arquivo;

            player.play();

            document
            .getElementById(
                "musicaAtual"
            )
            .innerText =
            btn.innerText;

        }
    );

});
document
.getElementById("iconeJogos")
.addEventListener(
    "click",
    ()=>{

        document
        .getElementById("janelaJogos")
        .style.display =
        "block";

    }
);
document
.getElementById("fecharJogos")
.addEventListener(
    "click",
    ()=>{

        document
        .getElementById("janelaJogos")
        .style.display =
        "none";

    }
);
let zoom = 1;

function aplicarZoom(){

    const desktop =
    document.getElementById("desktop");

    document.body.style.zoom = zoom;


    desktop.style.transformOrigin =
    "top left";

}
document
.getElementById("zoomMais")
.addEventListener("click",()=>{

    zoom += 0.1;

    aplicarZoom();

});

document
.getElementById("zoomMenos")
.addEventListener("click",()=>{

    zoom -= 0.1;

    if(zoom < 0.4)
        zoom = 0.4;

    aplicarZoom();

});
document
.querySelectorAll(".jogo")
.forEach(jogo=>{

    jogo.addEventListener(
        "click",
        ()=>{

            window.open(
                jogo.dataset.link,
                "_blank"
            );

        }
    );

});
