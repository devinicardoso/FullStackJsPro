let nameNave = prompt('Informe o nome da nave: ')
console.log('nome da nave: ' + nameNave)
let spaceFold = 0

let question = prompt('Deseja entrar em dobra espacial?\n1- Sim\n2- Não')

if(question == '1'){
    spaceFold ++
    console.log('primeira dobra:' + spaceFold)
}

while (question <= '1') {
    let question2 = prompt('Deseja realizar a próxima dobra?\n1- Sim\n2- Não')
    if (question2 == '1') {
        spaceFold ++
    } else {
        question = 2
    }
    console.log(spaceFold)
}

alert('Nome da nave: ' + nameNave + '\nForam feitas ' + spaceFold + ' dobras espaciais')