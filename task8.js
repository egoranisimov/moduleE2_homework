let map = new Map([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
    [4, 'Four'],
])

for (let elem of map){
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}
