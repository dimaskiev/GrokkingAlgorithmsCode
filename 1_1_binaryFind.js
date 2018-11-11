/*
Количество попыток для поиска числа в отсортированном массиве методом бинарного поиска
*/
let array = [];
for(let i=0; i<128; i++){
    array[i] = i+1;
}


const findNumber = (array, number) =>{
    let start = 0, finish = array.length-1, counter=1;
    while (start <= finish){
        let index = Math.floor((finish - start)/2) + start;
        let middle = array[index];
        if (middle == number){
            return counter;
        } else  if (middle > number ){
            finish = index - 1;

        } else {
            start = index + 1;
        }
        counter += 1;
    }
}

console.log(findNumber(array, 31));
