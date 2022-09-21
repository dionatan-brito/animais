const curso = document.querySelectorAll(".curso");

const array = Array.from(curso);

const mapArray = array.map(curso => {
    let titulo = curso.querySelector("h1").innerText;
    let desccription = curso.querySelector("p").innerText;
    let aulas = curso.querySelector(".aulas").innerText;
    let horas = curso.querySelector(".horas").innerText;
    return {titulo,
desccription,
aulas,
horas
    }
});

console.log(mapArray)



console.log(array)



// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numMaior100 = numeros.filter(item => item > 100);

console.log(numMaior100)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const retorno = instrumentos.some(item => {
    console.log(item)
   return item ==="Baixo" 
})

console.log(retorno)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
let somaCompras = compras.reduce((acc, item)=>{
    const precos = +item.preco.replace("R$ ", "").replace(",",".");
    return acc + precos;
},0)

console.log(somaCompras)

// console.log(string)

