/*
* Программа для быстрой сортировки массива по врозрастанию
*/

/*Базовым єлементом берем первый элемент массива*/
function quickSort(array) {

    if (array.length < 2) {
        return array;
    }
    else {

        const based = array[0];
        let less = [], greater = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < based) {
                less.push(array[i]);
            }
            if (array[i] > based) {
                greater.push(array[i]);
            }

        }
        return [...quickSort(less), based, ...quickSort(greater)];

    }
}

/*Базовым єлементом берем средний элемент массива*/
function quickSort2(array) {

    if (array.length < 2) {
        return array;
    }
    else {

        const based = array[Math.floor(array.length/2)];
        let less = [], greater = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < based) {
                less.push(array[i]);
            }
            if (array[i] > based) {
                greater.push(array[i]);
            }

        }
        return [...quickSort2(less), based, ...quickSort2(greater)];

    }
}


/*Базовым єлементом берем случайный элемент массива*/
function quickSort3(array) {

    if (array.length < 2) {
        return array;
    }
    else {

        const based = array[Math.floor(Math.random()*array.length)];
        let less = [], greater = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < based) {
                less.push(array[i]);
            }
            if (array[i] > based) {
                greater.push(array[i]);
            }

        }
        return [...quickSort3(less), based, ...quickSort3(greater)];

    }
}

const array = [-7, 985, 654, 6598, -656565, 65, 7, 10, 9, 99, 99, -56, -5, 98, 65, 0, -89, -6, 6565, 8, 98, -65, 9898];
console.log(array);

console.time('Start');
console.log(quickSort(array));
console.timeEnd('Start');

console.time('Start');
console.log(quickSort2(array));
console.timeEnd('Start');

console.time('Start');
console.log(quickSort3(array));
console.timeEnd('Start');
