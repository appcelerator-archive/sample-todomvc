//Initialize UI
var m = Ti.UI.create2DMatrix({
        rotate:90 
    }),
    a = Ti.UI.createAnimation();

a.transform = m;
a.duration = 1;
$.toggle.animate(a);