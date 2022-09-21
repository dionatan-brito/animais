// const carro = {
//     marca: 'Ford',
//     ano: 2018
//   }
  
//   function descricaoCarro() {
//     console.log(this.marca + ' ' + this.ano);
//   }
  
//   descricaoCarro() // undefined undefined
//   descricaoCarro.call() // undefined undefined
//   descricaoCarro.call(carro) // Ford 2018


  const doc = document.querySelectorAll("p");
  
    const qtdCarac = Array.prototype.reduce.call(doc,(acc,atual)=>{
    const texto = atual.innerText.length
    return acc + texto;
  },0)

  console.log(qtdCarac)


  // Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function Dom(tag, classe, conteudo) {
    
    this.element = document.querySelector("html ",tag);
    console.log(this.element)
  };

  
  Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe);
  };
  const tag = new Dom('html');
  tag.ativo('ativar');

  Dom.prototype.addTag = function(tag) {
    this.element.innerHTML += tag;
  };

  const minhaTag = new Dom("<h1>");
  minhaTag.addTag(tag)

  Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe);
  };
  
  

console.log(elemento)
  

  


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

  