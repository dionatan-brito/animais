// const animaisLista = document.querySelector(".animais-lista");

// function callBack(event){
//     const currentTarget = event.currentTarget;
//     const target = event.target;
//     const type = event.type;
//     const path = event.path;

//     console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener("click",callBack);

// const imgs = document.querySelectorAll("img");

// function imgSrc(event){
//     const src = event.currentTarget.getAttribute("src");
//     console.log(src);
// }

// imgs.forEach(img => {
// img.addEventListener("click",imgSrc);
// });

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('[href^="#"]');

console.log(linksInternos);
function clickNoLink(event){
    event.preventDefault();
    linksInternos.forEach(link => {
        link.classList.remove("ativo");
    })
    event.currentTarget.classList.add("ativo");
}

linksInternos.forEach(link =>{
    link.addEventListener("click",clickNoLink);
})



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const bodys = document.querySelectorAll("body *");

console.log(bodys);

function mostraElemento(event){
    console.log(event.target);
}

bodys.forEach(item =>{
item.addEventListener("click",mostraElemento);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento



function removeElemento(event){
    event.target.remove();
    console.log("Foi removido o elemento ", event.target);
}

bodys.forEach(item =>{
item.addEventListener("click",removeElemento);
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeyboard(event){
    if(event.key === 't'){
        document.body.classList.toggle("font-size-big");
        console.log("chamou a função")
    }
}

window.addEventListener("keydown", handleKeyboard);
