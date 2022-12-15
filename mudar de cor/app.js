let cores = ["#F3CCFF" , "#97DECE" , "#CE7777" , "#FBFACD" ]
let btn = document.getElementById("btn")
let texto = document.getElementById("texto")

btn.addEventListener("click" , function(){

let corEscolhida = Math.floor(Math.random() * cores.length) 
document.getElementById("main").style.backgroundColor = cores[corEscolhida]
texto.textContent = cores[corEscolhida]



})