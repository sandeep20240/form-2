const button = document.getElementById("toogle-button")
const Closebutton = document.getElementById("close-button")
const Mobilemenu = document.getElementById("mobile-menu")
const overlay = document.getElementById("overlay")

button.addEventListener("click", function(){

    Mobilemenu.classList.toggle("hidden")
})
Closebutton.addEventListener("click", function(){
    Mobilemenu.classList.toggle("hidden")
})
overlay.addEventListener("click", function(){

    Mobilemenu.classList.toggle("hidden")
})