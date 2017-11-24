const makeRequest = function (URL, func) {
    let obj = fetch(URL, {mode: 'cors'})
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            func(res);
        })
        .catch((error) => {
            throw new Error('Error with fetch');
        });
    return obj;
};

export default makeRequest;
