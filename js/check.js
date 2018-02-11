(function(root) {
    function checkFunc(item) {
        var str = item.split("")
        console.log(str)
        var len = str.length;
        if (str[0] === "+" || str[0] === "-" || str[0] === "×" || str[0] === "÷") {
            return false;
        } else if (str[len - 1] === "+" || str[len - 1] === "-" || str[len - 1] === "×" || str[len - 1] === "÷") {
            return false;
        } else {
            for (var i = 1; i < len - 1; i++) {
                if (str[i] === "+" || str[i] === "-" || str[i] === "×" || str[i] === "÷") {
                    if (str[i + 1] === "+" || str[i + 1] === "-" || str[i + 1] === "×" || str[i + 1] === "÷") {
                        return false;
                    }
                }
            }
            return true
        }
    }
    root.checkFunc = checkFunc;
})(window.calculator)