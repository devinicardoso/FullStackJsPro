function guardarCasa() {

    let numero = document.getElementById("numerocasa").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let areacasa = document. getElementById("areacasa").value

    let newListValue = document.createElement("li")
    newListValue.innerText = areacasa + "m², número " + numero + " (" + bairro + " - " + cidade + ")"
    
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
} 

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}