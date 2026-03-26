function one()   { document.getElementById('result').value += "1"; }
function two()   { document.getElementById('result').value += "2"; }
function three() { document.getElementById('result').value += "3"; }
function four()  { document.getElementById('result').value += "4"; }
function five()  { document.getElementById('result').value += "5"; }
function six()   { document.getElementById('result').value += "6"; }
function seven() { document.getElementById('result').value += "7"; }
function eight() { document.getElementById('result').value += "8"; }
function nine()  { document.getElementById('result').value += "9"; }
function zero()  { document.getElementById('result').value += "0"; }
function dot()   { document.getElementById('result').value += "."; }

// Operations
function plus()   { document.getElementById('result').value += "+"; }
function minus()  { document.getElementById('result').value += "-"; }
function multi()  { document.getElementById('result').value += "*"; }
function divide() { document.getElementById('result').value += "/"; }

// Result
function calculate() {
    var expression = document.getElementById('result').value;
    if (expression == "") {
        alert("Please enter a number");
        return;
    }
    try {
        document.getElementById('result').value = eval(expression);
    } catch (e) {
        alert("Invalid Expression");
        document.getElementById('result').value = "";
    }
}

// Clear
function clearDisplay() {
    document.getElementById('result').value = "";
}

// Backspace
function backspace() {
    var current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}