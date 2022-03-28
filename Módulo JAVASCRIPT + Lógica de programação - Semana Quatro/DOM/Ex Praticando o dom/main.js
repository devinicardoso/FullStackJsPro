
class imovel {
    constructor(tipoImovel, areaImovel, imovelAlugado) {
        this.tipoImovel = tipoImovel;
        this.areaImovel = areaImovel;
        this.imovelAlugado = imovelAlugado;
    }
}



function registroImovel() {
    tipoImovel = document.getElementById("tipoImovel").value;
    areaImovel = document.getElementById("areaImovel").value;
    imovelAlugado = document.getElementById("imovelAlugado").value;

    let newListValue =  document.createElement("li")
    if(imovelAlugado == 'sim') {
        newListValue.innerText = "ALUGADO\nTipo do imóvel: " + tipoImovel 
                               + "\nÁrea do imóvel: " + areaImovel + "\n"

        
    } else {
        newListValue.innerText = "Tipo do imóvel: " + tipoImovel 
                               + "\nÁrea do imóvel: " + areaImovel + "\n"
    }

    let removeButton = document.createElement("button")
        removeButton.type = "button"
        removeButton.innerText = "Remover"
        removeButton.setAttribute("onclick", "removeHouse(this)")
        newListValue.appendChild(removeButton)

    document.getElementById("listaImoveis").appendChild(newListValue) 
    // let imovel = new imovel(tipoImovel, areaImovel, imovelAlugado);
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("listaImoveis").removeChild(liToRemove)
}
