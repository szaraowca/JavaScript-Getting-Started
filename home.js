

let person = {
    name: 'John',
    age: 32,
    partTime: false,
    showInfo : function(realAge) {
        showMessage(this.name + ' is '+ realAge);
    }

};

person.showInfo(42);
