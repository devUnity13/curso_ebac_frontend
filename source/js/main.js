document.addEventListener('DOMContentLoaded', () => {
    var form = document.getElementById('myform')
    const numeroA = document.getElementById('numeroA')
    const numeroB = document.getElementById('numeroB')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const soma = somaDoisNumeros(parseFloat(numeroA.value), parseFloat(numeroB.value))
        const mensagem = `<p>O resultado da soma de <strong>${numeroA.value}</strong> + <strong>${numeroB.value}</strong> é <strong>${soma}</strong></p>`

        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = mensagem
        resultado.style.display = 'block'

        numeroA.value = ''
        numeroB.value = ''
    })

    function somaDoisNumeros(a, b) {
        return a + b
    }
})