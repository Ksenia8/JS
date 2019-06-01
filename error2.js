var newArr = [];

function filter(input, than) {

    for (var i=0; i<input.length; i++) {
        if (input.length===0) {
            throw new Error('передан пустой массив');
        } else if (isNaN(input[i])) {
            throw new Error('элемент массива не является числом');
        } else if (input[i]<0) {
            throw new Error('среди элементов массива есть отрицательное значение');
        } else if (input[i]>than) {
            newArr.push(input[i]);
        }
    }
    return newArr;
}
try {
    var array = [12, 100, "ccc", 550, 10];
    var result = filter(array, 30);
    console.log(result);

} catch (e) {
    console.log(e.message);
}
