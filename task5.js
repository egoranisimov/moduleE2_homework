let arr = [1, 2, 3];
console.log(arr.length);
arr.map(function(item, index, array) {
    console.log(item);
    return array
});
