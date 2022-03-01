var hrefs = ['link1.com','link2.com','link3.com'];
var iterations = 0;

function changeLink() {
    $(".yourElement").attr("href", hrefs[iterations%4])
    iterations++;
}

var linkChange = setInterval(changeLink, 4000);// JavaScript Document