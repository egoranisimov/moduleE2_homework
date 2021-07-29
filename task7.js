let arr = [5, 4, 3, 6, 19, 28, 0];

let evenNumber = 0
let oddNumber = 0
let nullNumber = 0

for (let i = 0; i < (arr.length); i++) {
    if (typeof arr[i] == 'number' && !isNaN(arr[i])) {
        if (arr[i] == 0){
            nullNumber++
        }else if (arr[i] % 2 == 0) {
            evenNumber++
        }else {
            oddNumber++
        }
    }
}

console.log(`Количество четных элементов в массиве -  ${evenNumber}`);
console.log(`Количество нечетных элементов в массиве -  ${oddNumber}`);
console.log(`Количество нулевых элементов в массиве -  ${nullNumber}`);
