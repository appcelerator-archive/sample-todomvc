var Backbone = require("alloy/backbone"), _ = require("alloy/underscore"), Todo = Backbone.Model.extend({
    defaults: {
        done: !1,
        text: ""
    }
});

Todo.Collection = Backbone.Collection.extend({
    model: Todo
});

module.exports = Todo;

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Todo", exports.definition, []);

collection = Alloy.C("Todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;