const hitchedSpaceship = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let with9crew = hitchedSpaceship.filter(spaceship => {
    return spaceship[1] > 9
}) .map(spaceship => {
    return spaceship[0]
})
 
let findSpaceship = hitchedSpaceship.findIndex(spaceship => {
    return spaceship[2] == false
})

let namesSpaceship = hitchedSpaceship.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let msg = "INFORMAÇÕES:\n\nEspaço nave com mais de 9 tripulantes: " + with9crew.join(", ") 
msg += "\nPlataforma com processo de engate: " + (findSpaceship + 1)
msg += "\n Espaçonaves destadacas: " + namesSpaceship.join(", ")

alert(msg)





