// const makeRequest = (URL, func) => {
//     fetch(URL, {mode: 'cors'})
//         .then((res) => {
//             return res.json();
//         })
//         .then((res) => {
//             func(res);
//         })
//         .catch((error) => {
//             throw new Error('Error with fetch');
//         });
// };
//
// export default makeRequest;


let makeRequest = function response(query, func){
    let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    let xhr = new XHR();
    xhr.open('GET', query, true);
    xhr.onload = function () {
        let obj = JSON.parse(this.responseText);
        func(obj);
    };
    xhr.onerror = function () {
        throw new Error('Error with request!!!');
    };
    xhr.send();
};

export default makeRequest;
