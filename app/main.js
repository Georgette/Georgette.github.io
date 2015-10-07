require('./styles/main.less')
$("#bio-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio").offset().top
    }, 800)
})
