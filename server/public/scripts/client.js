console.log("hello from JS");

$(document).ready(onReady);

function onReady() {
    console.log('hello from jquery');
    // perfrom GET request
    getRandomQuote();
}

function getRandomQuote(){
    console.log('get the quote');
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){
        console.log('response', response);
    });

}