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

let c1:Car={
    Name:"Safari",
    Variant:2022,
}

console.log(c1);

interface Tester1{
    Year:number,
    Name:string,
    [key1:string]:any;
}

const t1:Tester1={
    Year:2017,
    Name:"Amazing Tester",
    "OK":"YO",
    "More":"Yeah more to come",
    Properties:{
        subOne:"subOne",
        subTwo:22,
        subThree:false
    }
}

console.log(t1);