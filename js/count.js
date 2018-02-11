(function(root) {
    function count(str) {
        if (str.indexOf("(") >= 0 && str.indexOf(")") >= 0) {
            str = str.split("");
            // console.log(str)
            var lenstr = str.length;
            for (var i = 0; i < lenstr; i++) {
                if (str[i] === "(") {
                    str[i] = " " + "(";
                } else if (str[i] === ")") {
                    str[i] = ")" + " ";
                }
            }
            str = str.join("")
            var reg = /\([\w\W]*\)/;
            var regx = /\s/;
            console.log(str)
            var x = str.split(regx);
            for (var i = 0; i < x.length; i++) {
                if (x[i].match(reg)) {
                    var y = x[i].match(reg)
                    var s = y[0].split("(");
                    var r = s[1].split(")");
                    var w = Number(count(r[0]));
                    x[i] = w;
                }
            }
            var newStr = x.join("")
            var num = Number(count(newStr));
            return num



            // // 纠结x and y 
            // //以下未考虑到（）（）
            // var x = str.indexOf("(") + 1;
            // var y = str.lastIndexOf(")");
            // var old = str.substring(x, y);
            // var now = count(old).toString();
            // var ood = "(" + old + ")";
            // str = str.replace(ood, now);
            // var num = count(str);
            // return num;
            // // 以下未考虑到（（））双括号！
            // var arr1 = str.split("(");
            // var len = arr1.length;
            // var arr2 = [];
            // for (var i = 1; i < len; i++) {
            //     arr2 = arr2.concat(arr1[i].split(")"));
            // }
            // var lenth = arr2.length;
            // var reg = /^\d[\w\W]*\d$/;
            // for (var i = 0; i < lenth; i++) {
            //     if (arr2[i].match(reg)) {
            //         arr2[i] = count(arr2[i].match(reg)[0]).toString();
            //     }
            // }
            // console.log(arr2);
            // var arr3 = arr2.join("");
            // num = count(arr1[0] + arr3);
            // return num;
        }
        if (str.indexOf("+") >= 0) {
            var arr1 = str.split("+");
            var len = arr1.length;
            var num = 0;
            for (var i = 0; i < len; i++) {
                num += Number(count(arr1[i]));
            };
            return num;
        }
        if (str.indexOf("-") >= 0) {
            var arr1 = str.split("-");
            var len = arr1.length;
            var num;
            for (var i = 0; i < len; i++) {
                if (i === 0) {
                    num = Number(count(arr1[0]));
                } else {
                    num -= Number(count(arr1[i]));
                }
            };
            return num;
        }
        if (str.indexOf("×") >= 0) {
            var arr1 = str.split("×");
            var len = arr1.length;
            var num = 1;
            for (var i = 0; i < len; i++) {
                num *= Number(count(arr1[i]));
            };
            return num;
        }
        if (str.indexOf("÷") >= 0) {
            var arr1 = str.split("÷");
            var len = arr1.length;
            var num;
            for (var i = 0; i < len; i++) {
                if (i === 0) {
                    num = Number(count(arr1[0]));
                } else {
                    num /= Number(count(arr1[i]));
                }
            };
            return num;
        }
        return Number(str);
    }
    root.count = count;
})(window.calculator);