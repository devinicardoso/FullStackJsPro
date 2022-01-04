let velocity = 0
let spaceshipName = prompt("Name for Spaceship: ")



function menu() {
    let option = prompt("Choose an option:\n\n1- Speed ​​gup the spacecraft by 5km/s\n2- Decelerate the spacecraft by 5 km/s\n3- Print onboard data\n4- Exit")

    switch (option) {
        case "1":
            acceleration()
            console.log(velocity)
            break

        case "2":
            slowdown()
            break

        case "3":
            onbordData()
            break

        case "4":
            alert("You chose to leave!")
            break

        default:
            alert("You must choose a valid one. Try again!")
            break

    }

}

menu()

function acceleration() {
    velocity = velocity + 5
    alert("Speed increased by 5 km/s. Current speed: " + velocity + " Km/s")
    menu()
}

function slowdown() {
    if (velocity !== 0) {
        velocity = velocity - 5
        alert("Speed reduced by 5 km/s. Current speed: " + velocity + " Km/s")
    } else {
        alert("You stopped, operation not finished")
    }
    menu()
}

function onbordData() { 
    alert("Onbord Data \n\nSpaceship Name: " + spaceshipName + "\nVelocity Atual: " + velocity + "Km/s")
    menu()
}
