import makeRequest from './request';
// import createChanel from './create-chanel';
import createNews from './create-news';

window.onload = function () {
    const container = document.createElement("div");
    container.innerHTML = "<h2>Hi! There are some chanels for you!</h2>";
    container.classList.add('container');
    document.body.appendChild(container);

    const form = document.createElement('form');
    container.appendChild(form);

    makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe');

    const button = document.createElement('button');
    button.innerHTML = 'Get the NEWS';
    container.after(button);
    let checked = [];
    button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if(e.target.classList.contains('clicked')) {
            e.target.classList.remove('clicked');
            container.innerHTML = "<h2>Hi! There are some chanels for you!</h2>";
            const form = document.createElement('form');
            container.appendChild(form);

            makeRequest('https://newsapi.org/v2/sources?apiKey=9ff31ef0306944baa7b15c739cb34dbe');
            checked = [];
            button.innerHTML = 'Get the NEWS';
        }

        else {
            e.target.classList.add('clicked');

            let arr = document.getElementsByTagName('input');
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].checked === true) {
                    checked.push(arr[i].id);
                }
            }
            console.log(checked);


            Promise.all(checked).then(values => {
                return values;
            })
                .then(values => {
                        const makeRequest2 = function (URL) {
                            let result = null;
                            let obj = fetch(URL, {mode: 'cors'})
                                .then((res) => {
                                    return res.json();
                                })
                                .then((res) => {
                                    console.log(res.articles);
                                    createNews(res.articles);
                                })
                                .catch((error) => {
                                    throw new Error('Error with fetch');
                                });
                            return obj;
                        };


                        for (let i = 0; i < values.length; i++) {
                            makeRequest2(`https://newsapi.org/v2/top-headlines?sources=${values[i]}&apiKey=9ff31ef0306944baa7b15c739cb34dbe`);
                        }


                    }
                );

            container.innerHTML = '';
            button.innerHTML = 'Back to all chanels';
        }



    });

};
