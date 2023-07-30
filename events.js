function clicked()
{
    console.log("This button was clicked");
}

window.onload=function() //////New
{
    console.log('The document was loaded');
}

firstcontainer.addEventListener('click',function(){
    console.log("Click hua");
})
firstcontainer.addEventListener('mouseover',function(){
    console.log("Mouse on Container");
})
firstcontainer.addEventListener("mouseout",function(){
    console.log("Mouse out of Container");
})
firstcontainer.addEventListener('mouseup',function(){
    console.log("Mouse up when clicked on container");   //when mouse is released
})
firstcontainer.addEventListener('mousedown',function(){
    console.log("Mouse down when clicked on container");  //when mouse is pressed
})

let prevhtml=document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevhtml;
    console.log("Mouse up when clicked on container");   //when mouse is released
})
firstcontainer.addEventListener('mousedown',function(){
    document.querySelectorAll(".container")[1].innerHTML="<b>Hi boldie</b>";
    console.log("Mouse down when clicked on container");  //when mouse is pressed
})