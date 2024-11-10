$(document).ready(() => {
    let atualizar = false

    $('#myForm').on('submit', (e) => {
        e.preventDefault()

        const nomeTarefa = $('#nome-tarefa').val()
        const novaTarefa = $(`<li id="${nomeTarefa}" class="tarefa-item"></li>`)
        $(`<span">${nomeTarefa}</span>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('.tarefas ul')

        $('#nome-tarefa').val('')
    })

    $('.tarefas ul').on('click', '.tarefa-item', (e) => {
        atualizar = !atualizar
        atualizar ? $(e.target).closest('.tarefa-item').addClass('completo') :
            $(e.target).closest('.tarefa-item').removeClass('completo')
    });
})