const form = document.getElementById('myForm');
let formValido = false

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let numeroA = parseInt(document.getElementById('numero-a').value);
    let numeroB = parseInt(document.getElementById('numero-b').value);

    console.log(typeof (numeroA))
    console.log(typeof (numeroB))

    formValido = numeroB > numeroA

    const mensagemDisplaySucess = document.querySelector('.message-success')
    const mensagemDisplayError = document.querySelector('.message-error')
    const mensagemSucesso = `numero B: ${numeroB} é maior que o número A ${numeroA}`
    const mensagemErro = `numero B: ${numeroB} é menor que o número A: ${numeroA}`

    if (formValido) {
        mensagemDisplaySucess.innerHTML = mensagemSucesso
        mensagemDisplaySucess.style.display = 'block'

        document.getElementById('numero-b').classList.remove('error')
        mensagemDisplayError.style = ''
    }
    else {
        mensagemDisplayError.innerHTML = mensagemErro;
        mensagemDisplayError.style.display = 'block'
        document.getElementById('numero-b').classList.add('error')

        mensagemDisplaySucess.style = ''
    }
})