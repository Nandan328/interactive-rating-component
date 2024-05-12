const btn = document.querySelectorAll('button');
const rate = document.getElementById('rating');
const submit = document.getElementById('submit');
const cont = document.querySelector('.cont');
const thanks = document.querySelector('.thanks-cont');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent != "Submit") {
            rate.textContent = button.textContent;
        }
    });
});

submit.addEventListener('click', () => {
    cont.style.display = 'none';
    thanks.style.display = 'block';
});