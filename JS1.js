Типы данных в JS: number, string, boolean, null, indefined, object
///////
var name ="Ksenia";
console.log(name);
///////
name = "Maria";
console.log(name);
///////

if (name == "Maria") {
    console.log ("yes");
} else {
    console.log ("no");
}
///////

for (let i=0; i<10; i++) {
    console.log(i);
}

////////

function sum(p1, p2, p3) {
    result = p1+ p2 + p3;
    return result;
}

let add = sum (10,20,30);
console.log(add);

let add2 = sum (2,1,9);
console.log(add2);

/////////

var array = ["привет", "loftschool"];
array.push('я изучаю');
array.push('javascript');
console.log(array.length);

for (var i=0; i<array.length; i++) {
    console.log(array[i]);
}

/////////
var array = [0,101,8,65,524,48,32,213,900,1];
for (var i=0; i<array.length; i++) {
    if (array[i]>100) {
        console.log(array[i]);
    }
}
////////

var obj = {
    name: "Ksenia",
    lastName: "Tomilova",
    age: 27
}

console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.address = "Saint-Petersburg";
console.log(obj.address);

//////////////
var human = {
    name: "",
    lastName: "",
    age: ""
};
function hello(name,lastName,age) {
    human.name = name;
    human.lastName = lastName;
    human.age = age;

    return result = "Привет, меня зовут " + human.name + " " + human.lastName + " и мне " + human.age + " лет!";
}

var result = hello("Ksenia","Tomilova","27");
console.log (result);

//////////





