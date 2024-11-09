const btnCalc = document.getElementById("btn-calc")
const containerForm = document.querySelector(".container")


function calcularElo (){
    let inputName = document.getElementById("name");
    let inputXP = document.getElementById("xp").value
    const p = document.createElement("p")
    let elo;
    
    switch (inputXP.value){
        case inputXP.value < 1000:
            elo = "Ferro";
            break;
        case (inputXP.value > 1000 && inputXP.value <= 2000):
            elo = "Bronze";
            break;
        case (inputXP.value > 2000 && inputXP.value <= 5000):
            elo = "Prata";
            break;
        case (inputXP.value > 5000 && inputXP.value <= 7000):
            elo = "Ouro";
            break;
        case (inputXP.value > 7000 && inputXP.value <= 8000):
            elo = "Platina";
            break;
        case (inputXP.value > 8000 && inputXP.value <= 9000):
            elo = "Ascendente"
            break;
        case (inputXP.value > 9000 && inputXP.value >= 10000):
            elo = "Imortal";
            break;
        case (inputXP.value >= 10001):
            elo = "Radiante";
            break;
    }

    let pText = document.createTextNode(`O Herói de nome ${inputName.value} está no nível de ${elo}`)

    containerForm.appendChild(p)
    p.appendChild(pText)
    pText = ""

}


btnCalc.addEventListener("click", function (e) {
    e.preventDefault()
    calcularElo();

})