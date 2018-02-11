(function(root) {
    var oUl = document.getElementsByClassName("keys")[0];
    var keyArr = ["(", ")", "CE", "AC", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"];

    function judge(ele) {
        if (ele === "CE" || ele === "AC" || ele === "=") {
            return false;
        } else {
            return ele;
        }
    };
    root.judge = judge;
})(window.calculator);