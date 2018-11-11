/*
4.1 Имеется массив чисел. Нужно просуммировать все числа и вернуть сумму.
*/
function summArray (array){
 */
    let summ = 0;
    if (array.length === 0) return summ;
    else {
        const [first, ...last] = array;
        summ += first;
        return  summ + summArray(last);
    }
}
