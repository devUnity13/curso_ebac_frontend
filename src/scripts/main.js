document.addEventListener('DOMContentLoaded', () => {
    let formulario = document.getElementById('my-form');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        let numeroMaximo = parseInt(document.getElementById('numeroMaximo').value);
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        let numeroGerado = document.getElementById('numeroGerado')
        let textoResultado = document.getElementById('resultado')
        numeroGerado.innerText = numeroAleatorio
        textoResultado.style.display = 'block'
    })
})