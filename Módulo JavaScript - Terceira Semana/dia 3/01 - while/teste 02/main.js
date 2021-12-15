let contellation = "Andromeda"
let pos = 0
let constellationLength = contellation.length 

while(pos < constellationLength) {
    if (contellation[pos] == "a" || contellation[pos] == "A") {
        console.log(pos)
    }
    pos += 1 
}