function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    var $ = this, exports = {}, __alloyId11 = [], __alloyId13 = [];
    __alloyId13.push({
        title: "Active"
    });
    __alloyId13.push({
        title: "All"
    });
    $.__views.tabs = A$(Ti.UI.iOS.createTabbedBar({
        backgroundColor: "#776b65",
        index: 0,
        labels: __alloyId13,
        id: "tabs"
    }), "TabbedBar", null);
    __alloyId11.push($.__views.tabs);
    $.__views.__alloyId16 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId11.push($.__views.__alloyId16);
    $.__views.count = A$(Ti.UI.createLabel({
        color: "#fff",
        width: Ti.UI.SIZE,
        font: {
            fontSize: "11dp"
        },
        text: "No Tasks!",
        id: "count"
    }), "Label", null);
    __alloyId11.push($.__views.count);
    $.__views.__alloyId17 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId11.push($.__views.__alloyId17);
    $.__views.clear = A$(Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
        backgroundColor: "#ff0000",
        title: "Clear Complete",
        id: "clear"
    }), "Button", null);
    __alloyId11.push($.__views.clear);
    $.__views.container = A$(Ti.UI.iOS.createToolbar({
        barColor: "#776b65",
        labels: __alloyId13,
        items: __alloyId11,
        id: "container"
    }), "Toolbar", null);
    $.addTopLevelView($.__views.container);
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A;

module.exports = Controller;