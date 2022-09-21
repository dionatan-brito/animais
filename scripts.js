// const animais = document.querySelector(".animais");
// console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");
img.setAttribute("alt", "É uma raposa");

//const altImg = img.getAttribute("alt");
//console.log(altImg)

// const possuiAlt = img.hasAttribute("alt");
// console.log(possuiAlt);

// if(possuiAlt) 
// console.log("possui a propriedade alt")
// else
// console.log("Não possui a propriedade alt")

// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelector("nav");

const menuUl = menu.querySelectorAll("li");
menuUl.forEach(element => {
    element.classList.add("ativo");
    console.log(element);
});

console.log(menuUl)
//
console.log(menu)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuUl.forEach((item, i)=>{
if(i===0) return
else item.classList.remove("ativo")
    
})

// const menuArray = Array.from(menuUl);

// for(let i = menuArray.length -1; i >= 0; i--){
//     if(i === 0){
//         break;
//     }
//     menuArray[i].classList.remove("ativo");

    
//     console.log(i)
//     console.log(menuArray[i]);
// }

// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll("img");

console.log(imagens)

imagens.forEach((item, i) => {
   let possui = item.hasAttribute("alt");
   if(possui){
    console.log("A imagem ", i, " possui o atributo alt"); 
    console.log(imagens[i].innerText);
}else{
    console.log("A imagem ", i, "não possui o atributo alt");
}
});





// Modifique o href do link externo no menu

const linkExterno = document.querySelector('[href^="https://www.origamid"]');

 linkExterno.setAttribute("href", "http://www.google.com");

console.log(linkExterno)



