/*
There are 2 Major classification of data types in JS : Primitive and Reference Data Types
Primitive Data Types : 1. number, 2. strings, 3. boolean, 4. symbol, 5. undefined, 6. null
Reference Data Types : 1. Array, 2. Objects
*/
//Primitve Data Types : 
//1.
var number1=34;
var number2=150;
console.log(number1+number2);
//2.
var str1="Hello";
var str2="World";
console.log(str1+" "+str2);
//3.
var a=true;
var b=false;
var c=a+b;
console.log(c);
var d=a*b;
console.log(d);
console.log(a,b);
//5.
var u;   //nothing specified reurns undefined
console.log(u);
var v=undefined;
console.log(v);
//6.
var l=null;
console.log(l);

//Reference Data Types :
//1.
var arr1=[1,1,2,3,2];
console.log(arr1);
console.log(arr1[0]*70);
console.log(arr1[5]);
console.log(arr1[4]);
var arr2=["babu","shona",1,2,3]
console.log(arr2);
//2.
var marks={
ravi:55,
shubh:61,
harry:99.97
}
console.log(marks);