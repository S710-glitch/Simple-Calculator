function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let operator = document.getElementById("operator").value;

    let result;

    if (operator == "+") {
        result = num1 + num2;
    }
    else if (operator == "-") {
        result = num1 - num2;
    }
    else if (operator == "*") {
        result = num1 * num2;
    }
    else if (operator == "/") {
        result = num1 / num2;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "Result: ";
}
