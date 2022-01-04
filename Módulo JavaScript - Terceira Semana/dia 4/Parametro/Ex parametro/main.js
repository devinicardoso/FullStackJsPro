let velocity = 0


function spaceship() {
    let name = prompt("Name for Spaceship: ")
    console.log("Name entered: " + name)
    return name
}

function name() {

}

spaceship()

function menu() {
    let option = prompt("Choose an option:\n\n1- Speed ​​gup the spacecraft by 5km/s\n2- Decelerate the spacecraft by 5 km/s\n3- Print onboard data\n4- Exit")
    let optionSelect = 0
    do {
        switch (option) {
            case "1":
                alert("Velocity:" + acceleration(velocity) + " Km/s")
                break

            case "2":
                alert("Velocity: " + slowdown() + "Km/s")
                break

            case "3":
                alert("Onbord Data \n\nSpaceship Name: " + spaceship() + "\nVelocity Atual: " + velocity + "Km/s")
                break

            case "4":
                alert("Exit")
                optionSelect += 1
                break

            default:
                alert("You must choose a valid one. Try again!")
                break

        }
    } while (optionSelect === "1")
}

menu()

function acceleration(velocity) {
    velocity += 5
    return velocity
}

function slowdown() {
    if (velocity !== 0) {
        velocity = velocity - 5
    } else {
        alert("You stopped, operation not finished")
    }
    return velocity
}
