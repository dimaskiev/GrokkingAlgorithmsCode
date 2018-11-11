/*
4.3 Найдите наибольшее число в списке.\
*/
function biggestNumber (array){
    if (array.length === 0) return NaN;
    if (array.length === 1) return array[0];
    else {
        const [first, ...last] = array;
        if (first > last[0]) {
           last[0] = first;
        }
        return  biggestNumber(last);
    }
}

