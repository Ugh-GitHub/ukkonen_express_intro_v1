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
        appendToDom(response);
    });

}

function appendToDom(quote) {
    // take the response from the server
    // append it to #output so it shows up on the DOM
    console.log('in append to dom with',quote);
    $('#output').append(`
    <i>"${quote.quote}"</i>
    <p> by ${quote.author}</p>
    `);
}