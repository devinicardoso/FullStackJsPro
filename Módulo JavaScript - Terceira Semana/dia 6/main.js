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

console.log("Nome: " + spaceship.name + " type: " + spaceship.type + " velocityMax: " + spaceship.velocityMax)

let option = prompt("O que você deseja fazer?\n\n1- Acelerar\n2 - Parar")


while (option == '1') {
    switch(option){
        case '1':
            function Acelerar(velocity, velocityMax, newVelocity) {
                velocity = prompt("Informe a velocidade desejada: ")
                if(velocity > velocityMax) {
                    console.log('velocity: ' + velocity)
                    newVelocity += velocity
                    console.log(newVelocity)
                    return velocity
                } else {
                    alert('Velocidade maior do que a permitida')
                }
            }
            Acelerar(velocity, spaceship.velocityMax, newVelocity)
            break
        case '2':
            alert('Você escolheu sair!\n\nInformações da nave:\nNome: ' + spaceship.name + '\nTipo: ' + spaceship.type + '\nVelocidade: ' + velocity)
            break
    }
    option = prompt('Deseja continuar? \n\n1 - Acelerar\n2 - Sair')
}




console.log(spaceship)