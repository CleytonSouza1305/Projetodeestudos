const carrinho = document.querySelector('.carrinhoclicado')

const carrinhoLateral = document.querySelector('.carrinho-lateral')

carrinho.addEventListener("click", function() {
   carrinhoLateral.style.display = "block"
})

const fechar = document.querySelector('.close')

fechar.addEventListener("click", function() {
    carrinhoLateral.style.display = "none"
 })

 const cart = document.querySelector(".fa-cart-shopping")

 cart.addEventListener("click", function() {
    cart.style.display = "none"
 })

 fechar.addEventListener("click", function() {
    cart.style.display = "block"
 })

 const user = document.querySelector(".fa-user")

 cart.addEventListener("click", function() {
    user.style.display = "none"
 })

  fechar.addEventListener("click", function() {
    cart.style.display = "inline"
 })

 fechar.addEventListener("click", function() {
   user.style.display = "inline"
})

const perfil = document.querySelector(".perfildousuario")

user.addEventListener("click", function () {
   perfil.style.display = "block"
})

const fecharPerfil = document.querySelector(".close-perfil")

fecharPerfil.addEventListener("click", function () {
   perfil.style.display = "none"
})

user.addEventListener("click", function() {
   user.style.display = "none"
})

fecharPerfil.addEventListener("click", function () {
   user.style.display = "inline"
})