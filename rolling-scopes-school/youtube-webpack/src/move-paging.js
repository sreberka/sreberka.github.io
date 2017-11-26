let movePaging = function movePaging() {
    let itemsArr = document.querySelector('.pagination');
    if (Number(document.querySelector('.active').innerHTML) > 3) {
        itemsArr.style.marginLeft = -(Number(document.querySelector('.active').innerHTML) * 30 - 90) + 'px';
    }
    else {
        itemsArr.style.marginLeft = 0;
    }
};

export default movePaging;
