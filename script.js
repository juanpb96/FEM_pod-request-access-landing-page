const form = document.getElementsByClassName('form')[0];
const emailInput = document.getElementById('email');
const button = document.getElementsByTagName('button')[0];
const errorP = document.getElementsByClassName('form__error')[0];
const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    if (email === '' || !emailRegExp.test(email)) {
        errorP.innerText = email === '' ? 'Oops! Please add your email' : 'Oops! Please check your email';
        errorP.classList.add('form__error--active');
        emailInput.classList.add('form__email-error--active');
        return;
    }

    errorP.classList.remove('form__error--active');
    emailInput.classList.remove('form__email-error--active');
    emailInput.value = '';
};

form.addEventListener('submit', handleSubmit);