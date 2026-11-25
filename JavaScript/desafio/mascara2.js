let nome = document.getElementById('nome')
let cpf = document.getElementById('cpf')
let rg = document.getElementById('rg')
let cep = document.getElementById('cep')
let endereco = document.getElementById('endereco')
let uf = document.getElementById('uf')
let senha = document.getElementById('senha')

let btnVerificar = document.querySelector('#verificar')

nome.addEventListener('input', (e) => {
    let valor = e.target.value
    valor = valor.replace(/[^a-zA-Z]/g, "");
    e.target.value = valor
})

cpf.addEventListener('input', (e) => {
    let valor = e.target.value

    valor = valor.replace(/\D/g, '').substring(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2")
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2")
    valor = valor.replace(/(\d{3})(\d{2})/, "$1-$2")

    e.target.value = valor
})

cep.addEventListener('input', (e) => {
    let valor = e.target.value

    valor = valor.replace(/\D/g, '').substring(0, 8)
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2")

    e.target.value = valor
})

uf.addEventListener('input', (e) => {
    let valor = e.target.value

    valor = valor.replace(/[^a-zA-Z]/g, '').substring(0,2).toUpperCase()

    e.target.value = valor
})

// VALIDACAO DE SENHA

senha.addEventListener('input', (e) => {

    let valor = e.target.value

    let contador = document.querySelector('#contadorSenha')

    let reqTam = document.getElementById('req-tamanho')
    let reqMai = document.getElementById('req-maiuscula')
    let reqMin = document.getElementById('req-minuscula')
    let reqNum = document.getElementById('req-numero')
    let reqEsp = document.getElementById('req-especial')

    contador.textContent = valor.length;

    // contador

    if( valor.length < 8) {
        reqTam.classList.remove('valido')
        reqTam.classList.add('invalido')
    } else {
        reqTam.classList.remove('invalido')
        reqTam.classList.add('valido')
        
    }

    // -> / /	Delimita a expressão regular.
    // -> [ ]	Define os caracteres que queremos encontrar.
    // -> A-Z	Representa letras maiúsculas de A até Z.
    // .test() verifica se existe algum caractere correspondente à expressão regular dentro do texto.


    // validar letra maiuscula

    if (/[A-Z]/.test(valor)) {
        reqMai.classList.remove('invalido')
        reqMai.classList.add('valido')
    } else {
        reqMai.classList.remove('valido')
        reqMai.classList.add('invalido')
        
    }

    // validar letra minuscula

    if (/[a-z]/.test(valor)){
        reqMin.classList.remove('invalido')
        reqMin.classList.add('valido')
    } else {
        reqMin.classList.remove('valido')
        reqMin.classList.add('invalido')
    }

    // validar numero

    if (/[0-9]/.test(valor)) {
        reqNum.classList.remove('invalido')
        reqNum.classList.add('valido')
    } else {
        reqNum.classList.remove('valido')
        reqNum.classList.add('invalido')
    }

    // validar caractere especial
    
    if (/[^a-zA-Z0-9]/.test(valor)) {
        reqEsp.classList.remove('invalido')
        reqEsp.classList.add('valido')
    } else {
        reqEsp.classList.remove('valido')
        reqEsp.classList.add('invalido')
    }
})

btnVerificar.addEventListener ('click', (e) => {
    e.preventDefault
    verificar
})

function verificar () {
    console.log('verificou!')
}

