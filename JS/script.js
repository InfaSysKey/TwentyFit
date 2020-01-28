
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
    let textoH1CAnvas = document.querySelectorAll(".off-canvas > h1 > a")[0];
    for (let index = 0; index < textoClaseUl.length; index++) {
        textoClaseUl[index].firstChild.textContent = "";
    }
    textoH1CAnvas.firstChild.textContent = "";
    textoH1.firstChild.textContent = "";
}
function menu() {
    let navbar = document.querySelectorAll("nav")[0];
    let navSubmenu = document.querySelectorAll("nav .menu ul")[0];
    console.log(navSubmenu);
    
    let sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navSubmenu.classList.remove("submenu");
        navSubmenu.classList.add("stickymenu");
    } else {
        navbar.classList.remove("sticky");
        navSubmenu.classList.remove("stickymenu");
        navSubmenu.classList.add("submenu");
        // nav_submenu.classList.remove("stickymenu");
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  } 
