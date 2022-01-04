function doubleVelocity(Velocity, printer) {
    console.log("Entrei em doubleVelocity")
    let newVelocity = Velocity * 2
    printer(newVelocity)
    return newVelocity 
}

let printVelocity = Velocity => {
    console.log("Nova velocidade: " + Velocity + "KM/s")
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)