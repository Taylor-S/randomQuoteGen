// Load all images before access to site
$(window).on('load', function(){
    $('.preloadScreen').fadeOut(2000);
});


$(document).ready(function() {

    // initial function call/////
    newQuote();

    // toggle background///////
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

// AJAX quote function defined///////
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
            quote.animate({opacity: 0}, 500, function() {
              quote.animate({opacity: 1}, 500).html(data.quoteText);
            });
          author.animate({opacity: 0}, 500, function() {
            if (data.quoteAuthor == ""){
                author.animate({opacity: 1}, 500).html("~ Anonymous");
                // tweet Code
                $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+data.quoteText + " ~ Anonymous").attr('target', '_blank');
            }
            else {
                author.animate({opacity: 1}, 500).html("~ " + data.quoteAuthor);
                // tweet Code
                $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+data.quoteText + " ~ "+data.quoteAuthor).attr('target', '_blank');
            }
          });
        }
    });
}
