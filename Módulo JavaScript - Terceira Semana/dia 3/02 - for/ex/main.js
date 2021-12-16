let spaceship = prompt('Informe o nome de sua espaçonave:')
let leaves = prompt('Informe o caracter que será substituído')
let enter = prompt('Informe o caracter que vai se colocado no lugar')

let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == leaves){
        newSpaceship += enter
    } else {
        newSpaceship += spaceship[i]
    }
}

alert('Novo nome da nave: ' + newSpaceship)