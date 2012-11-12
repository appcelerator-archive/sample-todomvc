var todo = arguments[0],
    deleteVisible = false;

if (OS_IOS) {
    $.container.on('swipe', function(e) {
        if (e.direction === 'left' || e.direction === 'right') {
            var rightVal = deleteVisible ? '-45dp' : 0;
            $.del.animate({
                right:rightVal,
                duration:250
            }, function() {
                deleteVisible = !deleteVisible;
            });
        }
    });
}
else {
    $.container.on('touchstart', function() {
        $.container.backgroundColor = '#f7f7f7';
    });
    
    function cancel() {
        $.container.backgroundColor = 'transparent';
    }
    
    $.container.on('touchend', cancel);
    $.container.on('touchcancel', cancel);
    
    $.container.on('longpress', function(e) {
        Ti.Media.vibrate([0,100]);
        var opt = Ti.UI.createOptionDialog({
            title:'Delete this item?',
            options:['Yep', 'Nope'],
            cancel:1
        });
        opt.show();
    });
}