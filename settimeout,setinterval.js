//Arrow functions :
sum=(a,b)=>
{
    return a+b;
}

logKaro=()=>{
document.querySelectorAll('.container')[1].innerHTML="<b>Set Interval fired</b>";
console.log("I am your log");
}

// setTimeout(logKaro,2000);   //occurs once after 2 seconds
// setInterval(logKaro,2000);  //occurs repetitively after 2 seconds

clr=setInterval(logKaro,5000);
console.log("Cleared setInterval");
clearInterval(clr);

clr2=setTimeout(logKaro,5000);
console.log("Cleared setTimeout");
clearInterval(clr2);