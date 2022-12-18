const firstValue = document.getElementById('first_value');
const secondValue = document.getElementById('second_value');
const operator = document.getElementById('operator');
const resCalc = document.getElementById('res_calc');
const itemInput = document.getElementById('item_input');
const sumItem = document.getElementById('sum_item');
const arrayResult = document.getElementById('array_result');
const numberInput = document.getElementById('number_input');
const reverseResult = document.getElementById('reverse_result');
const addNumArr = [];
const revArr = [];

function isNumber(num) {
    if (num === '' || isNaN(+num)) {
        return false;
    } else {
        return true;
    }
}

function calc() {
    if (firstValue.value === '' || secondValue.value === '') {
        alert('NaN');
        return;
    }
    const firstNum = +firstValue.value;
    const secondNum = +secondValue.value;

    if (isNumber(firstNum) && isNumber(secondNum)) {
        switch (operator.value) {
            case '+':
                resCalc.textContent = (firstNum + secondNum);
                break;
            case '-':
                resCalc.textContent = (firstNum - secondNum);
                break;
            case '*':
                resCalc.textContent = (firstNum * secondNum);
                break;
            case '/':
                if (secondNum === 0) {
                    alert('Infinity');
                } else {
                    resCalc.textContent = (firstNum / secondNum);
                }
                break;
            default:
                break;
        }
    }
}

function addItem() {
    let arrSum = 0;
    const additionalNum = +itemInput.value;

    if (additionalNum) {
        addNumArr.push(additionalNum);

        for (const addNumArrElement of addNumArr) {
            arrSum += addNumArrElement;
        }
        sumItem.textContent = arrSum;
        arrayResult.textContent = JSON.stringify(addNumArr);
    } else {
        alert('NaN');
    }
}

function reversator(num) {
    if (num < 10) {
        revArr.push(num);
    } else {
        revArr.push(num % 10);
        reversator((num - (num % 10)) / 10);
    }
}

function reverseRender(arr, place) {
    place.textContent = '';

    for (const arrElement of arr) {
        place.textContent = place.textContent + arrElement;
    }
}

function reverseNumber() {
    const revNum = numberInput.value;
    if (isNumber(revNum)) {
        revArr.length = 0;
        reversator(revNum);
    }
    reverseRender(revArr, reverseResult);
}