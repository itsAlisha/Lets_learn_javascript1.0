//ARRAY METHODS
let myArr=["Fan","Camera",34,null,true];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("Harry");
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift("Harry");
console.log(myArr);
console.log(myArr.unshift("Alisha"));
const l=myArr.unshift("Girl");
console.log(l);
console.log(myArr);
myArr.toString();
console.log(myArr);
myArr.sort();
console.log(myArr);
let d=[2,1,3,6,8,4]
d.sort();
console.log(d);

//STRING METHODS
let myString="Alisha is a good girl good";
console.log(myString.length);
console.log(myString.indexOf("good"));
console.log(myString.lastIndexOf("good"));
console.log(myString.slice(3,7));
console.log(myString.replace("good","beautiful"));  //only first occurence replaced

//DATE METHODS
let myDate=new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getTime());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());