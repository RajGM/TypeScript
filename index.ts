console.log("Hello World TypeScript");

async function hello() {
    console.log("Hello World from Async");
}

setTimeout(hello, 1000);

console.log("Refresh test");

let var1: number;
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


var var2: string;

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

let var3: number | string;

var3 = 33;
console.log(var3);

var3 = "String var3";
console.log(var3);

type varValue = 'String1' | "String2" | 34 | "Number 45";

let var4: varValue;

console.log("var4:", var4);

var4 = 34;

console.log(var4);

var4 = 'String1';

console.log(var4);

interface Person {
    first: string;
    last: string;
    anything?;
}

let p1: Person = {
    first: "Yellow",
    last: "Man"
}

console.log(p1);

let p2: Person = {
    first: "Pink",
    last: "Boy",
    anything: "4221"
}

console.log(p2);

interface Car {
    Name: string;
    Variant: number;
}

let c1: Car = {
    Name: "Safari",
    Variant: 2022,
}

console.log(c1);

interface Tester1 {
    Year: number,
    Name: string,
    [key1: string]: any;
}

const t1: Tester1 = {
    Year: 2017,
    Name: "Amazing Tester",
    "OK": "YO",
    "More": "Yeah more to come",
    Properties: {
        subOne: "subOne",
        subTwo: 22,
        subThree: false
    }
}

console.log(t1);


function pow(x: number, y: number): number {
    return Math.pow(x, y);
}

function voidReturn(x, y): void {
    console.log(`x:${x} y:${y}`);
    console.log("This function returns void");
}

console.log(pow(4, 5));

voidReturn("Anthing is fine", 1234);

const arrNumber: number[] = []

arrNumber.push(2);
arrNumber.push(4);
arrNumber.push(5);

console.log(arrNumber);

const testerArray: Tester1[] = [];

testerArray.push(t1);

console.log(testerArray);

type Mylist = [number, boolean, string?, number?];

const customArray: Mylist = [123, false];

console.log(customArray);

class Observable<T>{
    constructor(public value: T) {

    }
}

let x: Observable<number>;

console.log("typeof x:" + typeof x);

let z = new Observable(12);

console.log("z:", z);

function getLength(obj: string | string[]) {
    return obj.length;
}

console.log(getLength("String1"));

console.log(getLength(["S1", "S2", "S3"]));

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}

console.log(wrapInArray("StringTEST"));

console.log(wrapInArray(["S1","S2","3","S4"]));

type ObjectWithNameArray = Array<{ name: string }>;

let arrayObj:ObjectWithNameArray[]=[];

let stringArray:ObjectWithNameArray[]=[];
stringArray = ["Ele1","Ele2","Ele3"];
arrayObj.push("stringArray");

console.log(arrayObj);
