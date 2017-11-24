import createChanel from './create-chanel';


const makeRequest = function (URL) {
    let result = null;
    let obj = fetch(URL, {mode: 'cors'})
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res.sources);
            //return res.articles;
            createChanel(res.sources);
        })
        .catch((error) => {
            throw new Error('Error with fetch');
        });
    return obj;
};

export default makeRequest;
