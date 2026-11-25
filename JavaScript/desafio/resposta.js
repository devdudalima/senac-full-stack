
// --- VALIDAÇÕES DOS OUTROS CAMPOS ---

const inputNome = document.getElementById('nome');

inputNome.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\d/g, '');
});

const inputCpf = document.getElementById('cpf');

inputCpf.addEventListener('input', (e) => {
    let valor = e.target.value.replace(/\D/g, '').substring(0, 11);

    // substring(0, 11): limita o conteúdo aos primeiros 11 caracteres.

    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{2})$/, '$1-$2');

    e.target.value = valor;
});

const inputRg = document.getElementById('rg');

inputRg.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
});

const inputCep = document.getElementById('cep');

inputCep.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 8);
});

const inputUf = document.getElementById('uf');

inputUf.addEventListener('input', (e) => {
    e.target.value = e.target.value
        .replace(/[^a-zA-Z]/g, '')
        .substring(0, 2)
        .toUpperCase();
});








// --- VALIDAÇÃO DA SENHA AVANÇADA ---

const inputSenha = document.getElementById('senha');
const spanContador = document.getElementById('contadorSenha');

// Elementos da lista de requisitos
const reqTamanho = document.getElementById('req-tamanho');
const reqMaiuscula = document.getElementById('req-maiuscula');
const reqMinuscula = document.getElementById('req-minuscula');
const reqNumero = document.getElementById('req-numero');
const reqEspecial = document.getElementById('req-especial');

inputSenha.addEventListener('input', (e) => {

    let valor = e.target.value;

    // 1. Atualiza o contador
    spanContador.textContent = valor.length;

    // 2. Valida tamanho mínimo (8 caracteres)
    if (valor.length >= 8) {
        reqTamanho.classList.add('valido');
    } else {
        reqTamanho.classList.remove('valido');
    }

    // 3. Valida letra maiúscula
    if (/[A-Z]/.test(valor)) {
        reqMaiuscula.classList.add('valido');
    } else {
        reqMaiuscula.classList.remove('valido');
    }

    // 4. Valida letra minúscula
    if (/[a-z]/.test(valor)) {
        reqMinuscula.classList.add('valido');
    } else {
        reqMinuscula.classList.remove('valido');
    }

    // 5. Valida número
    if (/[0-9]/.test(valor)) {
        reqNumero.classList.add('valido');
    } else {
        reqNumero.classList.remove('valido');
    }

    // 6. Valida caractere especial
    if (/[^A-Za-z0-9]/.test(valor)) {
        reqEspecial.classList.add('valido');
    } else {
        reqEspecial.classList.remove('valido');
    }

});
