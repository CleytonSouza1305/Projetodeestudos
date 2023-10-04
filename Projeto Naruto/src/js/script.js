/* const botoes = document.querySelectorAll(".botao")

const conteudo = document.querySelectorAll(".conteudo")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const selected = document.querySelectorAll(".botao.selecionado")
           
        botao.classList.add("selecionado")


        const personagemselected = document.querySelectorAll(".personagem.selecionado")

        personagens[indice].classList.add("selecionado")
    })
}) 
*/

const botoes = document.querySelectorAll('.botao')

const personagens = document.querySelectorAll(".conteudo")

botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {
      
        const botaoSelecionado = document.querySelector(".botao.selecionado")
            botaoSelecionado.classList.remove("selecionado")

        botao.classList.add("selecionado")

        const personagemSelecionado = document.querySelector(".conteudo.selecionado")

        personagemSelecionado.classList.remove("selecionado")

    personagens[indice].classList.add("selecionado")
    
    })
})