let spaceship = {
    velocity: 0, 
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave: ")
    spaceship.type = prompt("Informe o tipo da nave: ")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave : "))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (Km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert("Velocidade Máxima Ultrapassada!" + 
        "\n Velocidade da nave: " + spaceship.velocity + " Km/s\n" + 
        "Velocidade máxina da nave: " + spaceship.maxVelocity + " Km/s")
    }
}

function stop() {
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + "\nVelocidade máxima: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption 
    do {
        chosenOption = prompt("Você deseja: \n1- Acelerar\n2- Parar")

        switch(chosenOption) {
            case "1":
                acelerate()
                break
            
            case "2":
                stop()
                break
            
            default:
                alert("Opção inválida")
        }
    }while(chosenOption != "2") 
}

registerSpaceship()
showMenu()