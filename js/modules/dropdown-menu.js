import { outSideclick } from "./outsideclick.js";
export default function dropDownMenu(){

    const dropDownMenus = document.querySelectorAll('[data-dropdown]');
    
    dropDownMenus.forEach(menu =>{
        ['touchstart', 'click'].forEach(userEvent =>{
        menu.addEventListener(userEvent, handleClick);
    
        })
    })
    
    function handleClick(event){
        event.preventDefault();
        this.classList.add("active");
        outSideclick(this,['touchstart', 'click'],()=>{
            this.classList.remove("active");
        })
    }

}










