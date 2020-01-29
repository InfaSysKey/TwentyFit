let navbar = document.querySelectorAll("nav")[0];
let navSubmenu = document.querySelectorAll("nav .menu ul")[0];
let sticky = navbar.offsetTop;

window.onscroll = () => {menu()};
//Tareas al recargar la página
$(window).load( tareasLoad() );
quitarTexto();


function tareasLoad() {
    $(".cargador").fadeOut("slow"); //Imagen de carga
    $(this).scrollTop(0); //Que empiece desde la parte superior
}
function quitarTexto() {
    let textoClaseUl = document.querySelectorAll("aside > ul:first-child > li > a");
    let textoH1 = document.querySelectorAll("nav > h1 > a")[0];
    let textoH1CAnvas = document.querySelectorAll(".off-canvas > div > h1 > a")[0];
    for (let index = 0; index < textoClaseUl.length; index++) {
        textoClaseUl[index].firstChild.textContent = "";
    }
    textoH1CAnvas.firstChild.textContent = "";
    textoH1.firstChild.textContent = "";
}
function menu() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navSubmenu.classList.remove("submenu");
        navSubmenu.classList.add("stickymenu");
    } else {
        navbar.classList.remove("sticky");
        navSubmenu.classList.remove("stickymenu");
        navSubmenu.classList.add("submenu");
        console.log("aquie");
        
        // nav_submenu.classList.remove("stickymenu");
    }
}

let boton = document.querySelectorAll(".off-canvas > div > button")[0];
let botonCerrar = document.getElementsByClassName("closebtn")[0];

boton.addEventListener("click", ()=>{
    openNav();
});
botonCerrar.addEventListener("click", () =>{
    closebtn();
});
function openNav() {
    document.getElementById("mySidenav").style.left = "0%";
}
  
function closebtn() {
    document.getElementById("mySidenav").style.left = "-100%";
  }
