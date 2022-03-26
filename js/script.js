/* ********** Menu ********** */

import hamburgerMenu from "../pruebas/menu.js";
/******* slide ******** */
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}


const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".btn-menu",".menu", ".lista-menu a")
})
/** */
  
((d) => {
    const $btnMenu = d.querySelector(".btn-menu"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) =>{
        
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-dwn")

    })
    
    d.addEventListener("click", (e)=>{
        if (!e.target.matches(".menu a")) return false;
        $menu.classList.remove("is-dwn");

    })
})(document);

/******* sabores****** */


/***********menu *********** */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu"),
      $menuText = d.querySelector(".menu-mobil-op");
  
    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
        $menuText.classList.toggle("is-active")

    });
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
      $menuText.classList.remove("is-active");
    });
  })(document);

