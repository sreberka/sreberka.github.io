import createForm from './create-form';
import createResultCont from './create-res-cont';

var nextPage = null;
window.onload = function init() {
    createForm();
    createResultCont();
};
