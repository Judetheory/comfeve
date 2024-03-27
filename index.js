var date = new Date();
var year = date.getFullYear();
document.getElementById('curyr').innerHTML = year;


let navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
    
}

function hideMenu() {
    navLinks.style.right = "-200px"
    
}