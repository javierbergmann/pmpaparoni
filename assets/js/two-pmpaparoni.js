let btnOpenMenu= document.getElementById("btnOpenMenu");
let menuMobil= document.getElementById("menuMobil");
let btnCloseMenu= document.getElementById("btnCloseMenu");

btnOpenMenu.addEventListener("click",()=>{
    menuMobil.classList.remove("wh-0");
    btnCloseMenu.classList.remove("hidden");
    btnOpenMenu.classList.add("hidden");
} )

btnCloseMenu.addEventListener("click", ()=>{
    menuMobil.classList.add("wh-0");
    btnOpenMenu.classList.remove("hidden");
    btnCloseMenu.classList.add("hidden");
})
