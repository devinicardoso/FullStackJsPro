function showinfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeprogramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    developerOptions.forEach(element => { optionsValue.push(element.value)})
    let optionChecked = optionsValue.join(", ")
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likeprogramming + "\nConhecimento em programação web: " + optionChecked )
}