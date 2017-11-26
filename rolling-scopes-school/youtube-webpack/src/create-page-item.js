let createPageItem = function createPageItem() {
    let pageItem = document.createElement('li');
    document.querySelector('.pagination').appendChild(pageItem);
};

export default createPageItem;
