const { array } = require("./array")

function bubbleSort(unsortedArray) {
    if(unsortedArray.length == 1 || unsortedArray.length == 0) {
        return unsortedArray;
    }
    var sortedItems = 0;
    for (let i = 0; i < unsortedArray.length-1; i++) {
        if(unsortedArray[i] > unsortedArray[i+1]) {
            var temp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[i+1];
            unsortedArray[i+1] = temp;
        }
        else {
            sortedItems++;
            if(sortedItems >= unsortedArray.length-2) {
                return unsortedArray
            }
        }
    }

    return bubbleSort(unsortedArray);
}

function quickSort(unsortedArray) {
    if(unsortedArray.length == 1 || unsortedArray.length == 0) {
        return unsortedArray;
    }
    var pivot = unsortedArray[0];

    var bigger = [];
    var smaller = [];

    for (let i = 1; i < unsortedArray.length; i++) {
        if(unsortedArray[i] > pivot) {
            bigger.push(unsortedArray[i]);
        }
        else {
            smaller.push(unsortedArray[i]);
        }
    }

    if(bigger.length > 10) {
        bigger = quickSort(bigger);
    }
    else {
        bigger = bubbleSort(bigger)
    }

    if(smaller.length > 10) {
        smaller = quickSort(smaller);
    }
    else {
        smaller = bubbleSort(smaller)
    }

    var sortedArray = [];
    sortedArray.push(...smaller);
    sortedArray.push(pivot);
    sortedArray.push(...bigger);

    return sortedArray;
}

var then = performance.now();
var sorted = quickSort(array);
var now = performance.now();

console.log(Math.floor((now - then)) + "ms")
console.log(sorted)