for (var i = 0, l = 50; i<l; i++) {
    var listItem = Alloy.createController('listItem', {
        done:false
    }).getView();
    
    $.todos.add(listItem);
}