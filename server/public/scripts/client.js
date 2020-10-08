console.log("hello from JS");

$(document).ready(onReady);

function onReady() {
    console.log('hello from jquery');
    // perfrom GET request
    getRandomQuote();
    $('#submit').on('click',submitQuote);
}

function submitQuote() {
    console.log('clicked');
    let quote = $('#quote').val();
    let author = $('#author').val();
    console.log('clicked',quote,author);

    $.ajax({
        method: 'POST',
        url: '/submitQuote',
        data: {
            quote: quote, 
            author: author}
    }).then(function(response){
        console.log('response', response);
        $('#quote').val('');
        $('#author').val('');
    }).catch(function(error){
        //notifying the user of an error in post request
        alert(error);
    })
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