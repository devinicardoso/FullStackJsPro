let warpCount = 0
let chosenOption = ''

let nameNave = prompt('Informe o nome da nave: ')
chosenOption = prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não')


while (chosenOption == '1') {
    warpCount += 1
    chosenOption = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
}

alert('Nome da nave: ' + nameNave + '\nForam feitas ' + warpCount + ' dobras espaciais')