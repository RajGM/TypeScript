console.log("Hello World TypeScript");
async function hello() {
    console.log("Hello World from Async");
}
setTimeout(hello, 1000);
console.log("Refresh test");
let var1;
var1 = 54;
{
    let var1 = 55;
    console.log(var1);
}
console.log(var1);
{
    var1 = 56;
    console.log(var1);
}
console.log(var1);
var var2;
var2 = "String ME";
console.log(var2);
{
    let var2 = "StringME 2";
    console.log(var2);
}
console.log(var2);
{
    var2 = "100";
    console.log(var2);
}
console.log(var2);
let var3;
var3 = 33;
console.log(var3);
var3 = "String var3";
console.log(var3);
let var4;
console.log("var4:", var4);
var4 = 34;
console.log(var4);
var4 = 'String1';
console.log(var4);
let p1 = {
    first: "Yellow",
    last: "Man"
};
console.log(p1);
let p2 = {
    first: "Pink",
    last: "Boy",
    anything: "4221"
};
console.log(p2);
let c1 = {
    Name: "Safari",
    Variant: 2022,
};
console.log(c1);
const t1 = {
    Year: 2017,
    Name: "Amazing Tester",
    "OK": "YO",
    "More": "Yeah more to come",
    Properties: {
        subOne: "subOne",
        subTwo: 22,
        subThree: false
    }
};
console.log(t1);
function pow(x, y) {
    return Math.pow(x, y);
}
function voidReturn(x, y) {
    console.log(`x:${x} y:${y}`);
    console.log("This function returns void");
}
console.log(pow(4, 5));
voidReturn("Anthing is fine", 1234);
const arrNumber = [];
arrNumber.push(2);
arrNumber.push(4);
arrNumber.push(5);
console.log(arrNumber);
const testerArray = [];
testerArray.push(t1);
console.log(testerArray);
const customArray = [123, false];
console.log(customArray);
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
console.log("typeof x:" + typeof x);
let z = new Observable(12);
console.log("z:", z);
function getLength(obj) {
    return obj.length;
}
console.log(getLength("String1"));
console.log(getLength(["S1", "S2", "S3"]));
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray("StringTEST"));
console.log(wrapInArray(["S1", "S2", "3", "S4"]));
let arrayObj = [];
let stringArray = [];
stringArray = ["Ele1", "Ele2", "Ele3"];
arrayObj.push("stringArray");
console.log(arrayObj);
