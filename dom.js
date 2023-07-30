//using getElements methods : ID, CLASSNAME,TAGNAME
console.log(document.getElementById("click"));
let elemclass=document.getElementsByClassName("container");
console.log(elemclass[0]);
console.log(elemclass[0].style.backgroundColor="pink");  //style tag in html statementhas highest priority
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
//elemclass[0].remove("text-success"); //removes entire class
console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);
tn=document.getElementsByTagName("h1");
console.log(tn);
tn2=document.getElementsByTagName("div");
console.log(tn2);
createdElement=document.createElement('p');
createdElement.innerText="This is a created para";
tn2[0].appendChild(createdElement);
c2=document.createElement('b');
c2.innerText="This is bold";
tn2[0].appendChild(c2);
tn2[0].replaceChild(c2,createdElement);  //c2 replaced createdElement
tn2[0].removeChild(c2);   //to remove child
console.log(document.location);
console.log(document.title);
console.log(document.URL);
console.log(document.scripts);
console.log(document.links);
console.log(document.forms);
console.log(document.images);
console.log(document.domain);

//using Query Selector
sel=document.querySelector('.container');
console.log(sel);
sel2=document.querySelectorAll('.container');
console.log(sel2);