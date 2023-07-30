let obj={
    "name":"Alisha",
    "length":1,
    a:{this:'that'} //try no slash, single \ and double \\
}
console.log(typeof(obj));
jso=JSON.stringify(obj);
console.log(typeof(jso));
console.log(jso);

parsed=JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);

//backticks
let a=34;
console.log(`this is my ${a}`)