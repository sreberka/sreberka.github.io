import makeRequest from './Request';
import { createNews, createChanel } from './helpers';

window.onload = function () {
    const mainHeader = document.querySelector('h2');
    const container = document.querySelector('.container');
    const button = document.querySelector('button');
    const form = document.createElement('form');
    container.appendChild(form);
    makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', createChanel);

    let checked = [];

    button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if(e.target.classList.contains('clicked')) {
            e.target.classList.remove('clicked');
            mainHeader.innerHTML = "Choose your favorite chanels to see the news:";
            container.innerHTML = '';
            form.innerHTML = '';
            container.appendChild(form);
            makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', createChanel);
            checked = [];
            button.innerHTML = 'Get the NEWS';
        }
        else {
            let arr = document.getElementsByTagName('input');
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].checked === true) {
                    checked.push(arr[i].id);
                }
            }

            if(checked.length !== 0) {
                e.target.classList.add('clicked');


                Promise.all(checked).then(values => {
                    return values;
                })
                    .then(values => {
                            for (let i = 0; i < values.length; i++) {
                                makeRequest(`https://newsapi.org/v2/top-headlines?sources=${values[i]}&apiKey=9ff31ef0306944baa7b15c739cb34dbe`, createNews);
                            }
                        }
                    );

                container.innerHTML = '';
                mainHeader.innerHTML = "Here are some news for you:";
                button.innerHTML = 'Back to all chanels';
            }
        }
    });
};
