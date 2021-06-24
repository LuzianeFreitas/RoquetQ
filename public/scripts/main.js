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
