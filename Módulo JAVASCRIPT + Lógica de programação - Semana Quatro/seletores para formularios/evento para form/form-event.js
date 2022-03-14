function save() {
    event.preventDefault()
    let nome = document.querySelector("input[name='name']").value
    let programmingLang =  document.querySelector("select[name='programming-lang']").value
    alert("Nome: " + nome + "\nLiguagem: " + programmingLang)
}