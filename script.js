const n1 = document.getElementById('number1');
const n2 = document.getElementById('number2');
const Sbutton = document.getElementById('sub-button');
const Abutton = document.getElementById('add-button');
const Mbutton = document.getElementById('mul-button');
const Dbutton = document.getElementById('div-button');
const result = document.getElementById('result');

Abutton.addEventListener('click', Add);
Sbutton.addEventListener('click', sub);
Mbutton.addEventListener('click', mul);
Dbutton.addEventListener('click', div);

function Add(event) {
    const number1 = parseFloat(n1.value);
    const number2 = parseFloat(n2.value);
    const sum = number1 + number2;
    if (number1 + number2) {
        result.innerHTML = sum;
    } else if (sum = 0) {
        result.innerHTML = "bruh, seriously?";
    } else {
        console.log(event);
        alert("Please type a number");
    }

}


function sub(event) {
    const number1 = parseFloat(n1.value);
    const number2 = parseFloat(n2.value);
    const sum = number1 - number2;
    if (number1 - number2) {
        result.innerHTML = sum;
    } else if (sum === 0) {
        result.innerHTML = "bruh, really?";
    } else {
        isNaN
        console.log(event);
        alert("Please type a number");
    }
}

function mul(event) {
    const number1 = parseFloat(n1.value);
    const number2 = parseFloat(n2.value);
    const sum = number1 * number2;
    if (number1 * number2) {
        result.innerHTML = sum;
    } else {
        console.log(event);
        alert("Please type a number");
    }
}


function div(event) {
    const number1 = parseFloat(n1.value);
    const number2 = parseFloat(n2.value);
    const sum = number1 / number2;
    if (number1 / number2) {
        result.innerHTML = sum;
    } else {
        console.log(event);
        alert("Please type a number");
    }
}