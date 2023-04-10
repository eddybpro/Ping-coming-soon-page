const submitBtn = document.querySelector('.btn'),
input = document.querySelector('#email'),
paraError = document.querySelector('.error');

const inputRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!inputRegex.test(input.value)){
        input.style.border = '2px solid hsl(354, 100%, 66%)';
        paraError.classList.toggle('none');
    }
})