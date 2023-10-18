function add(){
    let numO = parseInt(document.getElementById("num1").value);
    let numT = parseInt(document.getElementById("num2").value);
    result = numO+numT;
    document.getElementById("heading").innerText = "Addition of " + numO + " & " + numT + " is " + result;
}
function sub(){
    let numO = parseInt(document.getElementById("num1").value);
    let numT = parseInt(document.getElementById("num2").value);
    result = numO-numT;
    document.getElementById("heading").innerText = "Subtraction of " + numO + " & " + numT + " is " + result;
}
function mul(){
    let numO = parseInt(document.getElementById("num1").value);
    let numT = parseInt(document.getElementById("num2").value);
    result = numO*numT;
    document.getElementById("heading").innerText = "Multiplication of " + numO + " & " + numT + " is " + result;
}
function div(){
    let numO = parseInt(document.getElementById("num1").value);
    let numT = parseInt(document.getElementById("num2").value);
    result = numO/numT;
    document.getElementById("heading").innerText = "Division of " + numO + " & " + numT + " is " + result;
}

