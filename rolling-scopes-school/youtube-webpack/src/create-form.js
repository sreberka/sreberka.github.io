import find from './find';

const createForm = function createForm() {
    const form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.innerHTML = '<input type="text" id="query" placeholder="search"><span class="fa fa-search"></span>';
    form.setAttribute('action', 'javascript:void(null)');
    document.body.appendChild(form);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        find();
    });
};

export default createForm;
