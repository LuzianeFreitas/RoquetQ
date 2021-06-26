const html = document.querySelector('html');
const checkBox = document.querySelector('#switch');
const logo = document.querySelector('header a img');
const btn = document.querySelector('a.button');
const iconBtn = document.querySelector('a.button img');
const bg = document.querySelector('div#bg');
const colorInputFont = document.querySelector('form input')

checkBox.addEventListener('click', function(){
    html.classList.toggle('dark-mode');
    
    if(html.classList.contains('dark-mode')) {
        logo.src = "/images/logo-dark.svg";
        colorInputFont.classList.toggle('dark-mode-color');
        if(btn != null) {
            iconBtn.src = "/images/users-dark.svg";
            btn.classList.toggle('dark-mode-btn');
        }        
        bg.classList.toggle('dark-mode-img')

    }else{
        logo.src = "/images/logo.svg"
        colorInputFont.classList.remove('dark-mode-color');
        if(btn != null) {
            iconBtn.src = "/images/users.svg";
            btn.classList.remove('dark-mode-btn');
        }
        
    }
});