let modal=document.getElementById("modal");
let dis=document.getElementById("display");
let img=document.getElementById("img");
let para=document.getElementById( "para");
let day=document.getElementById( "day");
let close=document.getElementsByClassName("fa-times");
close[0].addEventListener("click", (e)=>{
    modal.style.display="none";
})
function main(){
    modal.style.display="block";
}
function apple(){
    img.setAttribute("src", "https://source.unsplash.com/random/?&apple");}
function banana(){
    img.setAttribute("src","https://source.unsplash.com/random/?&banana");
}
function kiwi(){
    img.setAttribute("src", "https://source.unsplash.com/random/?&kiwi");
}
function lichi(){
    img.setAttribute("src", "https://source.unsplash.com/random/?&lichi");
}
function mango(){
    img.setAttribute("src", "https://source.unsplash.com/random/?&mango");
}
