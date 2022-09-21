// const lista = document.querySelector(".animais-lista");

// console.log(lista.outerHTML);

// console.log(lista.parentNode);

// console.log(lista.previousElementSibling);

// console.log(lista.children[0]);

// console.log(lista.children[--lista.children.length]);

// const li = lista.querySelectorAll("li");

// console.log(li);

// const lastLi = lista.querySelector("li:last-child");

// console.log(lastLi);

// const menu = document.querySelector(".menu");

// console.log(menu.outerHTML);

// console.log(menu.innerHTML);

// console.log(menu.innerText);

//menu.innerText = "<p>Meu teste</p>";

//menu.innerHTML = "<p>Meu teste</p>";

// console.log(lista.firstChild);

// console.log(lista.childNodes);

// const contato = document.querySelector(".contato");

// const titulo = document.querySelector("#titulo");

// contato.appendChild(lista);

//contato.insertBefore(lista,titulo);

// console.log(titulo.outerHTML)

//contato.removeChild(titulo);

// const animais = document.querySelector(".animais");

// console.log(animais)

// const novoH1 = document.createElement('h1');

// novoH1.innerText = "Novo H1";

// novoH1.classList.add("titulo");

// animais.appendChild(novoH1);

// const cloneTitulo = titulo.cloneNode(true);

// contato.appendChild(cloneTitulo);




// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");

const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector(".copy");

copy.appendChild(cloneMenu);



// Selecione o primeiro DT da dl de Faq

const primeiroDT = document.querySelector(".faq dt:first-child");

console.log(primeiroDT)

// Selecione o DD referente ao primeiro DT

console.log(primeiroDT.firstChild)

console.log(primeiroDT.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector(".faq");

const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;











