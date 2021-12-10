let ly = prompt('Informe a distância em anos-luz')
let option = prompt ('Selecione a opção para calculo:\n\n1- Parsec(PC)\n2- Unidade Astronômica(AU)\n3- Quilômetros(KM)')

let  calculation
let chosenConversion
switch(option) {
    case '1':
        chosenConversion = 'Parsec(pc)'
        calculation = ly * 0.306601
        break

    case '2':
        chosenConversion = 'Unidade Astronômica (AU)'
        calculation = ly * 63241.1
        break

    case '3':
        chosenConversion = 'Quilômetros(KM)'
        calculation = ly * (9.5 * Math.pow(10,12)) 
        break
}

if(option > 0 && option <= 3) {
    alert("Distância em Anos-luz: " + ly + "\nDistância convertida para " + chosenConversion + ": " + calculation)
} else {
    alert("Distância em Anos-luz: " + ly + "\nUnidade não identificada: Conversão fora do escopo")
}