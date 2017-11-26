$(document).ready(function () {
   $('.lecture').click(function () {
       $(this).next('.lecture-info').toggleClass('show');
   });
    $('.deadline').click(function () {
        $(this).next('.deadline-info').toggleClass('show');
    });
});

// let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
// let xhr = new XHR();
// xhr.open('GET', 'http://128.199.53.150/trainers/5915c02989e1e8ac13de8181', true);
// xhr.onload = function () {
//     let obj = JSON.parse(this.responseText);
//     console.log(obj);
// };
// xhr.onerror = function () {
//     document.write('error ' + this.status);
// };
// xhr.send();
