//FOR LOOP
let arr=[7,8,6,5,3];
console.log(arr);
console.log("For loop");
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//second way : using forEach
console.log("Using forEach");
arr.forEach(function(element){
    console.log(element);
})

// const a=5;
// a=a++;
// console.log(a);  //throws an error when we try to modify a constant

//WHILE LOOP
let j=0;
console.log("While loop");
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}
//DO WHILE
let k=0;
console.log("Do while loop");
do{
console.log(arr[k]+1);
k++;
}while(k<arr.length);

//break and continue
console.log("Using break statement");
for(let i=0;i<arr.length;i++)
{
    if(i==2){
        break;}                
    console.log(arr[i]);    //7,8
}
console.log("Using continue statement");
for(let i=0;i<arr.length;i++)
{
    if(i==2){
        continue;}
    console.log(arr[i]);      //7,8,5,3
}