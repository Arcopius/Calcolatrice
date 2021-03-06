$(document).ready(function () {
    var txt = "";
    var n1 = "";
    var n2 = "";
    var op = "";
    $("#espr").val("");

    $(".num").click(function () {
        if ($(this).text() === "0" && txt === "") {
            txt += "0";
        } else {
            if (txt === "0") {
                txt = $(this).text();
            } else {
                txt += $(this).text();
            }
        }
        $("#espr").val(txt);
    });

    $("#punto").click(function () {
        if (txt.indexOf(".") === -1 && txt !== "") {
            txt += $(this).text();
            $("#espr").val(txt);
        }
    });

    $(".oper").click(function () {
        if ($(this).text() === "-" && txt === "") {
            txt += $(this).text();
            $("#espr").val(txt);
        } else if (op === "" && txt !== "" && txt !== "-") {
            n1 = parseFloat(txt);
            op = $(this).text();
            $("#espr").val(txt + op);
            txt = "";
        } else if (op !== "") {
            op = $(this).text();
            $("#espr").val(n1 + op);
        }
    });

    $("#uguale").click(function () {
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
    });
});
