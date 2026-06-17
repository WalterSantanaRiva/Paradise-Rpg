window.addEventListener(
"load",
()=>{

    const fotoSalva =
    localStorage.getItem(
        "fotoPersonagem"
    );

    if(fotoSalva){

        document
        .getElementById(
            "fotoCurriculo"
        )
        .src = fotoSalva;

    }

});
