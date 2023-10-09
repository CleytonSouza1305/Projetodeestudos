var ios = document.querySelectorAll('.ios-btn')

var android = document.querySelectorAll('.android-btn')

function alterarClasseClicando () {
    var temClasseClicado = 
    this.classList.contains("clicado")

    ios.forEach(function(btns) {
        btns.classList.remove("clicado")
    })

    android.forEach(function(btns) {
        btns.classList.remove("clicado")
    })

    if (!temClasseClicado) {
        this.classList.add("clicado")
    }
}

ios.forEach(function(btns) {
    btns.addEventListener("click", alterarClasseClicando)
})

android.forEach(function(btns) {
    btns.addEventListener("click", alterarClasseClicando)
})

var iosButtons = document.querySelectorAll('.ios-btn')

var androidButtons = document.querySelectorAll('.android-btn')

function mostrarConteudoIos() {
    document.getElementById('conteudo-ios').classList.add('ios-mostrando')

    document.getElementById('conteudo-android').classList.remove('android-mostrando')
}

function mostrarConteudoAndroid() {
    document.getElementById('conteudo-ios').classList.remove('ios-mostrando')

    document.getElementById('conteudo-android').classList.add('android-mostrando')
}

iosButtons.forEach(function(btn) {
    btn.addEventListener('click', mostrarConteudoIos)
})

androidButtons.forEach(function(btn) {
    btn.addEventListener('click', mostrarConteudoAndroid)
})