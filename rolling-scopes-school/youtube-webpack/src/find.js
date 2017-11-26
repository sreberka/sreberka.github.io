import response from './response';
import createPagination from './create-pagination';
import movePaging from './move-paging';

let find = function find() {
    document.querySelector('#result').innerHTML = '';
    if (document.querySelector('#viewport') != null) {
        document.querySelector('#viewport').remove();
    }
    let page = document.createElement('div');
    page.classList.add('page');
    document.querySelector('#result').appendChild(page);
    response();
    createPagination();
    let startX = null;
    page.addEventListener('mousedown', function (event) {
        startX = event.clientX;
    });
    page.addEventListener('mouseup', function (event) {
        event.preventDefault();
        event.stopPropagation();
        let move = document.querySelector('#result').clientWidth;
        let margin = document.querySelector('.page').style.marginLeft.replace('px', '');
        if (event.clientX > startX ) {
            if (Number(margin) < 0) {
                document.querySelector('.page').style.marginLeft = Number(margin) + move + 'px';
                document.querySelector('.active').previousElementSibling.classList.add('active');
                document.querySelector('.active').nextSibling.classList.remove('active');
                movePaging();
            }
        }
        else if (event.clientX < startX) {
            let stopScroll = document.querySelector('.page').clientWidth;
            if (Number(margin) > -(stopScroll - move)) {
                document.querySelector('.page').style.marginLeft = Number(margin) - move + 'px';
                document.querySelector('.active').nextSibling.classList.add('active');
                document.querySelector('.active').classList.remove('active');
                movePaging();
            }
            else {  
                response(myLibrary.nextPage);
            }
        }
        let responsePoint = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 2];
        if (responsePoint.classList.contains('active')) {
            response(myLibrary.nextPage);
        }
    });

    page.addEventListener('touchstart', function (event) {
        let touchEnd = event.changedTouches[0];
        let endSwipeX = touchEnd.pageX;
        startX = endSwipeX;
    });
    page.addEventListener('touchend', function (event) {
        event.preventDefault();
        event.stopPropagation();
        let touchEnd = event.changedTouches[0];
        let endSwipeX = touchEnd.pageX;
        let move = document.querySelector('#result').clientWidth;
        let margin = document.querySelector('.page').style.marginLeft.replace('px', '');
        if (endSwipeX > startX) {
            if (Number(margin) < 0) {
                document.querySelector('.page').style.marginLeft = Number(margin) + move + 'px';
                document.querySelector('.active').previousElementSibling.classList.add('active');
                document.querySelector('.active').nextSibling.classList.remove('active');
                movePaging();
            }
        }
        else if (endSwipeX < startX) {
            let stopScroll = document.querySelector('.page').clientWidth;
            if (Number(margin) > -(stopScroll - move)) {
                document.querySelector('.page').style.marginLeft = Number(margin) - move + 'px';
                document.querySelector('.active').nextSibling.classList.add('active');
                document.querySelector('.active').classList.remove('active');
                movePaging();
            }
            let responsePoint = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 2];
            if (responsePoint.classList.contains('active')) {
                response(myLibrary.nextPage);
            }
        }
    });
};

export default find;
