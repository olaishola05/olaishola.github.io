const body = document.querySelector('body');
const className = window.localStorage.getItem('className')
const darkBtn = document.querySelector('#dark-mode');

if(className === 'darkMode'){
    body.classList.add('dark-mode')
    darkBtn.checked = !darkBtn.checked
}
else
    body.classList.remove('dark-mode')

darkBtn.addEventListener('click', () => {
    if (darkBtn.checked){
        body.classList.add('dark-mode');
        window.localStorage.setItem('className', 'darkMode')
    } 
    else{
        body.classList.remove('dark-mode');
        window.localStorage.clear()
    }
});