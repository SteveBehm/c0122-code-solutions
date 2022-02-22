function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var obj = new ExampleConstructor();
console.log('value of obj:', obj);

var instanceObj = obj instanceof ExampleConstructor;
console.log('value of instanceObj:', instanceObj);
