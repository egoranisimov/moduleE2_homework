let arr = [5, 5, 5, 5, 5, 5];

let res = 0
for (let i = 0; i < (arr.length - 1) ; i = i + 1) {
    res = res + arr[i] % arr[i+1]
}

if (res == 0){
  console.log('Все числа в массиве одинаковые')
} else {
  console.log('В массиве разыне числа')
}
