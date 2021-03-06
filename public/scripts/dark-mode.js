const darkModeStorage = localStorage.getItem('darkModeSave');


const html = document.querySelector('html');
const checkBox = document.querySelector('#switch');
const logo = document.querySelector('header a img');
const btn = document.querySelector('a.button');
const iconBtn = document.querySelector('a.button img');
const bg = document.querySelector('div#bg');
const colorInputFont = document.querySelector('form input');
const colorTextAreaFont = document.querySelector('form textarea');
const btnCopy = document.querySelector('div .buttons .button.outlined');
const btnCopyImg = document.querySelector('div .buttons .button.outlined img')
const noQuestion = document.querySelector('.no-questions img');

// const modal =  document.querySelector('.modal-wrapper.active');
// const inputModal = document.querySelector('.modal input#password');

console.log(modal);

const idHome = document.getElementById('home');
const idRoom = document.getElementById('room');


if (darkModeStorage) {
    // ativa o dark mode
    html.classList.add('dark-mode')

    if(idHome) {
        if(html.classList.contains('dark-mode')) {
            logo.src = "/images/logo-dark.svg";
            colorInputFont.classList.toggle('dark-mode-color');
            if(btn != null) {
                iconBtn.src = "/images/users-dark.svg";
                btn.classList.toggle('dark-mode-btn');
            }        
            bg.classList.toggle('dark-mode-img')

        }

    } else if(idRoom) {
        if(html.classList.contains('dark-mode')) {
            logo.src = "/images/logo-dark.svg";
            btnCopy.classList.toggle('dark-mode-copy');
            btnCopyImg.src = "/images/copy-dark.svg"
            colorTextAreaFont.classList.toggle('dark-mode-color');
            if(noQuestion != null) {
                noQuestion.src = "/images/no-questions-dark.svg";
            }
                
        }
    }
  
    // já deixa o input marcado como ativo
    checkBox.checked = true
} 

checkBox.addEventListener('click', function(){
    html.classList.toggle('dark-mode');

    if(idHome) {
        if(html.classList.contains('dark-mode')) {
            logo.src = "/images/logo-dark.svg";
            colorInputFont.classList.toggle('dark-mode-color');
            if(btn != null) {
                iconBtn.src = "/images/users-dark.svg";
                btn.classList.toggle('dark-mode-btn');
            }        
            bg.classList.toggle('dark-mode-img')

            localStorage.setItem('darkModeSave', true)
            return
        }else{
            localStorage.removeItem('darkModeSave')
            logo.src = "/images/logo.svg"
            bg.classList.toggle('dark-mode-img')
            colorInputFont.classList.remove('dark-mode-color');
            if(btn != null) {
                iconBtn.src = "/images/users.svg";
                btn.classList.remove('dark-mode-btn');
            }
        }
        

    } else if(idRoom) {
        if(html.classList.contains('dark-mode')) {
            logo.src = "/images/logo-dark.svg";
            btnCopy.classList.toggle('dark-mode-copy');
            btnCopyImg.src = "/images/copy-dark.svg"
            colorTextAreaFont.classList.toggle('dark-mode-color');
            if(noQuestion != null) {
                noQuestion.src = "/images/no-questions-dark.svg";
            }

            

            // if(html.classList.contains('.modal-wrapper.active')) {
            //     console.log(inputModal);
            //     inputModal.classList.add('color-font-dark');
            // }
                

            localStorage.setItem('darkModeSave', true)
            return
        }else{
            localStorage.removeItem('darkModeSave')
            logo.src = "/images/logo.svg";
            btnCopy.classList.remove('dark-mode-copy');
            btnCopyImg.src = "/images/copy.svg"
            colorTextAreaFont.classList.remove('dark-mode-color');
            if(noQuestion != null) {
                noQuestion.src = "/images/no-questions.svg";
            } 
            // if(html.classList.contains('.modal-wrapper.active')) {
            //     inputModal.classList.remove('color-font-dark');
            // }
                
        }
        
    }
});
