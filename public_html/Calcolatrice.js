$(document).ready(function () {
    var txt = "";
    var n1 = "";
    var n2 = "";
    var op = "";
    $("#espr").val("");

    function numero(num) {
        if (num === "0" && txt === "") {
            txt += "0";
        } else {
            if (txt === "0") {
                txt = num;
            } else {
                txt += num;
            }
        }
        $("#espr").val(txt);
    }

    function punto() {
        if (txt.indexOf(".") === -1 && txt !== "") {
            txt += ".";
            $("#espr").val(txt);
        }
    }

    function operatore(oper) {
        if (oper === "-" && txt === "") {
            txt += oper;
            $("#espr").val(txt);
        } else if (op === "" && txt !== "" && txt !== "-") {
            n1 = parseFloat(txt);
            op = oper;
            $("#espr").val(txt + op);
            txt = "";
        } else if (op !== "") {
            op = oper;
            $("#espr").val(n1 + op);
        }
    }

    function uguale() {
        if (txt !== "" && op !== "") {
            n2 = parseFloat(txt);
            switch (op) {
                case "+":
                    txt = n1 + n2;
                    break;
                case "-":
                    txt = n1 - n2;
                    break;
                case "*":
                    txt = n1 * n2;
                    break;
                case "/":
                    txt = n1 / n2;
                    break;
            }
            $("#espr").val(txt);
            n1 = "";
            n2 = "";
            op = "";
            txt = "";
        }
    }

    $(document).keypress(function (ev) {
        var tasto = ev.which;
        if (tasto >= 48 && tasto <= 57) {
            numero(tasto - 48 + "");
        } else {
            switch (tasto) {
                case 13:
                    uguale();
                    break;
                case 43:
                    operatore("+");
                    break;
                case 47:
                    operatore("/");
                    break;
                case 42:
                    operatore("*");
                    break;
                case 45:
                    operatore("-");
                    break;
                case 46:
                    punto();
                    break;
            }
        }

    });

    $(".num").click(function () {
        numero($(this).text());
    });

    $("#punto").click(punto);

    $(".oper").click(function () {
        operatore($(this).text());
    });

    $("#uguale").click(uguale);
});
