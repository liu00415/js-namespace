var LIU00415 = {
init: function(){

let d = document.createElement("div");
    
d.className = "box";

d.textContent = "liu00415"

document.getElementById("boxes").appendChild(d);


d.addEventListener("click", clicked);
d.addEventListener("mouseover", hover);
d.addEventListener("mouseout", release);
 
function clicked (ev){
    d.style.borderColor = "white";
    d.style.backgroundColor = "black";
    d.style.color = "white";
}
               
function hover (ev){
    ev.currentTarget.classList.toggle("highlight");
}
    
function release (ev){
    ev.currentTarget.classList.toggle("highlight");
}
    
}
}
