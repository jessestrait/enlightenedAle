window.onload = function() {
    var button = $("#fade_out").click(changeBackground);
}
    
function changeBackground() {
    $('#background').fadeOut('slow', function() {
        $('#background_hidden').fadeIn('slow');
    });
}