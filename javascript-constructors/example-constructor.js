function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.__proto__);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.__proto__);

var obj = new ExampleConstructor();
console.log('value of obj:', obj);

var instanceObj = obj instanceof ExampleConstructor;
console.log('value of instanceObj:', instanceObj);
