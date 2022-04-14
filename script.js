// declared variables
var menuBtnOpen = document.querySelector("nav .openMenu");
var menuBtnClose = document.querySelector(".nav-var .closeMenu");
var menuDiv =document.querySelector(".nav-var");

// for menu list show & hide
    menuBtnOpen.addEventListener("click",()=>{
         menuDiv.style.left="0";
    });
    menuBtnClose.addEventListener("click",()=>{
           menuDiv.style.left="-100%";
    });
    
// navbar bg-color change
window.onscroll=function(){
    var nav=document.querySelector("nav");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        nav.style.background="rgb(50 65 88 / 96%)";
        
    } else {
        nav.style.background="transparent";
    }
}
// hide the navbar while click the nav-links

let navLinks = document.querySelectorAll(".nav-items");
navLinks.forEach(navlink => {
    navlink.addEventListener("click",()=>{
        menuDiv.style.left="-100%"; 
        });   
});
