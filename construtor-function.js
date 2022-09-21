// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
//   }



  function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.andar = function(andou){
        console.log(nome + " "+ idade + andou);
    }
  }

  const pessoa = new Pessoa("João", 20);
  pessoa.andar(" andou");

  const pessoa2 = new Pessoa("Maria", 25);
  pessoa2.andar(" andou");

  console.log(pessoa2)

  const pessoa3 = new Pessoa("Bruno", 15);
  pessoa3.andar(" andou");

  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

  
  function Dom(seletor){

    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;

    this.adicionaClasse = function(classe){
        elementList.forEach(elemento =>{
            elemento.classList.add(classe);
            return console.log(elemento);
        });
    }
    this.removeClasse = function(classe){
        elementList.forEach(elemento => {
            elemento.classList.remove(classe)
        });
    }
}








  const lista = new Dom("li");
  lista.adicionaClasse("ativo");

  //lista.removeClasse("ativo")

  


  
  