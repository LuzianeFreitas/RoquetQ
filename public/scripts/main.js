// Todos os detalhes do front ficaram aqui!!!!!!!!!!!!
import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {

    button.addEventListener('click', event => {
        // Abrir modal
        modal.open()
    })
});


/**Quando o botão delete for clicado abre o modal */
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {

    button.addEventListener('click', event => {
        // fechar modal
        modal.open()
    })
});