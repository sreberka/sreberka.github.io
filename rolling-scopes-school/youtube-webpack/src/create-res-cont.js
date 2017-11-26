const createResultCont = function createResultCont() {
    const resContainer = document.createElement('div');
    resContainer.id = 'result';
    document.querySelector('body').appendChild(resContainer);
};

export default createResultCont;
