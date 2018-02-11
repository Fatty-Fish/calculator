(function(root) {
    var count = root.count;
    var checkFunc = root.checkFunc;

    function result(ele, item) {
        if (ele === "CE") {
            var len = item.length;
            item = item.substring(0, len - 1);
            return item;
        } else if (ele === "AC") {
            item = "";
            return item;
        } else {
            // "="
            var flag = checkFunc(item);
            if (flag) {
                var res = count(item);
                if (isNaN(res)) {
                    return "Math Error";
                } else if (res.toString().indexOf(".")) {
                    return res.toFixed(5);
                } else {
                    return res;
                }
            } else {
                return "input error";
            }
        }
    };
    root.result = result;
})(window.calculator);