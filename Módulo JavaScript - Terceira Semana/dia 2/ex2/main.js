let nome = prompt('Informe o seu nome')
let velocidade = 0

velocidade = prompt('Informe a velocidade que você gostaria de ir')

let confirmacao = confirm('Você gostaria de seguir: ' + velocidade + 'Km/s')

if(confirmacao == false) {
    velocidade = prompt('Informe a velocidade que você gostaria de ir')
}

if(velocidade < 0) {
    alert('Nave está parada. Considere partir e aumentar a velocidade')
} else if (velocidade < 40) {
    alert('Você está devagar, podemos aumentar mais')
} else if (velocidade >= 40 && velocidade < 80) {
    alert('Parece uma boa velocidade para manter')
} else if (velocidade >= 80 && velocidade < 100) {
    alert('Velocidade alta. Considere diminuir')
} else if (velocidade >= 100) {
    alert('Controle automático forçado')
}

alert('Piloto: ' + nome + '\nSua velocidade: ' + velocidade + 'Km/s')