let spaceshipName = prompt('Informe o nome da espaçonave: ')
let newSpaceshipName = ''

for(let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == 'e') {
        break
    }
    newSpaceshipName += spaceshipName[i]
}

alert('\nNome original da nave: ' + spaceshipName + '\nNome após a ocultação: ' + newSpaceshipName)