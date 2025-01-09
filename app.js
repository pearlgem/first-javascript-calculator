const inputNumber = document.getElementById("inputNumber");

// function number(x){
//     inputNumber.value += x
// // why the parametar and = should be same?

// }

function number(x) {
    const lastInput = inputNumber.value.slice(-1);
    if (
        (lastInput === "+" || lastInput === "-" || lastInput === "*" || lastInput === "/") &&
        (x === "+" || x === "-" || x === "*" || x === "/")
    ) {
        inputNumber.value = inputNumber.value.slice(0, -1) + x;
    } else {
        inputNumber.value += x;
    }
}

function allClear(){
    inputNumber.value = "";

}

function caculate(){
    try{
    inputNumber.value = eval(inputNumber.value);

}
catch(error){
    inputNumber.value = "kya chaty ho?"
}

}

let lastInput = inputNumber.value.slice(-1)
if (
    (lastInput === "+" || lastInput === "-" || lastInput === "*" || lastInput === "/") &&
    (x === "+" || x === "-" || x === "*" || x === "/")
) {
    inputNumber.value = inputNumber.value.slice(0, -1) + x;
}
 else {
    inputNumber.value += x;
}

