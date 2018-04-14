import makeRequest from './Request';
import { createChanel, observer } from './helpers';
import './style.scss';


window.onload = function () {
    const mainHeader = document.querySelector('h2');
    const container = document.querySelector('.container');
    const button = document.querySelector('button');
    const form = document.createElement('form');
    container.appendChild(form);

    makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe', createChanel);

    button.addEventListener('click', function (e) {
        observer(e);
    });
};
