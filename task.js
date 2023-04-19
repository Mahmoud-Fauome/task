var btn= document.querySelector("button");
var myInput = document.querySelector("input");
var myDiv = document.querySelector("div")

myInput.addEventListener("click",()=>{
    if(myInput.value.length<=5){
         btn.disabled=false;
    }
});
btn.addEventListener("click",()=>{
        var myH1=document.createElement("h1")
              myH1.style.backgroundColor="#ffc107"
              myH1.style.width="fit-content"
              myH1.style.borderRadius="12%"
              myH1.style.marginBottom= "0%";

    var mytext=document.createTextNode(`${myInput.value}`)
       myH1.appendChild(mytext);
       myDiv.appendChild(myH1)
    var btn2= document.createElement("button")
        btn2.style.padding="0% 1%";
    var texty=document.createTextNode("x")
        btn2.appendChild(texty)
       myDiv.appendChild(btn2)
       myInput.value="";
btn.disabled=true;
btn2.addEventListener("click",()=>{
    myDiv.removeChild(myH1)
    myDiv.removeChild(btn2)
})
    })