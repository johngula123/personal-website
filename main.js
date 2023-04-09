//Hamburger menu
function showMenu(){
let menuList = document.getElementById('list');
if (menuList.style.display === "none") {
    menuList.style.display = "flex";
  } else {
    menuList.style.display = "none";
  }
}
showMenu()
//typing a word "Web Developer"
var typing= new Typed(".typeText", {
       strings: ["", "Web Developer"],
       typeSpeed: 150,
       backSpeed: 40,
       loop: true,
   });

