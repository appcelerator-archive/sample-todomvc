exports.trim = function(line) {
    return String(line).replace(/^\s\s*/, "").replace(/\s\s*$/, "");
};

exports.trimZeros = function(num) {
    var str = new String(num || "0");
    return str.indexOf(".") == -1 ? str : str.replace(/\.?0*$/, "");
};

exports.ucfirst = function(text) {
    return text ? text[0].toUpperCase() + text.substr(1) : text;
};

exports.lcfirst = function(text) {
    return text ? text[0].toLowerCase() + text.substr(1) : text;
};

exports.formatCurrency = String.formatCurrency;

exports.urlDecode = function(string) {
    return string ? string.replace(/%[a-fA-F0-9]{2}/ig, function(match) {
        return String.fromCharCode(parseInt(match.replace("%", ""), 16));
    }) : "";
};

exports.urlToJson = function(url) {
    var ret = {}, arr = url.split("?"), list = {}, queryarr = arr[1].split("&");
    for (var n = 0; n < queryarr.length; ++n) {
        var item = queryarr[n];
        if (item == "") continue;
        var e = item.indexOf("="), name, value;
        if (e < 0) {
            name = item;
            value = null;
        } else {
            name = item.substring(0, e);
            value = item.substring(e + 1);
        }
        list[name] = value;
    }
    ret.url = arr[0];
    ret.query = list;
    return ret;
};