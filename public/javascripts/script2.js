$(function() {
    var fadeO = function () {
        var $fo = $('#_fadeO_');
        var $fi = $('#_fadeI_');
        var oldBG = $fo.css('background-color');
        var newBG = $fi.css('background-color');
        $fo.fadeOut(1500, function() {
            $fo.css('background-color', newBG);
            $fo.css({'display':'block', 'opacity':1});

            // equivalent of loading new image
            $fi.css('background-color', oldBG);
            
            // call function again after 6 seconds
            setTimeout(fadeO, 6000);
        });
    };
    
    fadeO();
});