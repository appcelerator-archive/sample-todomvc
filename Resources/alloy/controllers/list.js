function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {};
    $.__views.list = A$(Ti.UI.createView({
        id: "list"
    }), "View", null);
    $.addTopLevelView($.__views.list);
    $.__views.scroller = A$(Ti.UI.createScrollView({
        id: "scroller"
    }), "ScrollView", $.__views.list);
    $.__views.list.add($.__views.scroller);
    $.__views.todos = A$(Ti.UI.createView({
        layout: "vertical",
        id: "todos"
    }), "View", $.__views.scroller);
    $.__views.scroller.add($.__views.todos);
    _.extend($, $.__views);
    for (var i = 0, l = 50; i < l; i++) {
        var listItem = Alloy.createController("listItem", {
            done: !1
        }).getView();
        $.todos.add(listItem);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;