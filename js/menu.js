export default function hamburgerMenu(menuBtn,menu,menuLink) {
    
    const d = document;
    d.addEventListener('click',e=>{
        if(e.target.matches(menuBtn)||e.target.matches(`${menuBtn} *`)){
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(menuBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            d.querySelector(menu).classList.remove("is-active");
            d.querySelector(menuBtn).classList.remove("is-active");
        }
    })   
}