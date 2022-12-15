function jogarDados() { 

let primeiroDado = Math.floor(Math.random() * 6) + 1
let primeiroDadoJogado = "./images/dice" + primeiroDado + ".png"
document.querySelectorAll("img")[0].setAttribute("src", primeiroDadoJogado)

let segundoDado = Math.floor(Math.random() * 6) + 1
let segundoDadoJogado = "./images/dice" + segundoDado + ".png"
document.querySelectorAll("img")[1].setAttribute("src", segundoDadoJogado)

if (primeiroDado>segundoDado){
    document.getElementById("jogador__vencedor").innerHTML = "O Jogador 1 Venceu"
}
else if (primeiroDado<segundoDado) {
    document.getElementById("jogador__vencedor").innerHTML = "O Jogador 2 Venceu"
}
else {
    document.getElementById("jogador__vencedor").innerHTML = "Empate"
}



}