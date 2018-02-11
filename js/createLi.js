(function(root) {
    var oUl = document.getElementsByClassName("keys")[0];
    var keyArr = ["(", ")", "CE", "AC", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"];

    function worker() {
        var str = "";
        for (var i = 0; i < 20; i++) {
            str += "<li>" + keyArr[i] + "</li>";
        }
        oUl.innerHTML = str;
    };
    root.worker = worker;
})(window.calculator || (window.calculator = {}));