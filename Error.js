// Задание 1:

var newArr = [];

function filter(input, than) {

    for (var i=0; i < input.length; i++) {
        if (input[i] > than) {
            newArr.push(input[i]);
        }
    }
    return newArr;
}

var array = [12, 100, 34, 65, 10];

/////////
var result = filter(array, 60);
console.log(result); // [100, 65];

////////
result = filter(array, 20);
console.log(result); // [100, 34, 65];


