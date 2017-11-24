import createNews from './create-news';

const createChanel = function (chanel) {
    for(let i = 0; i < chanel.length; i++) {
        let inputContainer = document.createElement('div');
        inputContainer.classList.add('chanel');
        document.querySelector('form').appendChild(inputContainer);


        let input = document.createElement('input');
        input.id = chanel[i].id;
        input.type = 'checkbox';
        inputContainer.appendChild(input);

        let label = document.createElement('label');
        label.innerHTML = chanel[i].name;
        label.setAttribute('for', chanel[i].id);
        input.after(label);
    }
};

export default createChanel;
