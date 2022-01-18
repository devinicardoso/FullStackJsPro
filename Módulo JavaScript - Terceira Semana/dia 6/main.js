let spaceship = {
    name: " ",
    type: " ",
    velocityMax: 0
}

let velocity = 0
let newVelocity = 0

spaceship.name = prompt("Informe o nome da nave: ")
spaceship.type = prompt("Informe o tipo da nave: ")
spaceship.velocityMax = prompt("Informe a velocidade máxima da nave: ")

console.log("Nome: " + spaceship.name + " type: " + spaceship.type + " velocityMax: " + spaceship.velocityMax + " velocity")

var option = ""

do {
    option = prompt("O que você deseja fazer?\n\n1- Acelerar\n2 - Parar")
    if(option == '1'){
        velocity = prompt("Informe a velocidade: ")
        let convnum = parseInt(velocity)
        newVelocity = newVelocity + convnum
        if(newVelocity > spaceship.velocityMax) {
            alert("Velocidade superior do que a permitida")
        }
        console.log("Velocidade atual: " + newVelocity)
    } else {
        alert('Você escolheu sair!\n\nInformações da nave:\nNome: ' + spaceship.name + '\nTipo: ' + spaceship.type + '\nVelocidade: ' + newVelocity + " Km/s")
    }

} while (option == '1')

           


console.log(spaceship)