//Load pagina
$(window).load(function() {
    $(".cargador").fadeOut("slow");
});

//Sscroll menú
window.onscroll = () => {menu()};
window.addEventListener('load', () =>{
    $(this).scrollTop(0);
});

let textoClaseUl = document.querySelectorAll("aside > ul:first-child > li > a");
let vacio = "";
//  console.log(textoClaseUl);
for (let index = 0; index < textoClaseUl.length; index++) {
    textoClaseUl[index].firstChild.textContent = "";
}
// console.log(textoClaseUl);

let textoH1 = document.querySelectorAll("nav > h1 > a")[0];
let textoH1CAnvas = document.querySelectorAll(".off-canvas > h1 > a")[0];

// console.log(textoH1);
textoH1CAnvas.firstChild.textContent = "";
textoH1.firstChild.textContent = "";
 
function menu() {
    let navbar = document.querySelectorAll("nav")[0];
    let nav_submenu = document.querySelectorAll(".submenu")[0];
    let sticky = navbar.offsetTop;
    console.log(nav_submenu);

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        nav_submenu.classList.add("stickymenu");
    } else {
        navbar.classList.remove("sticky");
        nav_submenu.classList.remove("stickymenu");
    }
}
