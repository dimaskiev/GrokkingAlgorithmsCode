/*
Написать код, который выполняет сортировку массива по возрастанию.
*/
function Smallest(array){
 */
    let smallest = array[0];
    let smallest_index = 0;
    for(let i=0;i < array.length; i++){
        if (array[i] < smallest){
            smallest = array[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

function selectionSort(array){
    let newArr = [];
    let i=0;
    while (array.length != 0){
        smallest = Smallest(array);
        newArr.push(array[smallest]);
        array.splice(smallest,1);
    }
    return newArr
}

const array = [5,-1,6,2,10, 0, -256, 3569, 12054];
console.log(array);
console.log(selectionSort(array))
