let velocity = 150

let velocityReduction = (velocity, printer) => {
    while (velocity > 0) {
        console.log('Velocity reduction started')
        printer(velocity)
        velocity -= 20
    }
}

let printerVelocity = velocityReduction(velocity, newVelocity => {
    console.log("New velocity: " + newVelocity)
}) 

alert("\nA decolagem foi concluída e as comportas podem ser abertas.")