// Verifique a distância da primeira imagem

const imagem = document.querySelector("img");

const imagens = document.querySelectorAll("img");

console.log(imagens);

// let sum = 0;
// let size = imagens[2].clientWidth;

// console.log(size)

// for(let i = 0; i < imagens.length; i++){
//     sum += imagens[i].clientWidth;
//     console.log(imagens[i].clientWidth)
// };
// console.log(sum);



// console.log(imagem.getBoundingClientRect());
// // em relação ao topo da página

console.log("A distância da primeira imagem ao topo da página é: "+imagem.offsetTop);


// console.log(imagem.clientHeight);
// console.log(imagem.clientTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
    let soma = 0;
    imagens.forEach(item=>{
        soma += item.clientWidth;
    })
    console.log(soma)
}

window.onload = ()=>{
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
const links = document.querySelectorAll("a");

console.log(links);
links.forEach(item => {
if(item.clientWidth || item.clientHeight < 48){
    console.log("O link " + item.href + " não possui o tamanho recomendado ")
}else{
    console.log("O link possui o tamanho recomendado");
}
})
// com o dedo. (48px/48px de acordo com o google)



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


let browser = window.matchMedia('(max-width: 720px)');

if(browser.matches){
const menu = document.querySelector(".menu");
menu.classList.add("menu-mobile");
}
