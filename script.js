function adicionaItem(event){
let elementoNovo = document.createElement("article")
elementoNovo.innerHTML = "novo article"
let referencia = document.getElementById("container")
referencia.insertAdjacentElement("beforeend", elementoNovo)
elementoNovo.classList.add("item")

}



function removeItem(event){
const remover = event.target
console.log(event.target)
remover.remove()
}








