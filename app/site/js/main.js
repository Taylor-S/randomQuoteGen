$(window).on('load', function(){
    $('.preloadScreen').fadeOut(2000);
});



$(document).ready(function() {

    // initial function call///////////
    newQuote();

    // toggle background function///////
    $('.button').click(function toggleClass() {;
        $('#base').fadeTo('slow',0.2, function(){
            var classes = ['mountain', 'sun', 'forest', 'ocean', 'sunflower'];
            if(this.className === classes[classes.length-1]) {
                this.className = classes[0];
            }
            else {
                this.className = classes[($.inArray(this.className, classes)+1)];
            }
        });
        $('#base').animate({opacity: 1}, 'slow');
    });

});

// function defined///////////////
function newQuote() {
    var quote = $('#quote'),
    author = $('#author');
    $.ajax({
        type: 'GET',
        url: "http://api.forismatic.com/api/1.0/",
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
            method: 'getQuote',
            lang: 'en',
            format: 'jsonp'
        },
        success: function (data) {
            quote.html(data.quoteText);
            if (data.quoteAuthor == ""){
                author.html("~ Anonymous");
            }
            else {
                author.html("~ " + data.quoteAuthor);
            }
        }
    });
}
