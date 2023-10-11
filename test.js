/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const string = x.toString();
    let mainArray = [];
    let compareArray = [];

    for (let i = 0; i < x.length; i++) {
        mainArray.push(string[i]);
    }

    let numMainArray = [];
    let numCompareArray = [];

    mainArray.forEach((value) => numMainArray.push(Number(value)));

    let currentBiggestArray = mainArray.length - 1;

    while (currentBiggestArray >= 0) {
        compareArray.push(mainArray[currentBiggestArray]);
        currentBiggestArray--;
    }

    let counter = 0;

    for (let i = 0; i < mainArray.length; i++) {
        if (numMainArray[i] === numCompareArray[i]) {
            counter++;
        }
    }

    compareArray.forEach((value) => numCompareArray.push(Number(value)));

    if (counter === mainArray.length) {
        return true;
    } else {
        return false;
    }
};

let result = isPalindrome(121);
console.log(result);
