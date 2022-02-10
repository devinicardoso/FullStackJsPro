class Spaceship {
    static get decelarationRate(){
       return 0.17
    }
    
   constructor(name, crewQuantity) {
       this.name = name
       this.crewQuantity = crewQuantity
       this.velocity = 0
   }
   
   speedUp(acceleration) {
       this.velocity += (acceleration * (1 - Spaceship.decelarationRate))
   }
}


var chosenOption = ""


let registerSpaceship = () => {
    let spaceshipName = prompt('Informe o nome da nave: ')
    let spaceshipCrew = prompt('Informe a quantidade de tribulantes: ')
    let spaceshipVelocity = prompt('Informe a velocidade desejada: ')
    
    alert('Dados registrados:\n\nNome da nave: ' + spaceshipName + '\nQuantidade de tripulantes: ' + spaceshipCrew + '\nVelocidade da nave: ' + spaceshipVelocity + ' KM/s')
    
    let spaceship = new Spaceship(spaceshipName, spaceshipCrew)
    
    spaceship.speedUp(spaceshipVelocity)
}


let printSpaceship = function () {
    alert('Dados da Nave:\n\nNome da nave: ' + Spaceship.name() + '\nQuantidade de tripulantes: ' + registerSpaceship.spaceshipCrew + '\nVelocidade da nave: ' + Spaceship.speedUp + 'KM/s')
}

do {
    chosenOption = prompt("Informe a sua escolha:\n\n1- Cadastrar Nave\n2- Cadastra nova nave\n3- Mostrar dados e sair")
    
    if(chosenOption == '1') {
        registerSpaceship()
    }
    
    if(chosenOption == '2') {
        printSpaceship()
    }
    
    if(chosenOption == '3') {
        printSpaceship()
    }
}while (chosenOption == '1' || chosenOption == '2')



