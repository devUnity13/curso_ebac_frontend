const form = document.getElementById('myForm');
let formValido = false

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let numeroA = document.getElementById('numero-a');
    let numeroB = document.getElementById('numero-b');

    console.log(typeof (numeroA))
    console.log(typeof (numeroB))

    formValido = parseInt(numeroB.value) > parseInt(numeroA.value)

    const mensagemDisplaySucess = document.querySelector('.message-success')
    const mensagemDisplayError = document.querySelector('.message-error')

    const mensagemSucesso = `numero B: ${numeroB.value} é maior que o número A ${numeroA.value}`
    const mensagemErro = `numero B: ${numeroB.value} é menor que o número A: ${numeroA.value}`

    if (formValido) {
        mensagemDisplaySucess.innerHTML = mensagemSucesso
        mensagemDisplaySucess.style.display = 'block'

        document.getElementById('numero-b').classList.remove('error')
        document.getElementById('numero-a').classList.remove('error')
        mensagemDisplayError.style = ''
    }

    //aqui eu pensei 0 é menor do que qualquer numero positivo mas, é maior do que qualquer numero negativo.
    else if (parseInt(numeroB.value) === parseInt(numeroA.value)) {
        mensagemDisplayError.innerHTML = `Não permitimos valores iguais!`;
        mensagemDisplayError.style.display = 'block'
        document.getElementById('numero-b').classList.add('error')
        document.getElementById('numero-a').classList.add('error')
    }
    else {
        mensagemDisplayError.innerHTML = mensagemErro;
        mensagemDisplayError.style.display = 'block'
        document.getElementById('numero-b').classList.add('error')

        mensagemDisplaySucess.style = ''
    }

    numeroA.value = ''
    numeroB.value = ''
})