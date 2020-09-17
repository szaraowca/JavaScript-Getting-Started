
let mySymbol = Symbol();
let person = {
    name: 'John',
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation'

};

person.age = 42;
person ['partTime']= true;
showMessage (person.partTime);

//if we have a secret information, we can "hide" it inside object