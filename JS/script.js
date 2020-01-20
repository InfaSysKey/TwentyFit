 let textoClaseUl = document.querySelectorAll("aside > ul:first-child > li > a");
 let vacio = "";
 console.log(textoClaseUl);
for (let index = 0; index < textoClaseUl.length; index++) {
    textoClaseUl[index].firstChild.textContent = "";
}
console.log(textoClaseUl);

let textoH1 = document.querySelectorAll("header > nav > h1 > a")[0];

console.log(textoH1);

textoH1.firstChild.textContent = "";
 