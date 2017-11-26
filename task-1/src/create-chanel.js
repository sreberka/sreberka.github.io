const createChanel = (chanel) => {
    for(let i = 0; i < chanel.sources.length; i++) {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('chanel');
        document.querySelector('form').appendChild(inputContainer);

        const input = document.createElement('input');
        input.id = chanel.sources[i].id;
        input.type = 'checkbox';
        inputContainer.appendChild(input);

        const label = document.createElement('label');
        label.innerHTML = chanel.sources[i].name;
        label.setAttribute('for', chanel.sources[i].id);
        input.after(label);
    }
};

export default createChanel;
