
$( document ).ready(function() {
    var $homepage = $('#home-page')
    $('#titles').on('click', function() {
        $homepage.animate({'margin-left':'-100%'}, 1000)
    })
});
