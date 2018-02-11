var root = window.calculator;
var oUl = document.getElementsByClassName("keys")[0];
var oInput = document.getElementsByClassName("input")[0];
var worker = root.worker;
var judge = root.judge;
var result = root.result;
var inputContent = "";
worker();

function bindClick() {
    oUl.onclick = function(event) {
        var e = event || window.event;
        if (e.target !== this) {
            var item = judge(e.target.innerText)
            if (item) {
                inputContent += e.target.innerText
            } else {
                inputContent = result(e.target.innerText, inputContent);
            }
            if (inputContent) {
                oInput.innerText = inputContent;
            } else {
                oInput.innerText = 0;
            }
        }
    }
}
bindClick();