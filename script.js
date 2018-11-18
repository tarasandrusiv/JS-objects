let person = {
  width: 80,
  height: 190,
  name: "personName"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n));
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(person);

alert( "person width=" + person.width + " height=" + person.height + " name=" + person.name );


function mutateDeepObject(obj) {
  obj.a.key = true;
}

const obj = {a: {key: false}};
const copy = Object.assign({}, obj);
mutateDeepObject(copy)
console.log(obj.a.key); 



let characters = [
    {'name': 'Nick', 'age': 43},
    {'name': 'Tom', 'age': 50}
    
];
     
 function pluck(array, key) {
  return array.map(function(obj) {
    return obj[key];
  });
}
  
  console.log(pluck(characters,'age'));



let obj = {name: 'Tom', a: 3, city : 'Lviv'};

let count = function (obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
};

console.log(count(obj)); 





