/*
4.2 Напишите рекурсивную функцию для подсчета
элементов в списке.
*/
function quantity(list){
 */
    let summ = 0;
    if (list.length === 0) return summ;
    else {
        const [first, ...last] = list;
        summ += 1;
        return  summ + quantity(last);
    }
}
console.log(quantity([1,'hhh',8,'sdfsdf','99',-89])); //6
