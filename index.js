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
