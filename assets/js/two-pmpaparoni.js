let btnOpenMenu= document.getElementById("btnOpenMenu");
let menuMobil= document.getElementById("menuMobil");
let btnCloseMenu= document.getElementById("btnCloseMenu");
let menuMobilNav= document.getElementById("menuMobilNav");

btnOpenMenu.addEventListener("click",()=>{
    menuMobil.classList.remove("hidden");
    btnCloseMenu.classList.remove("none");
    btnOpenMenu.classList.add("none");
} )

btnCloseMenu.addEventListener("click", ()=>{
    menuMobil.classList.add("hidden");
    btnOpenMenu.classList.remove("none");
    btnCloseMenu.classList.add("none");
})
