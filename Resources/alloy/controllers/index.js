function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.index = A$(Ti.UI.createWindow({
        backgroundColor: "#fefefe",
        exitOnClose: !0,
        navBarHidden: !0,
        id: "index"
    }), "Window", null);
    $.addTopLevelView($.__views.index);
    $.__views.formContainer = A$(Ti.UI.createView({
        height: "55dp",
        top: "16dp",
        id: "formContainer"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.formContainer);
    $.__views.__alloyId6 = Alloy.createController("form", {
        id: "__alloyId6"
    });
    $.__views.__alloyId6.setParent($.__views.formContainer);
    $.__views.listContainer = A$(Ti.UI.createView({
        top: "71dp",
        bottom: "44dp",
        id: "listContainer"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.listContainer);
    $.__views.__alloyId7 = Alloy.createController("list", {
        id: "__alloyId7"
    });
    $.__views.__alloyId7.setParent($.__views.listContainer);
    $.__views.rule1 = A$(Ti.UI.createView({
        width: "1dp",
        backgroundColor: "#f5d6d6",
        opacity: 0.7,
        left: "45dp",
        id: "rule1"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.rule1);
    $.__views.rule2 = A$(Ti.UI.createView({
        width: "1dp",
        backgroundColor: "#f5d6d6",
        opacity: 0.7,
        left: "50dp",
        id: "rule2"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.rule2);
    $.__views.bar = A$(Ti.UI.createView({
        top: 0,
        height: "16dp",
        backgroundImage: "/bar.png",
        id: "bar"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.bar);
    $.__views.toolbar = A$(Ti.UI.createView({
        bottom: 0,
        height: "44dp",
        id: "toolbar"
    }), "View", $.__views.index);
    $.__views.index.add($.__views.toolbar);
    $.__views.__alloyId8 = Alloy.createController("toolbar", {
        id: "__alloyId8"
    });
    $.__views.__alloyId8.setParent($.__views.toolbar);
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;