var myNumber = ('42');
var myName = ('Erion');
console.log('my number: ' + myNumber);
console.log('my name: ' + myName);
var swich = myName;
myName = myNumber;
myNumber = swich;
console.log('my number: ' + myNumber);
console.log('my name: ' + myName);
console.log('switch: ' + swich);