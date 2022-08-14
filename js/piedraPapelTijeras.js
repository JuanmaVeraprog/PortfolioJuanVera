const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const VICTORIA = 1;
const DERROTA = 2;

let Jugando = false;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const maquinaImg = document.getElementById("maquina-img");

piedraBtn.addEventListener("click", () => {
    play(PIEDRA);
});
papelBtn.addEventListener("click", () => {
    play(PAPEL);
});
tijeraBtn.addEventListener("click", () => {
    play(TIJERA);
});

function play(userEleccion) {
    if(Jugando) return;

    Jugando = true;

    userImg.src = "../img/" + userEleccion + ".png";

    resultText.innerHTML = "Eligiendo!";

    const interval = setInterval(function(){
        const maquinaEleccion = calcMaquinaEleccion();
        maquinaImg.src = "../img/" + maquinaEleccion + ".png";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const MaquinaEleccion = calcMaquinaEleccion();
        const result = calcResult(userEleccion, MaquinaEleccion);

        maquinaImg.src = "../img/" + MaquinaEleccion + ".png";

        switch (result) {
            case EMPATE:
                resultText.innerHTML = "Empate!";
                break;
            case VICTORIA:
                resultText.innerHTML = "Has ganado!";
                break;
            case DERROTA:
                resultText.innerHTML = "Has perdido!";
                break;
        }
        Jugando = false;
    }, 3000);
}

function calcMaquinaEleccion() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

function calcResult(userEleccion, MaquinaEleccion) {
    if (userEleccion === MaquinaEleccion) {
        return EMPATE;

    } else if (userEleccion === PIEDRA) {

        if (MaquinaEleccion === PAPEL) return DERROTA;
        if (MaquinaEleccion === TIJERA) return VICTORIA;

    } else if (userEleccion === PAPEL) {

        if (MaquinaEleccion === TIJERA) return DERROTA;
        if (MaquinaEleccion === PIEDRA) return VICTORIA;

    } else if (userEleccion === TIJERA) {

        if (MaquinaEleccion === PIEDRA) return DERROTA;
        if (MaquinaEleccion === PAPEL) return VICTORIA;

    }
}