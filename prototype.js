// function Pessoa(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// }

// var obj = {
//     nome: "André",
//     idade: 28
// }

// obj.endereco = "Rua Dr Jose Bento Corrêa"

// console.log(obj);

// Pessoa.prototype.andar = function(){
//     return console.log(this.nome + " Pessoa andou");
// }
// const dionatan = new Pessoa("Dionatan", 36)
// dionatan.andar();


// console.log(Pessoa.prototype);

// console.log(dionatan);

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    }

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.returnName = function(){
    return console.log(this.nome+" "+this.sobrenome);
}

const pessoa  = new Pessoa("Dionatan", "Senna de Brito");
pessoa.returnName();

// Liste os métodos acessados por 
// dados criados com NodeList,

const lista = document.querySelectorAll("li");

console.log(lista);
// HTMLCollection, Document

const lista2 = document.getElementsByTagName("li");

console.log(lista2);



// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

