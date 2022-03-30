var hamburger=document.querySelector(".hamburger");
var mobileNav=document.querySelector("#nav-ul");
var bars=document.querySelectorAll(".hamburger span");
var Active=false;
hamburger.addEventListener("click",function()
{
    mobileNav.classList.toggle("open");
    if(!Active)
    {
        bars[0].style.transform="rotate(45deg)";
        bars[1].style.opacity="0";
        bars[2].style.transform="rotate(-45deg)";
       Active=true;
    }
    else
    {
        bars[0].style.transform="rotate(0deg)";
        bars[1].style.opacity="1";
        bars[2].style.transform="rotate(0deg)";
       Active=false;
    }
})