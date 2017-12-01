let makeRequest = function response(query, func) {
    //return new Promise(function() {
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
    //});

};

export default makeRequest;
