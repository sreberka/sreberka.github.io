let createPagination = function createPagination() {
    let viewport = document.createElement('div');
    viewport.id = 'viewport';
    document.body.appendChild(viewport);
    let pagination = document.createElement('ul');
    pagination.classList.add('pagination');
    viewport.appendChild(pagination);
};

export default createPagination;
