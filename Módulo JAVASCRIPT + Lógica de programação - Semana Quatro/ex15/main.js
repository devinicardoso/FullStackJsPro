class spaceship{
    spacheshipHitch(name, crewQuantity, hitch = false, openDoors = false) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.hitch = hitch
        this.openDoors = openDoors
    }
}


var chosenOption = ""
let spaceshipList = new Array ()
let infoNave = ""

let hitchSpaceship = () => {
    let spaceshipName = prompt("Informe o nome da nave: ")
    let crewSpaceship = prompt("Informe a quantidade de tripulantes: ")
    let hitch = new spaceship
    hitch.spacheshipHitch(spaceshipName, crewSpaceship, true, true)
    spaceshipList.push(spaceshipName)
}

let printInfo = function () {
    let list = spaceshipList.join("\n")
    alert("Lista de nave(s):\n" + list)
}


do {
    chosenOption = prompt("Informe sua escolha:\n\n1 - Realizar engate\n2 - Imprimir Naves\n3 - Sair do programa")
    
    if(chosenOption == '1') {
        hitchSpaceship()
    }

    if(chosenOption == '2') {
        printInfo()
    }
    
} while (chosenOption == '1' || chosenOption == '2')