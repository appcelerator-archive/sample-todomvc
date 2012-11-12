function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.form = A$(Ti.UI.createView({
        backgroundColor: "#f7f7f7",
        id: "form"
    }), "View", null);
    $.addTopLevelView($.__views.form);
    $.__views.toggle = A$(Ti.UI.createLabel({
        color: "#a9a9a9",
        left: "5dp",
        opacity: 0,
        width: "45dp",
        textAlign: "center",
        font: {
            fontSize: "42dp"
        },
        id: "toggle",
        text: "»"
    }), "Label", $.__views.form);
    $.__views.form.add($.__views.toggle);
    $.__views.input = A$(Ti.UI.createTextField({
        right: "5dp",
        top: "5dp",
        bottom: "5dp",
        left: "60dp",
        font: {
            fontSize: "18dp"
        },
        id: "input",
        hintText: "Tap here to add an item"
    }), "TextField", $.__views.form);
    $.__views.form.add($.__views.input);
    $.__views.__alloyId0 = A$(Ti.UI.createView({
        backgroundImage: "/dots.png",
        backgroundRepeat: !0,
        height: "1dp",
        bottom: 0,
        opacity: 0.3,
        id: "__alloyId0"
    }), "View", $.__views.form);
    $.__views.form.add($.__views.__alloyId0);
    _.extend($, $.__views);
    var m = Ti.UI.create2DMatrix({
        rotate: 90
    }), a = Ti.UI.createAnimation();
    a.transform = m;
    a.duration = 1;
    $.toggle.animate(a);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;