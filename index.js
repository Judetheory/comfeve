/* footer date script*/ 

var date = new Date();
var year = date.getFullYear();
document.getElementById('curyr').innerHTML = year;

/**Menu Icon Show on media query */
let navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
    
}

function hideMenu() {
    navLinks.style.right = "-200px"
    
}

/**Duplication of client logo */

let copy = document.querySelector(".client-slide").cloneNode(true);
document.querySelector(".clients").appendChild(copy);