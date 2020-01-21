 let textoClaseUl = document.querySelectorAll("aside > ul:first-child > li > a");
 let vacio = "";
//  console.log(textoClaseUl);
for (let index = 0; index < textoClaseUl.length; index++) {
    textoClaseUl[index].firstChild.textContent = "";
}
// console.log(textoClaseUl);

let textoH1 = document.querySelectorAll("header > nav > h1 > a")[0];

// console.log(textoH1);

textoH1.firstChild.textContent = "";
 

// Menu desplegable

let menu = document.querySelectorAll(".menu > li:last-child > a")[0];
let menuVer = document.getElementsByClassName("submenu")[0];
console.log(menuVer);

menu.addEventListener("mouseenter", (evt) =>{
    menuVer.style.opacity = "1";
    menuVer.style.visibility = "visible"
    // menuVer.classList.add("displayver");
});
menu.addEventListener("mouseleave", (evt) =>{
    menuVer.style.opacity = "0";
    menuVer.style.visibility = "hidden"
    // menuVer.classList.add("displayver");
});
// menu.addEventListener("mouseleave", () => {
//     menuVer.classList.add("displayver");
// });
