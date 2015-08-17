
$( document ).ready(function() {
//     var rect = Snap().rect(0, 0, 10, 10);
// Snap.animate(0, 10, function (val) {
//     rect.attr({
//         x: val
//     });
// }, 1000);
// // in given context is equivalent to
// rect.animate({x: 10}, 1000);
    var $homepage = $('#home-page')
    $('#titles').on('click', function() {
        $homepage.animate({'margin-left':'-100%'}, 1000)
    })
});
