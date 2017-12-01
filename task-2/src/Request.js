const makeRequest = (URL, func) => {
    axios.get(URL, {mode: 'cors'})
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            func(res);
        })
        .catch((error) => {
            throw new Error('Error with fetch');
        });
};

export default makeRequest;
