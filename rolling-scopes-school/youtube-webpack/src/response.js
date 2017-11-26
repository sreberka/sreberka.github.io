
let response = function response(query){
    if (!query) {
        query = '';
    }
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    let search = document.getElementById('query').value;
    xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSA6izDJNqROs4MgFz9Au9QAdKC7YyeFQ&type=video&part=snippet&maxResults=15&q=' + search + '&pageToken=' + query, true);
    xhr.onload = function () {
        let obj = JSON.parse(this.responseText);
        myLibrary.nextPage = obj.nextPageToken;
        for (let i = 0; i < obj.items.length; i++) {
            let vid = obj.items[i].id.videoId;
            let newXHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
            let newxhr = new newXHR;
            newxhr.open('GET', 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDSA6izDJNqROs4MgFz9Au9QAdKC7YyeFQ&id=' + vid + '&part=snippet,statistics', true);
            newxhr.onload = function () {
                let that = this;
                let obj = JSON.parse(that.responseText);
                let image = obj.items[0].snippet.thumbnails.default.url;
                let item = document.createElement('div');
                item.classList.add('item');
                document.querySelector('.page').appendChild(item);
                let tag = document.createElement('img');
                tag.src = image;
                tag.setAttribute('ondrag', 'return false');
                tag.setAttribute('ondragdrop', 'return false');
                tag.setAttribute('ondragstart', 'return false');
                item.appendChild(tag);
                let title = document.createElement('a');
                title.innerHTML = obj.items[0].snippet.title;
                let id = obj.items[0].id;
                title.href = 'https://www.youtube.com/watch?v=' + id;
                title.target = '_blank';
                item.appendChild(title);
                let author = document.createElement('p');
                author.innerHTML = '<span class="fa fa-user"></span>' + obj.items[0].snippet.channelTitle;
                item.appendChild(author);
                let calendar = document.createElement('p');
                calendar.innerHTML = '<span class="fa fa-calendar"></span>' + obj.items[0].snippet.publishedAt.slice(0, 10);
                item.appendChild(calendar);
                let wached = document.createElement('p');
                wached.innerHTML = '<span class="fa fa-eye"></span>' +  obj.items[0].statistics.viewCount;
                item.appendChild(wached);
                let description = document.createElement('p');
                description.innerHTML = obj.items[0].snippet.description.slice(0, 80) +'...';
                item.appendChild(description);
            };
            newxhr.onerror = function () {
                document.write('error ' + this.status);
            };
            newxhr.send();
        }
        let points = Math.ceil(15 / (document.getElementById('result').clientWidth / 280));
        let pointsAmount = document.querySelector('.pagination').children.length;
        for (let i = pointsAmount + 1; i < pointsAmount + points; i++) {
            let pageItem = document.createElement('li');
            pageItem.innerHTML = i;
            document.querySelector('.pagination').appendChild(pageItem);
            if (i === 1) {
                pageItem.classList.add('active');
            }
        }

        let itemsArr = document.querySelector('.pagination');
        itemsArr.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            for (let i = 0; i < itemsArr.children.length; i++) {
                if (itemsArr.children[i].classList.contains('active')) {
                    itemsArr.children[i].classList.remove('active');
                }
            }
            e.target.classList.add('active');
            if (e.target.classList.contains('active') && Number(e.target.innerHTML) > 3) {
                itemsArr.style.marginLeft = -(Number(e.target.innerHTML) * 30 - 90) + 'px';
            }
            let container = document.querySelector('#result').clientWidth;
            let page = document.querySelector('.page');
            page.style.marginLeft = -((container)*Number(e.target.innerHTML) - container) + 'px';
            let responsePoint = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 2];
            let responsePoint2 = document.querySelector('.pagination').children[document.querySelector('.pagination').children.length - 1];
            if (responsePoint.classList.contains('active') || responsePoint2.classList.contains('active')) {
                response(myLibrary.nextPage);
            }
        });
    };
    xhr.onerror = function () {
        document.write('error ' + this.status);
    };
    xhr.send();
};

export default response;
