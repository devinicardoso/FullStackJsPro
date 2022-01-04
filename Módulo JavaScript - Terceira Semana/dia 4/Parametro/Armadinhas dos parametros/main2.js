function speedUp(velocity, acceleration, unit = "Km/s") {
    let newVelocity = velocity + acceleration
    alert("Nova velocidade: " + newVelocity + unit)
}

speedUp(50, 20)